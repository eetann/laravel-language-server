import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { StaticVariable } from "php-parser";

export class StaticVariableStrategy extends NodeStrategy {
	getChildren(node: StaticVariable) {
		return [node.variable, node.defaultValue];
	}
}
