import type { If } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class IfStrategy extends NodeStrategy {
	getChildren(node: If) {
		const children = [node.test];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
