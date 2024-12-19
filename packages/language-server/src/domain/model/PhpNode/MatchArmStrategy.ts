import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { MatchArm } from "php-parser";

export class MatchArmStrategy extends NodeStrategy {
	getChildren(node: MatchArm) {
		const children = [];
		if (node.conds) {
			children.push(...node.conds);
		}
		children.push(node.body);
		return children;
	}
}
