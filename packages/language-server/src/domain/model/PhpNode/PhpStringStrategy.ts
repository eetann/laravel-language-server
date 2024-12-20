import type { String as PhpString } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class PhpStringStrategy extends NodeStrategy {
	getChildren(_node: PhpString) {
		return [];
	}

	getType(_node: PhpString) {
		return "string";
	}
}
