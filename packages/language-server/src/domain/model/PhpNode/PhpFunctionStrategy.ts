import {
	type Occurrence,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/domain/model/scip";
import type { Node, Function as PhpFunction } from "php-parser";
import {
	NodeStrategy,
	createOccurrenceMultipleLine,
	createSymbolInformation,
} from "./NodeStrategy";

export class PhpFunctionStrategy extends NodeStrategy {
	getSymbol(node: PhpFunction, parentSymbol: string): string {
		return this.symbolCreator.createMethod(parentSymbol, node.name);
	}

	getChildren(node: PhpFunction): Node[] {
		const children: Node[] = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		children.push(...node.attrGroups);
		return children;
	}

	createSymbolInformations(node: PhpFunction) {
		return {
			[node.symbol]: createSymbolInformation({
				kind: SymbolInformation_Kind.Function,
			}),
		};
	}

	createOccurrences(node: PhpFunction): Occurrence[] {
		return [
			createOccurrenceMultipleLine(node.symbol, node, {
				syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
				symbolRoles: SymbolRole.Definition,
			}),
		];
	}
}
