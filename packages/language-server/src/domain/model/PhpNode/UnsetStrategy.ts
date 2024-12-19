import { NodeStrategy } from "./NodeStrategy";
import type { Unset } from "php-parser";

declare module "php-parser" {
	interface Unset {
		variables: Node[];
	}
}

export class UnsetStrategy extends NodeStrategy {
	getChildren(node: Unset) {
		return node.variables;
	}
}
