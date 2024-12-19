import { NodeStrategy } from "./NodeStrategy";
import type { Reference } from "php-parser";

export class ReferenceStrategy extends NodeStrategy {
	getChildren(node: Reference) {
		return [];
	}
}
