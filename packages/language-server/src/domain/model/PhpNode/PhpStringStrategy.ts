import { NodeStrategy } from "./NodeStrategy";
import type { PhpString } from "php-parser";

export class PhpStringStrategy extends NodeStrategy {
	getChildren(node: PhpString) {
		return [];
	}
}
