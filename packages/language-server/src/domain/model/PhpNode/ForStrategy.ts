import { NodeStrategy } from "./NodeStrategy";
import type { For } from "php-parser";

export class ForStrategy extends NodeStrategy {
	getChildren(node: For) {
		const children = [...node.init, ...node.test, ...node.increment];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
