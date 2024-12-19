import { NodeStrategy } from "./NodeStrategy";
import type { Do } from "php-parser";

export class DoStrategy extends NodeStrategy {
	getChildren(node: Do) {
		return [node.test, node.body];
	}
}
