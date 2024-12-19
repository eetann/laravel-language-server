import { NodeStrategy } from "./NodeStrategy";
import type { Parameter } from "php-parser";

export class ParameterStrategy extends NodeStrategy {
	getChildren(node: Parameter) {
		return node.attrGroups;
	}
}
