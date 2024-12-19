import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { TraitAlias } from "php-parser";

export class TraitAliasStrategy extends NodeStrategy {
	getChildren(node: TraitAlias) {
		return [node.trait];
	}
}
