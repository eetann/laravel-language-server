import type { Constant } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ConstantStrategy extends NodeStrategy {
	getChildren(node: Constant) {
		if (typeof node.value === "object") {
			return [node.value];
		}
		return [];
	}
}
