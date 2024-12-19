import { NodeStrategy } from "./NodeStrategy";
import type { Print } from "php-parser";

export class PrintStrategy extends NodeStrategy {
	getChildren(node: Print) {
		return [node.expression];
	}
}
