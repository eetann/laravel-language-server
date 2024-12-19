import { NodeStrategy } from "./NodeStrategy";
import type { Namespace } from "php-parser";

export class NamespaceStrategy extends NodeStrategy {
	getChildren(node: Namespace) {
		return node.children;
	}
}
