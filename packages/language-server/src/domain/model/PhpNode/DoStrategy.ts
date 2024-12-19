import type { Do, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class DoStrategy extends NodeStrategy {
	getChildren(node: Do) {
		const children: Node[] = [node.test];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
