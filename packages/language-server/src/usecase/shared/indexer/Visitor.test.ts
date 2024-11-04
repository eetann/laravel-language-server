import { SymbolInformation_Kind } from "@/gen/scip_pb";
import { Engine } from "php-parser";
import { describe, expect, it } from "vitest";
import { Visitor } from "./Visitor";

describe("visitor", () => {
	const filename = "test.php";
	const visitor = new Visitor(filename);
	const parser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
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
		filename,
	);
	it("Run without error", () => {
		expect(() => rootNode.accept(visitor)).not.toThrow();
	});
	const s = "laravel-language-server composer example 0.0.0 ";
	it("SCIP Document is generated as expected", () => {
		expect(visitor.document.language).toBe("php");
		// visitProgram
		expect(visitor.document.symbols[0]).toMatchObject({
			symbol: `${s}\`test.php\`/`,
			kind: SymbolInformation_Kind.Namespace,
		});
		expect(visitor.document.occurrences[0]).toMatchObject({
			symbol: `${s}\`test.php\`/`,
			range: [1, 0, 12, 1],
		});
	});
});
