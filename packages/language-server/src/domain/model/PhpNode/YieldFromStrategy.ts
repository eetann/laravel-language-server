import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { YieldFrom } from "php-parser";

export class YieldFromStrategy extends NodeStrategy {
	getChildren(node: YieldFrom) {
		return [node.value];
	}
}
