import { NodeStrategy } from "./NodeStrategy";
import type { SelfReference } from "php-parser";

export class SelfReferenceStrategy extends NodeStrategy {
	getChildren(node: SelfReference) {
		return [];
	}
}
