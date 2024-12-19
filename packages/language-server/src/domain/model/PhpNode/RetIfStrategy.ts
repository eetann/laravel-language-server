import { NodeStrategy } from "./NodeStrategy";
import type { RetIf } from "php-parser";

export class RetIfStrategy extends NodeStrategy {
	getChildren(node: RetIf) {
		return [node.test, node.trueExpr, node.falseExpr];
	}
}
