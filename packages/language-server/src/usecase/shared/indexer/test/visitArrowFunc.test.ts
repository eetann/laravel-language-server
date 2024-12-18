import { traverse } from "../Traverse";
import { createParser, targetName } from "./helper";

describe("visitArrowFunc", () => {
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
$arrowFunc = fn($x) => $x * 2;
`,
		targetName,
	);

	it("check children", () => {
		const nodes = [];
		traverse(rootNode, (node) => {
			// console.log(node.kind)
			nodes.push(node.kind);
		});
		expect(nodes).toContain("arrowfunc");
		expect(nodes).toContain("parameter");
		expect(nodes).toContain("bin");
	});
});
