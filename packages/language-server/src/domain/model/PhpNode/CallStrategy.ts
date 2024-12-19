import { NodeStrategy } from "./NodeStrategy";
import type { Call } from "php-parser";

export class CallStrategy extends NodeStrategy {
	getChildren(node: Call) {
		return [node.what, ...node.arguments];
	}
}

// Call.prototype.createSymbolInformations = function () {
// 	return [
// 		createSymbol({
// 			symbol: node.symbol(),
// 			kind: SymbolInformation_Kind.Function,
// 		}),
// 	];
// };
// Call.prototype.createOccurrences = function () {
// 	return [
// 		createOccurrenceMultipleLine(node.symbol(), node, {
// 			syntaxKind: SyntaxKind.IdentifierFunction,
// 		}),
// 	];
// };
