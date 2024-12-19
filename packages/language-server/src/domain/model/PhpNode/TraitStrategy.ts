import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Trait } from "php-parser";

export class TraitStrategy extends NodeStrategy {
	getChildren(node: Trait) {
		return node.body;
	}
}
