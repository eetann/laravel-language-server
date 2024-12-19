import { NodeStrategy } from "./NodeStrategy";
import type { Silent } from "php-parser";

export class SilentStrategy extends NodeStrategy {
	getChildren(node: Silent) {
		return [node.expr];
	}
}
