import { NodeStrategy } from "./NodeStrategy";
import type { Static } from "php-parser";

export class StaticStrategy extends NodeStrategy {
	getChildren(node: Static) {
		return node.variables;
	}
}
