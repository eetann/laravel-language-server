import { type Document, DocumentSchema } from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import { Engine } from "php-parser";
import { SymbolCreator } from "../../../domain/model/shared/SymbolCreator";
import type { PackageDict } from "../composerFetcher/ComposerFetcher";
import { traverse } from "./Traverse";

export type ViewCaller = {
	parentSymbol: string;
	callerLocation: number;
	viewPath: string;
	arguments: string[];
};
export class Indexer {
	private document: Document;
	private symbol: SymbolCreator;
	private viewCallerList: ViewCaller[] = [];
	private phpParser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
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

	index() {
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
		traverse(rootNode, undefined, (node) => {
			// TODO: ここにポリシーのやつを突っ込む
			console.log(node.kind);
		});
	}
}
