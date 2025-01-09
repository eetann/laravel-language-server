import {
	IndexStrategy,
	traverseForIndex,
} from "@/usecase/createIndex/IndexStrategy";
import { create } from "@bufbuild/protobuf";
import { Engine } from "php-parser";
import { IndexSchema } from "../scip";
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
		const index = create(IndexSchema, {});
		index.viewArgumentDict = {};
		const strategy = new IndexStrategy(index, filename, symbolCreator);
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
		expect(strategy.index.documents[filename].symbols).toHaveProperty(symbol);
		expect(strategy.index.viewArgumentDict).toEqual(
			expect.objectContaining({
				"book/index": {
					books: {
						symbol: `${namespace}index().books.`,
						typeInfo: "",
					},
				},
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
		const index = create(IndexSchema, {});
		index.viewArgumentDict = {};
		const strategy = new IndexStrategy(index, filename, symbolCreator);
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
		expect(strategy.index.documents[filename].symbols).toHaveProperty(symbol);
		expect(strategy.index.viewArgumentDict).toEqual(
			expect.objectContaining({
				"book/index": {
					books: {
						symbol: `${namespace}index().books.`,
						typeInfo: "",
					},
					test: { symbol: `${namespace}index().test.`, typeInfo: "" },
				},
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
		const index = create(IndexSchema, {});
		index.viewArgumentDict = {};
		const strategy = new IndexStrategy(index, filename, symbolCreator);
		expect(() =>
			traverseForIndex(
				rootNode,
				parentSymbol,
				strategy.getChildren,
				strategy.onEnter,
				strategy.onLeave,
			),
		).not.toThrow();
		const node = Object.keys(strategy.index.documents[filename].symbols).filter(
			(v) => v.match("view"),
		);
		expect(node.length).toBe(0);
	});
});
