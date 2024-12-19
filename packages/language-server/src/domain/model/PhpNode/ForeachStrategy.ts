import type { Foreach, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ForeachStrategy extends NodeStrategy {
	getChildren(node: Foreach) {
		const children: Node[] = [node.source, node.value];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
