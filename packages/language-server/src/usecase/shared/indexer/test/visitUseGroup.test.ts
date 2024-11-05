import { SymbolInformation_Kind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("visit UseGroup UseItem", () => {
	const visitor = createVisitor();
	const parser = createParser();
	const rootNode = parser.parseCode(
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
		targetName,
	);
	rootNode.accept(visitor);
	const symbol = `${prefix}\`App\\Http\\Controllers\`/`;

	it("visitUseGroup", () => {});
	it("visitUseItem", () => {
		expect(visitor.document.symbols[3]).toMatchObject({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		expect(visitor.document.occurrences[3]).toMatchObject({
			symbol,
			range: [3, 4, 33],
		});
	});
});
