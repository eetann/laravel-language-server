import { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { Engine } from "php-parser";
import type { PackageDict } from "../shared/composerFetcher/ComposerFetcher";
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

	execute(
		filename: string,
		packageDict: PackageDict,
		packageName: string,
		packageVersion: string,
	) {
		// TODO: filenameからコードを取得
		const rootNode = this.phpParser.parseCode(
			`<?php
namespace App\\Http\\Controllers;
class BookController extends Controller
{
  public function index()
  {
    $books = [1, 2];
    return view('book/index', ['books' => $books]);
  }
}`,
			filename,
		);
		// TODO: 実際のcomposer.jsonから取得する

		const parentSymbol = "";
		const symbolCreator = new SymbolCreator(
			packageName,
			packageVersion,
			filename,
		);
		const strategy = new IndexStrategy(filename, symbolCreator);
		traverseForIndex(
			rootNode,
			parentSymbol,
			strategy.getChildren,
			strategy.onEnter,
			strategy.onLeave,
		);
		return strategy.document;
	}
}
