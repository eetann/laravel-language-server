import { NodeStrategy } from "./NodeStrategy";
import type { Encapsed } from "php-parser";

export class EncapsedStrategy extends NodeStrategy {
	getChildren(node: Encapsed) {
		return node.value;
	}
}
