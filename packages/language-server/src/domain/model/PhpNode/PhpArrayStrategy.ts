import type { Array as PhpArray } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class PhpArrayStrategy extends NodeStrategy {
	getChildren(node: PhpArray) {
		return node.items;
	}

	getType(node: PhpArray): string {
		const typeSet = new Set<string>();
		for (const item of node.items) {
			if (item.typeInfo === "") {
				typeSet.add("unknown");
			} else {
				typeSet.add(item.typeInfo);
			}
		}
		const length = typeSet.size;
		if (length === 0) {
			return "array";
		}
		if (length === 1) {
			return `${[...typeSet][0]}[]`;
		}
		return `(${[...typeSet].join("|")})[]`;
	}
}
