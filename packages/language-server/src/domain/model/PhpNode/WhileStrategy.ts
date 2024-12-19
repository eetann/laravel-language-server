import { NodeStrategy } from "./NodeStrategy";
import type { While } from "php-parser";

export class WhileStrategy extends NodeStrategy {
	getChildren(node: While) {
		return [node.test, node.body];
	}
}
