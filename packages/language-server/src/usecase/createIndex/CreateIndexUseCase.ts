import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { type Document, type Index, IndexSchema } from "@/domain/model/scip";
import { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { create } from "@bufbuild/protobuf";
import { Engine } from "php-parser";
import {
	ComposerLockFetcher,
	type PackageDict,
} from "../shared/composerLockFetcher/ComposerLockFetcher";
import { IndexStrategy, traverseForIndex } from "./IndexStrategy";

export type ViewCaller = {
	parentSymbol: string;
	callerLocation: number;
	viewPath: string;
	arguments: string[];
};
export class CreateIndexUseCase {
	private phpParser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});

	execute(workspaceFolder: string): Index {
		const index = create(IndexSchema, {
			metadata: {
				projectRoot: workspaceFolder,
			},
		});
		const files = readdirSync(path.join(workspaceFolder, "app"), {
			recursive: true,
			withFileTypes: true,
		}).filter((f) => f.isFile() && f.name.endsWith(".php"));
		// TODO: できればライブラリも取得
		for (const absoluteFile of files) {
			index.documents.push(
				this.indexOneFile(
					workspaceFolder,
					path.join(absoluteFile.parentPath, absoluteFile.name),
				),
			);
		}
		return index;
	}

	getPackageDict(workspaceFolder: string): PackageDict {
		const composerLockPath = path.join(workspaceFolder, "composer.lock");
		return new ComposerLockFetcher(composerLockPath).execute();
	}

	indexOneFile(workspaceFolder: string, absolutePath: string): Document {
		const content = readFileSync(absolutePath, "utf-8");
		const relativePath = path.relative(workspaceFolder, absolutePath);
		const rootNode = this.phpParser.parseCode(content, relativePath);
		const symbolCreator = new SymbolCreator(
			"laravel/laravel",
			"0.0.0",
			relativePath,
		);

		const strategy = new IndexStrategy(relativePath, symbolCreator);
		traverseForIndex(
			rootNode,
			"",
			strategy.getChildren,
			strategy.onEnter,
			strategy.onLeave,
		);
		return strategy.document;
	}
}
