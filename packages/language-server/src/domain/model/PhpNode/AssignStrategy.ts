import {
	type Occurrence,
	type SymbolInformation,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/domain/model/scip";
import type { Assign } from "php-parser";
import {
	NodeStrategy,
	createOccurrenceMultipleLine,
	createSymbolInformation,
} from "./NodeStrategy";

export class AssignStrategy extends NodeStrategy {
	getType(node: Assign): string {
		return node.right.typeInfo;
	}

	getChildren(node: Assign) {
		return [node.left, node.right];
	}

	createSymbolInformations(node: Assign) {
		return {
			[node.left.symbol]: createSymbolInformation({
				kind: SymbolInformation_Kind.Variable,
				documentation: [`@var ${node.typeInfo}`],
			}),
		};
	}

	createOccurrences(node: Assign): Occurrence[] {
		return [
			createOccurrenceMultipleLine(node.symbol, node, {
				symbolRoles: SymbolRole.Definition,
				syntaxKind: SyntaxKind.Identifier,
			}),
		];
	}
}
