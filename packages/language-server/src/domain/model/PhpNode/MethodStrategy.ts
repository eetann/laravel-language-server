import { NodeStrategy } from "./NodeStrategy";
import type { Method } from "php-parser";

export class MethodStrategy extends NodeStrategy {
	getChildren(node: Method) {
		const children = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
