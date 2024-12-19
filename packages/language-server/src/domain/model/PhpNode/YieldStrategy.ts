import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Yield } from "php-parser";

export class YieldStrategy extends NodeStrategy {
	getChildren(node: Yield) {
		return [node.value];
	}
}
