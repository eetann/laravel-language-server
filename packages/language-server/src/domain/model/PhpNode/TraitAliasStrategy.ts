import { NodeStrategy } from "./NodeStrategy";
import type { TraitAlias } from "php-parser";

export class TraitAliasStrategy extends NodeStrategy {
	getChildren(node: TraitAlias) {
		return [node.trait];
	}
}
