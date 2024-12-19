import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Static } from "php-parser";

export class StaticStrategy extends NodeStrategy {
	getChildren(node: Static) {
		return node.variables;
	}
}
