import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { AssignRef } from "php-parser";

export class AssignRefStrategy extends NodeStrategy {
	getChildren(node: AssignRef) {
		return [node.left, node.right];
	}
}
