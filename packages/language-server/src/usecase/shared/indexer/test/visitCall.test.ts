import { SymbolInformation_Kind, SymbolRole, SyntaxKind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("visitCall", () => {
	const visitor = createVisitor();
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
function foo()
{
  $a = 1;
  return $a;
}
function bar()
{
  $b = foo();
  return $b;
}`,
		targetName,
	);
	rootNode.accept(visitor, "");
	const namespace = `${prefix}\`${targetName}\`/`;
	const symbol = `${namespace}foo().b.`;

	it.skip("viewではない", () => {
		expect(visitor.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				kind: SymbolInformation_Kind.Variable,
			}),
		);
		expect(visitor.document.occurrences).toContainEqual(
			expect.objectContaining({
				symbol,
				range: [4, 2, 4],
				symbolRoles: SymbolRole.Definition,
				syntaxKind: SyntaxKind.Identifier,
			}),
		);
	});
});
