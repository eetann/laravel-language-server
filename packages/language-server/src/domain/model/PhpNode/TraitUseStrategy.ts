import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Node, TraitUse } from "php-parser";

export class TraitUseStrategy extends NodeStrategy {
	getChildren(node: TraitUse) {
		const children: Node[] = [...node.traits];
		if (node.adaptations) {
			children.push(...node.adaptations);
		}
		return children;
	}
}
