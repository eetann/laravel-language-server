import type { DeclareDirective } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class DeclareDirectiveStrategy extends NodeStrategy {
	getChildren(node: DeclareDirective) {
		if (typeof node.value === "object") {
			return [node.value];
		}
		return [];
	}
}
