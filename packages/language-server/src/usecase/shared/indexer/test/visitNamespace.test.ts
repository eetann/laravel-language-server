import { SymbolInformation_Kind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

it("visitNamespace", () => {
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
	rootNode.accept(visitor, "");
	const symbol = `${prefix}\`App\\Http\\Controllers\`/`;
	expect(visitor.document.symbols[1]).toMatchObject({
		symbol,
		kind: SymbolInformation_Kind.Namespace,
	});
	expect(visitor.document.occurrences[1]).toMatchObject({
		symbol,
		range: [2, 0, 12, 1],
	});
});
