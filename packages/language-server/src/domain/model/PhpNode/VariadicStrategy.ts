import type { Variadic } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class VariadicStrategy extends NodeStrategy {
	getChildren(node: Variadic) {
		if (Array.isArray(node.what)) {
			return node.what;
		}
		return [node.what];
	}
}
