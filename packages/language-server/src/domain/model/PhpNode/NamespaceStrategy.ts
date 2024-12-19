import type { Namespace } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class NamespaceStrategy extends NodeStrategy {
	getSymbol(node: Namespace, _parentSymbol: string): string {
		return this.symbolCreator.createNamespace(node.name);
	}
	getChildren(node: Namespace) {
		return node.children;
	}
}
