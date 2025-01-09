import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { PackageDict } from "@/domain/model/scip";

export class ComposerLockFetcher {
	private packageDict: PackageDict = {};
	constructor(private workspaceFolder: string) {}

	execute(): PackageDict {
		const composerData = this.readComposerLock();
		return this.extractPsr4Mapping(composerData);
	}

	private readComposerLock(): unknown {
		const composerLockPath = path.join(this.workspaceFolder, "composer.lock");
		if (!existsSync(composerLockPath)) {
			throw new Error(`composer.lock not found at ${composerLockPath}`);
		}
		const content = readFileSync(composerLockPath, "utf-8");
		return JSON.parse(content);
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	public extractPsr4Mapping(data: any): PackageDict {
		if (!data.packages) {
			throw new Error("Invalid composer.lock format: `packages` not found");
		}

		for (const pkg of data.packages) {
			const name = pkg.name ?? "";
			const version = pkg.version ?? "";
			if (!name || !version) {
				continue;
			}
			const psr4 = pkg.autoload["psr-4"];
			if (!psr4) {
				continue;
			}
			for (const [namespacePrefix, _dirs] of Object.entries(psr4)) {
				const dirs = Array.isArray(_dirs) ? _dirs : [_dirs];
				for (const dir of dirs) {
					this.addNamespaceMappings(dir, namespacePrefix, name, version);
				}
			}
		}
		return this.packageDict;
	}

	private addNamespaceMappings(
		dir: string,
		namespacePrefix: string,
		packageName: string,
		packageVersion: string,
	) {
		const dirPath = path.join(this.workspaceFolder, "vendor", packageName, dir);
		if (!existsSync(dirPath)) {
			return;
		}

		const traverseDirectory = (currentPath: string) => {
			const entries = readdirSync(currentPath, { withFileTypes: true });

			for (const entry of entries) {
				const fullPath = path.join(currentPath, entry.name);
				if (entry.isDirectory()) {
					traverseDirectory(fullPath); // 再帰
				} else if (entry.isFile() && /\.php$/.test(entry.name)) {
					const namespaceSuffix = fullPath
						.replace(dirPath, "")
						.replace(/\.php$/, "")
						.replace(/[\\/]/g, "\\");
					const namespace = `${namespacePrefix}${namespaceSuffix}`;
					this.packageDict[namespace] = {
						name: packageName,
						version: packageVersion,
						src: fullPath,
					};
				}
			}
		};
		traverseDirectory(dirPath);
	}
}
