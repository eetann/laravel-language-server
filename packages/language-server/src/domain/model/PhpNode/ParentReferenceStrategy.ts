import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { ParentReference } from "php-parser";

export class ParentReferenceStrategy extends NodeStrategy {
	getChildren(node: ParentReference) {
		return [];
	}
}
