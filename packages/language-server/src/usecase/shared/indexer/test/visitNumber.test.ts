import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("visitPhpNumber", () => {
	const visitor = createVisitor();
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
$a=1.1;
$b=2;
`,
		targetName,
	);
	it("float", () => {
		// @ts-ignore
		const node = rootNode.children[0].expression.right;
		expect(visitor.visitPhpNumber(node, "")).toBe("float");
	});
	it("int", () => {
		// @ts-ignore
		const node = rootNode.children[1].expression.right;
		expect(visitor.visitPhpNumber(node, "")).toBe("int");
	});
});
