import type { Method, Node } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class MethodStrategy extends NodeStrategy {
	getSymbol(node: Method, parentSymbol: string): string {
		return this.symbolCreator.createMethod(parentSymbol, node.name);
	}

	getChildren(node: Method) {
		const children: Node[] = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
