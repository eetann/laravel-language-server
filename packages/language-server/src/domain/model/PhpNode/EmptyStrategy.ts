import type { Empty } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

declare module "php-parser" {
	interface Empty {
		expression: Node;
	}
}

export class EmptyStrategy extends NodeStrategy {
	getChildren(node: Empty) {
		return [node.expression];
	}
}
