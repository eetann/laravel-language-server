import { readdirSync } from "node:fs";
import path from "node:path";
import { type Index, IndexSchema } from "@/domain/model/scip";
import { create } from "@bufbuild/protobuf";
import { ComposerLockFetcher } from "../shared/composerLockFetcher/ComposerLockFetcher";
import { Indexer } from "./Indexer";

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
		index.packageDict = new ComposerLockFetcher(workspaceFolder).execute();
		const files = readdirSync(path.join(workspaceFolder, "app"), {
			recursive: true,
			withFileTypes: true,
		}).filter((f) => f.isFile() && f.name.endsWith(".php"));
		for (const absoluteFile of files) {
			new Indexer().execute(
				index,
				workspaceFolder,
				path.join(absoluteFile.parentPath, absoluteFile.name),
				false,
			);
		}
		return index;
	}
}
