import { SymbolInformation_Kind, SymbolRole, SyntaxKind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("visit Class", () => {
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
	const namespace = `${prefix}\`App\\Http\\Controllers\`/`;
	const symbol = `${namespace}BookController#index()`;

	it("visitMethod", () => {
		expect(visitor.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				kind: SymbolInformation_Kind.Method,
			}),
		);
		expect(visitor.document.occurrences).toContainEqual(
			expect.objectContaining({
				symbol,
				range: [7, 2, 11, 3],
				symbolRoles: SymbolRole.Definition,
				syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
			}),
		);
	});
});
