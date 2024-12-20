import type { Variable } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class VariableStrategy extends NodeStrategy {
	getSymbol(node: Variable, parentSymbol: string): string {
		let name = "";
		// 可変変数
		if (typeof node.name === "object") {
			name = "unknown";
		} else {
			name = node.name;
		}
		return this.symbolCreator.createTerm(parentSymbol, name);
	}

	getChildren(node: Variable) {
		if (typeof node.name === "object") {
			return [node.name];
		}
		return [];
	}
	// 代入時($a = 1など)はAssing側でsymbolを作る
	// $foo->barのような呼び出し時はその呼び出し側(propertylookup)などでOccurrenceを作る
}
