import { SymbolInformation_Kind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("Visitor", () => {
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
	it("Run without error", () => {
		expect(() => rootNode.accept(visitor)).not.toThrow();
		expect(visitor.document.language).toBe("php");
	});
	it("SCIP Document is generated as expected", () => {
		const symbol = `${prefix}\`test.php\`/`;
		expect(visitor.document.symbols[0]).toMatchObject({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		expect(visitor.document.occurrences[0]).toMatchObject({
			symbol,
			range: [1, 0, 12, 1],
		});
	});
});
