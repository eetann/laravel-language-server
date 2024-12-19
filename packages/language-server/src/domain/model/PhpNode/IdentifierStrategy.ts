import { NodeStrategy } from "./NodeStrategy";
import type { Identifier } from "php-parser";

export class IdentifierStrategy extends NodeStrategy {
	getChildren(node: Identifier) {
		return [];
	}
}
