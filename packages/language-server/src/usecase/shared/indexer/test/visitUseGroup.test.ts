import { SymbolInformation_Kind, SymbolRole, SyntaxKind } from "@/gen/scip_pb";
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
	const symbol = `${prefix}\`App\\Http\\Requests\\BookRequest\`/`;

	// TODO: 実装したらここも変更
	it.skip("visitUseGroup", () => {});
	it("visitUseItem", () => {
		expect(visitor.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				kind: SymbolInformation_Kind.Module,
			}),
		);
		expect(visitor.document.occurrences).toContainEqual(
			expect.objectContaining({
				symbol,
				range: [3, 4, 33],
				symbolRoles: SymbolRole.Import,
				syntaxKind: SyntaxKind.IdentifierNamespace,
			}),
		);
	});
});
