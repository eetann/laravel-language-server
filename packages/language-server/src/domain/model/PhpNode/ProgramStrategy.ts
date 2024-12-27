import {
	type Occurrence,
	type SymbolInformation,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/domain/model/scip";
import type { Program } from "php-parser";
import {
	NodeStrategy,
	createOccurrenceMultipleLine,
	createSymbolInformation,
} from "./NodeStrategy";

export class ProgramStrategy extends NodeStrategy {
	getSymbol(_node: Program, _parentSymbol: string): string {
		return this.symbolCreator.filename;
	}

	getChildren(node: Program) {
		return node.children;
	}

	createSymbolInformation(node: Program): SymbolInformation[] {
		return [
			createSymbolInformation({
				symbol: node.symbol,
				kind: SymbolInformation_Kind.Namespace,
			}),
		];
	}

	createOccurrenceMultipleLine(node: Program): Occurrence[] {
		return [
			createOccurrenceMultipleLine(node.symbol, node, {
				syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
				symbolRoles: SymbolRole.Definition,
			}),
		];
	}
}
