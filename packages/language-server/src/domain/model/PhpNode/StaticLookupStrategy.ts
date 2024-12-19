import { NodeStrategy } from "./NodeStrategy";
import type { StaticLookup } from "php-parser";

export class StaticLookupStrategy extends NodeStrategy {
	getChildren(node: StaticLookup) {
		return [node.what, node.offset];
	}
}
