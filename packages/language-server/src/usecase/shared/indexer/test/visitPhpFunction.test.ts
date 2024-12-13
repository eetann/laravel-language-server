import { SymbolInformation_Kind, SymbolRole, SyntaxKind } from "@/gen/scip_pb";
import { createParser, createVisitor, prefix, targetName } from "./helper";

describe("visitPhpFunction", () => {
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
	const symbol = `${namespace}foo().`;

	it("visitPhpFunction", () => {
		expect(visitor.document.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				kind: SymbolInformation_Kind.Function,
			}),
		);
		expect(visitor.document.occurrences).toContainEqual(
			expect.objectContaining({
				symbol,
				range: [2, 0, 6, 1],
				syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
				symbolRoles: SymbolRole.Definition,
			}),
		);
	});
});
