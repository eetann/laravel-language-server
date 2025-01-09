import type { Node, RetIf } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class RetIfStrategy extends NodeStrategy {
	getChildren(node: RetIf) {
		const children: Node[] = [node.test, node.falseExpr];
		if (node.trueExpr) {
			children.push(node.trueExpr);
		}
		return children;
	}
}
