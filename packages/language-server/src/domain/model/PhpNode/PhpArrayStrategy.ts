import { NodeStrategy } from "./NodeStrategy";
import type { Array as PhpArray } from "php-parser";

export class PhpArrayStrategy extends NodeStrategy {
	getChildren(node: PhpArray) {
		return node.items;
	}
}
