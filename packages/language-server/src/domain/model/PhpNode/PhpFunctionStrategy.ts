import type { Function as PhpFunction, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class PhpFunctionStrategy extends NodeStrategy {
	getChildren(node: PhpFunction): Node[] {
		const children: Node[] = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		children.push(...node.attrGroups);
		return children;
	}
}
