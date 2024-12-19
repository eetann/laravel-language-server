import { NodeStrategy } from "./NodeStrategy";
import type { TypeReference } from "php-parser";

export class TypeReferenceStrategy extends NodeStrategy {
	getChildren(node: TypeReference) {
		return [];
	}
}
