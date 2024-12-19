import { NodeStrategy } from "./NodeStrategy";
import type { Cast } from "php-parser";

export class CastStrategy extends NodeStrategy {
	getChildren(node: Cast) {
		return [node.expr];
	}
}
