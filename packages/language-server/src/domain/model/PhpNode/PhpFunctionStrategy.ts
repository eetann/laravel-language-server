import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Function as PhpFunction } from "php-parser";

export class PhpFunctionStrategy extends NodeStrategy {
	getChildren(node: PhpFunction) {
		return [...node.arguments, node.body, ...node.attrGroups];
	}
}
