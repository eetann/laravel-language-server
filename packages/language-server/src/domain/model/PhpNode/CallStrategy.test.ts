import {
	IndexStrategy,
	traverseForIndex,
} from "@/usecase/createIndex/IndexStrategy";
import { Engine } from "php-parser";
import { SymbolCreator } from "../shared/SymbolCreator";

describe("CallStrategy", () => {
	const parser = new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
	const packageName = "example";
	const packageVersion = "0.0.0";
	const filename = "test.php";
	const parentSymbol = "";
	const symbolCreator = new SymbolCreator(
		packageName,
		packageVersion,
		filename,
	);
	it("view array", () => {
		const rootNode = parser.parseCode(
			`<?php
namespace App\\Http\\Controllers;
class BookController extends Controller
{
  public function index()
  {
    $books = [1, 2];
    return view('book/index', ['books' => $books]);
  }
}
`,
			filename,
		);
		const strategy = new IndexStrategy(filename, symbolCreator);
		expect(() =>
			traverseForIndex(
				rootNode,
				parentSymbol,
				strategy.getChildren,
				strategy.onEnter,
				strategy.onLeave,
			),
		).not.toThrow();
		const prefix = `laravel-language-server composer ${packageName} ${packageVersion} `;
		const namespace = `${prefix}\`App\\Http\\Controllers\`/BookController#`;
		const symbol = `${namespace}index().view().`;
		const documentation = [
			JSON.stringify({
				viewPath: "book/index",
				arguments: {
					books: "",
				},
			}),
		];
		expect(strategy.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				documentation,
			}),
		);
	});

	it("view compact", () => {
		const rootNode = parser.parseCode(
			`<?php
namespace App\\Http\\Controllers;
class BookController extends Controller
{
  public function index()
  {
    $books = [1, 2];
    $test = 'foo';
    return view('book/index', compact('books', 'test'));
  }
}
`,
			filename,
		);
		const strategy = new IndexStrategy(filename, symbolCreator);
		expect(() =>
			traverseForIndex(
				rootNode,
				parentSymbol,
				strategy.getChildren,
				strategy.onEnter,
				strategy.onLeave,
			),
		).not.toThrow();
		const prefix = `laravel-language-server composer ${packageName} ${packageVersion} `;
		const namespace = `${prefix}\`App\\Http\\Controllers\`/BookController#`;
		const symbol = `${namespace}index().view().`;
		const documentation = [
			JSON.stringify({
				viewPath: "book/index",
				arguments: {
					books: "",
					test: "",
				},
			}),
		];
		expect(strategy.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				documentation,
			}),
		);
	});

	it("except view", () => {
		const rootNode = parser.parseCode(
			`<?php
$result = max(1, 2, 3);
`,
			filename,
		);
		const strategy = new IndexStrategy(filename, symbolCreator);
		expect(() =>
			traverseForIndex(
				rootNode,
				parentSymbol,
				strategy.getChildren,
				strategy.onEnter,
				strategy.onLeave,
			),
		).not.toThrow();
		const node = strategy.document.symbols.filter((v) =>
			v.symbol.match("view"),
		);
		expect(node.length).toBe(0);
	});
});
