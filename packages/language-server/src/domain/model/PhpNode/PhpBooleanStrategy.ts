import { NodeStrategy } from "./NodeStrategy";
import type { Boolean as PhpBoolean } from "php-parser";

export class PhpBooleanStrategy extends NodeStrategy {
	getChildren(node: PhpBoolean) {
		return [];
	}
}
