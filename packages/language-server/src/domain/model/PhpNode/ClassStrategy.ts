import { NodeStrategy } from "./NodeStrategy";
import type { Class } from "php-parser";

export class ClassStrategy extends NodeStrategy {
	getChildren(node: Class) {
		// TODO: extends, implementsも？
		return [...node.body, ...node.attrGroups];
	}
}
