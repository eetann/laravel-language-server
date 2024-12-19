import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Empty } from "php-parser";

declare module "php-parser" {
	interface Empty {
		expression: Node[];
	}
}

export class EmptyStrategy extends NodeStrategy {
	getChildren(node: Empty) {
		return [node.expression];
	}
}
