import { NodeStrategy } from "./NodeStrategy";
import type { Return } from "php-parser";

export class ReturnStrategy extends NodeStrategy {
	getChildren(node: Return) {
		return [node.expr];
	}
}
