import { NodeStrategy } from "./NodeStrategy";
import type { Property } from "php-parser";

export class PropertyStrategy extends NodeStrategy {
	getChildren(node: Property) {
		return node.attrGroups;
	}
}
