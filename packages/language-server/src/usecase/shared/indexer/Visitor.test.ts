import { Engine } from "php-parser";
import { describe, it } from "vitest";
import { Visitor } from "./Visitor";

describe("visitor", () => {
	const visitor = new Visitor("test.php");
	const parser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
	const rootNode = parser.parseCode(
		`
<?php
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
}
`,
		"test.php",
	);
	it("first test!", () => {
		rootNode.accept(visitor);
	});
});
