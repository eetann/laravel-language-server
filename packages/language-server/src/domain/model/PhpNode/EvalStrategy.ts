import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Eval } from "php-parser";

export class EvalStrategy extends NodeStrategy {
	getChildren(node: Eval) {
		return [node.source];
	}
}
