import { traverse } from "./Traverse";
import { createParser, targetName } from "./test/helper";

describe("traverse Class", () => {
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
namespace App\\Http\\Controllers;
class BookController
{
  public function index()
  {
    return "test";
  }
}`,
		targetName,
	);

	it("visitClass", () => {
		expect(() =>
			traverse(rootNode, (node) => console.log(node.kind)),
		).not.toThrow();
	});
});
