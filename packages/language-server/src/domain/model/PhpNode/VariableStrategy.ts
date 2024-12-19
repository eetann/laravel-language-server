import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Variable } from "php-parser";

export class VariableStrategy extends NodeStrategy {
	getChildren(node: Variable) {
		return [];
	}
}
