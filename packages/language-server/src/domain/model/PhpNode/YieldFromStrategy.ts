import { NodeStrategy } from "./NodeStrategy";
import type { YieldFrom } from "php-parser";

export class YieldFromStrategy extends NodeStrategy {
	getChildren(node: YieldFrom) {
		return [node.value];
	}
}
