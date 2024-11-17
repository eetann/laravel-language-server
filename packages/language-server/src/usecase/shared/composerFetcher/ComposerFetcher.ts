import { existsSync, readFileSync } from "node:fs";

export type PackageDict = {
	[packageSymbol: string]: string | string[];
};

export class ComposerFetcher {
	constructor(private composerLockPath: string) {}

	execute(): PackageDict {
		const composerData = this.readComposerLock();
		return this.extractPsr4Mapping(composerData);
	}

	private readComposerLock(): unknown {
		if (!existsSync(this.composerLockPath)) {
			throw new Error(`composer.lock not found at ${this.composerLockPath}`);
		}
		const content = readFileSync(this.composerLockPath, "utf-8");
		return JSON.parse(content);
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private extractPsr4Mapping(data: any): PackageDict {
		if (!data.packages) {
			throw new Error("Invalid composer.lock format: `packages` not found");
		}
		const mapping: PackageDict = {};

		for (const packageData of data.packages) {
			const name = packageData.name ?? "";
			const version = packageData.version ?? "";
			if (name === "" || version === "") {
				continue;
			}
			let srcList: string | string[];
			const psr4 = packageData.autoload["psr-4"];
			if (typeof psr4 === "string") {
				// TODO: ここでSymbolを使う
				srcList = psr4;
			} else {
				//
			}
			const packageSymbol = `composer ${name} ${version}`;
			mapping[packageSymbol] = srcList;
		}
		return mapping;
	}
}
