import type { Class } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ClassStrategy extends NodeStrategy {
	getSymbol(node: Class, _parentSymbol: string): string {
		return this.symbolCreator.createType(node.name);
	}

	getChildren(node: Class) {
		// TODO: extends, implementsも？
		return [...node.body, ...node.attrGroups];
	}
}
