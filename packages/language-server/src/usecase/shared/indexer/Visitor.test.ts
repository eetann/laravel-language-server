import { Engine } from "php-parser";
import { describe, it } from "vitest";
import { Visitor } from "./Visitor";

describe("visitor", () => {
	const visitor = new Visitor();
	const parser = new Engine({});
	const nodes = parser.parseCode(
		`
<?php
namespace App\Http\Controllers;
use App\Http\Requests\BookRequest;
use App\Models\Book;
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
		for (const node of nodes.children) {
			console.log(node.kind);
			node.accept(visitor);
		}
	});
});
