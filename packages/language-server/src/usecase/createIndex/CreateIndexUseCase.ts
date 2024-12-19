import { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { type Document, DocumentSchema } from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import { Engine } from "php-parser";
import type { PackageDict } from "../shared/composerFetcher/ComposerFetcher";
import { IndexStrategy, traverse } from "./IndexStrategy";

export type ViewCaller = {
	parentSymbol: string;
	callerLocation: number;
	viewPath: string;
	arguments: string[];
};
export class CreateIndexUseCase {
	private document: Document;
	private viewCallerList: ViewCaller[] = [];
	private phpParser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
	private symbol: SymbolCreator;
	constructor(
		private filename: string,
		private packageDict: PackageDict,
		private thisPackageName: string,
		private thisPackageVersion: string,
	) {
		this.document = create(DocumentSchema, {
			language: "php",
			relativePath: filename,
		});
		this.symbol = new SymbolCreator(
			thisPackageName,
			thisPackageVersion,
			filename,
		);
	}

	execute() {
		// TODO: filenameからコードを取得
		const rootNode = this.phpParser.parseCode(
			`<?php
namespace App\\Http\\Controllers;
use App\\Http\\Requests\\BookRequest;
use App\\Models\\Book;
class BookController extends Controller
{
  public function index()
  {
    $books = Book::all();
    return view('book/index', compact('books'));
  }
}`,
			this.filename,
		);
		const parentSymbol = "";
		const strategy = new IndexStrategy("test.php");
		traverse(
			rootNode,
			parentSymbol,
			strategy.getChildren,
			strategy.onEnter,
			strategy.onLeave,
		);
		return strategy.document;
	}
}
