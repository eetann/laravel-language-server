import type { Catch, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class CatchStrategy extends NodeStrategy {
	getChildren(node: Catch) {
		const children: Node[] = [...node.what, node.body];
		if (node.variable) {
			// PHP 8.0.0 変数はオプションになった
			children.push(node.variable);
		}
		return children;
	}
}
