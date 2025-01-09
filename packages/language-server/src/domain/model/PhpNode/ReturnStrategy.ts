import type { Return } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ReturnStrategy extends NodeStrategy {
	getChildren(node: Return) {
		if (node.expr) {
			return [node.expr];
		}
		return [];
	}
}
