import { NodeStrategy } from "./NodeStrategy";
import type { Throw } from "php-parser";

export class ThrowStrategy extends NodeStrategy {
	getChildren(node: Throw) {
		return [node.what];
	}
}
