import { NodeStrategy } from "./NodeStrategy";
import type { EncapsedPart } from "php-parser";

export class EncapsedPartStrategy extends NodeStrategy {
	getChildren(node: EncapsedPart) {
		return [node.expression];
	}
}
