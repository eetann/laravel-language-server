import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { TypeReference } from "php-parser";

export class TypeReferenceStrategy extends NodeStrategy {
	getChildren(node: TypeReference) {
		return [];
	}
}
