import { existsSync, readFileSync } from "node:fs";

type PackageDict = {
	// Symbolとして書く
	[packageSymbol: string]: {
		name: string;
		version: string;
		srcList: {
			[usename: string]: string;
		};
	};
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
			const psr4 = packageData.autoload["psr-4"];
			if (name === "" || version === "" || !psr4) {
				continue;
			}
			const packageSymbol = `composer ${name} ${version}`;
			mapping[packageSymbol] = {
				name,
				version,
				srcList: psr4,
			};
		}
		return mapping;
	}
}
