import type { Node, StaticVariable } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class StaticVariableStrategy extends NodeStrategy {
	getChildren(node: StaticVariable) {
		const children: Node[] = [node.variable];
		if (typeof node.defaultValue === "object") {
			children.push(node.defaultValue);
		}
		return children;
	}
}
