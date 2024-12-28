import { SymbolInformation_Kind, SyntaxKind } from "@/domain/model/scip";
import type { Call, Entry } from "php-parser";
import {
	NodeStrategy,
	createOccurrenceMultipleLine,
	createSymbolInformation,
	isCall,
	isPhpArray,
	isPhpString,
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
			return {};
		}
		const bladeFile = {
			viewPath: "",
			arguments: {},
		};
		const viewPathNode = node.arguments[0];
		const argumentsNode = node.arguments[1];
		if (isPhpString(viewPathNode)) {
			bladeFile.viewPath = viewPathNode.value;
		}
		if (isCall(argumentsNode) && argumentsNode.what.name === "compact") {
			for (const arg of argumentsNode.arguments) {
				if (isPhpString(arg)) {
					// TODO: 同じ名前のsymbolを取得し、typeInfoを入れる
					bladeFile.arguments[arg.value] = "";
				}
			}
		} else if (isPhpArray(argumentsNode)) {
			for (const item of argumentsNode.items as Entry[]) {
				if (isPhpString(item.key)) {
					bladeFile.arguments[item.key.value] = item.typeInfo;
				}
			}
		}
		return {
			[node.symbol]: createSymbolInformation({
				kind: SymbolInformation_Kind.Function,
				documentation: [JSON.stringify(bladeFile)],
			}),
		};
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
