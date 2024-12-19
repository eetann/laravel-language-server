import { NodeStrategy } from "./NodeStrategy";
import type { Attribute } from "php-parser";

export class AttributeStrategy extends NodeStrategy {
	getChildren(node: Attribute) {
		return node.args;
	}
}
