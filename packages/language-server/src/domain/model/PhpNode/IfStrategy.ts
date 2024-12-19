import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { If } from "php-parser";

export class IfStrategy extends NodeStrategy {
	getChildren(node: If) {
		return [node.test, node.body];
	}
}
