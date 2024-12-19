import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Return } from "php-parser";

export class ReturnStrategy extends NodeStrategy {
	getChildren(node: Return) {
		return [node.expr];
	}
}
