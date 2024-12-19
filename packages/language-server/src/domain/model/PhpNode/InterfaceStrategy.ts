import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Interface } from "php-parser";

export class InterfaceStrategy extends NodeStrategy {
	getChildren(node: Interface) {
		return [...node.body, ...node.attrGroups];
	}
}
