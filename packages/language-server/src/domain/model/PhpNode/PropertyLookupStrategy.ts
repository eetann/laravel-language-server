import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { PropertyLookup } from "php-parser";

export class PropertyLookupStrategy extends NodeStrategy {
	getChildren(node: PropertyLookup) {
		return [node.what];
	}
}
