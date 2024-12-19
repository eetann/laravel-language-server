import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Property } from "php-parser";

export class PropertyStrategy extends NodeStrategy {
	getChildren(node: Property) {
		return node.attrGroups;
	}
}
