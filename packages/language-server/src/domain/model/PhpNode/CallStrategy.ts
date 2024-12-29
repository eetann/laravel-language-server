import {
	SymbolInformation_Kind,
	SyntaxKind,
	type ViewArgumentDict,
} from "@/domain/model/scip";
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
		return {
			[node.symbol]: createSymbolInformation({
				kind: SymbolInformation_Kind.Function,
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

	createViewArgumentDict(node: Call): ViewArgumentDict {
		if (node.what.name !== "view") {
			return {};
		}
		const viewArgumentDict: ViewArgumentDict = {};
		const viewPathNode = node.arguments[0];
		const argumentsNode = node.arguments[1];
		let viewPath = "";
		if (isPhpString(viewPathNode)) {
			viewPath = viewPathNode.value;
			viewArgumentDict[viewPath] = {};
		}
		if (isCall(argumentsNode) && argumentsNode.what.name === "compact") {
			for (const arg of argumentsNode.arguments) {
				if (isPhpString(arg)) {
					// TODO: 同じ名前のsymbolを取得し、typeInfoを入れる
					viewArgumentDict[viewPath][arg.value] = {
						symbol: this.symbolCreator.createTerm(
							node.symbol.slice(0, -7),
							arg.value,
						),
						typeInfo: "",
					};
				}
			}
		} else if (isPhpArray(argumentsNode)) {
			for (const item of argumentsNode.items as Entry[]) {
				if (isPhpString(item.key)) {
					viewArgumentDict[viewPath][item.key.value] = {
						symbol: item.value.symbol.replace(/view\(\)\./, ""),
						typeInfo: item.value.typeInfo,
					};
				}
			}
		}
		return viewArgumentDict;
	}
	onLeave(node: Call) {
		node.typeInfo = this.getType(node);
		return {
			symbolDict: this.createSymbolInformations(node),
			occurrences: this.createOccurrences(node),
			viewArgumentDict: this.createViewArgumentDict(node),
		};
	}
}
