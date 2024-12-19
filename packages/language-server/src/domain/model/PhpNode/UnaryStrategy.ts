import { NodeStrategy } from "./NodeStrategy";
import type { Unary } from "php-parser";

export class UnaryStrategy extends NodeStrategy {
	getChildren(node: Unary) {
		return [node.what];
	}
}
