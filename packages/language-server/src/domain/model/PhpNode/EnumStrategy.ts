import { NodeStrategy } from "./NodeStrategy";
import type { Enum } from "php-parser";

export class EnumStrategy extends NodeStrategy {
	getChildren(node: Enum) {
		return [...node.body, ...node.attrGroups];
	}
}
