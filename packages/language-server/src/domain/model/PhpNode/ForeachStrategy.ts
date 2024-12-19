import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Foreach } from "php-parser";

export class ForeachStrategy extends NodeStrategy {
	getChildren(node: Foreach) {
		return [node.source, node.value, node.body];
	}
}
