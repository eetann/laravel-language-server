import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Isset } from "php-parser";

declare module "php-parser" {
	interface Isset {
		variables: Node[];
	}
}

export class IssetStrategy extends NodeStrategy {
	getChildren(node: Isset) {
		return node.variables;
	}
}
