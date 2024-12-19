import type { Closure, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ClosureStrategy extends NodeStrategy {
	getChildren(node: Closure) {
		const children: Node[] = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
