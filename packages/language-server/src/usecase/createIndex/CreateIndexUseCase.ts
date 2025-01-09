import { readdirSync } from "node:fs";
import path from "node:path";
import { type Index, IndexSchema } from "@/domain/model/scip";
import { create } from "@bufbuild/protobuf";
import {
	ComposerLockFetcher,
	type PackageDict,
} from "../shared/composerLockFetcher/ComposerLockFetcher";
import { indexOneFile } from "./IndexStrategy";

export type ViewCaller = {
	parentSymbol: string;
	callerLocation: number;
	viewPath: string;
	arguments: string[];
};
export class CreateIndexUseCase {
	execute(workspaceFolder: string): Index {
		const index = create(IndexSchema, {
			metadata: {
				projectRoot: workspaceFolder,
			},
		});
		index.viewArgumentDict = {};
		const files = readdirSync(path.join(workspaceFolder, "app"), {
			recursive: true,
			withFileTypes: true,
		}).filter((f) => f.isFile() && f.name.endsWith(".php"));
		for (const absoluteFile of files) {
			indexOneFile(
				index,
				workspaceFolder,
				path.join(absoluteFile.parentPath, absoluteFile.name),
				false,
			);
		}
		return index;
	}

	getPackageDict(workspaceFolder: string): PackageDict {
		const composerLockPath = path.join(workspaceFolder, "composer.lock");
		return new ComposerLockFetcher(composerLockPath).execute();
	}
}
