import { NodeStrategy } from "./NodeStrategy";
import type { Yield } from "php-parser";

export class YieldStrategy extends NodeStrategy {
	getChildren(node: Yield) {
		return [node.value];
	}
}
