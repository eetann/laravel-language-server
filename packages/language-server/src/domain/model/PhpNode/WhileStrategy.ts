import { NodeStrategy } from "./NodeStrategy";
import type { While } from "php-parser";

export class WhileStrategy extends NodeStrategy {
	getChildren(node: While) {
		const children = [node.test];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
