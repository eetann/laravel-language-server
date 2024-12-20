import type { Number as PhpNumber } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class PhpNumberStrategy extends NodeStrategy {
	getChildren(node: PhpNumber) {
		return [];
	}

	getType(node: PhpNumber): string {
		if (/\./.test(String(node.value))) {
			return "float";
		}
		return "int";
	}
}
