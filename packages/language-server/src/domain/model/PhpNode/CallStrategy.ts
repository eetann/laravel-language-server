import { SymbolInformation_Kind, SyntaxKind } from "@/gen/scip_pb";
import type { Call } from "php-parser";
import {
	NodeStrategy,
	createOccurrenceMultipleLine,
	createSymbolInformation,
} from "./NodeStrategy";

export class CallStrategy extends NodeStrategy {
	getSymbol(node: Call, parentSymbol: string): string {
		if (node.what.name !== "view") {
			return parentSymbol;
		}
		return this.symbolCreator.createMethod(parentSymbol, "view");
	}

	getChildren(node: Call) {
		return [...node.arguments];
	}

	createSymbolInformations(node: Call) {
		if (node.what.name !== "view") {
			return [];
		}
		return [
			createSymbolInformation({
				symbol: node.symbol,
				kind: SymbolInformation_Kind.Function,
			}),
		];
	}
	createOccurrences(node: Call) {
		if (node.what.name !== "view") {
			return [];
		}
		return [
			createOccurrenceMultipleLine(node.symbol, node, {
				syntaxKind: SyntaxKind.IdentifierFunction,
			}),
		];
	}
}
