import { traverse } from "../Traverse";
import { createParser, targetName } from "./helper";

describe("visit Array", () => {
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
$array = [1, 2, 3];
`,
		targetName,
	);

	it("check children", () => {
		const nodes = [];
		traverse(rootNode, (node) => {
			// console.log(node.kind)
			nodes.push(node.kind);
		});
		expect(nodes).toContain("array");
		expect(nodes).toContain("entry");
	});
});
