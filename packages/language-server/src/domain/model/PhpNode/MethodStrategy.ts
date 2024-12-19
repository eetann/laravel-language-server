import { NodeStrategy } from "./NodeStrategy";
import type { Method, Node } from "php-parser";

export class MethodStrategy extends NodeStrategy {
	getChildren(node: Method) {
		const children: Node[] = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
