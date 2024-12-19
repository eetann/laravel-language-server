import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Assign } from "php-parser";

export class AssignStrategy extends NodeStrategy {
	getChildren(node: Assign) {
		return [node.left, node.right];
	}
}
