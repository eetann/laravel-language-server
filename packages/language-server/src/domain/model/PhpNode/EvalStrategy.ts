import { NodeStrategy } from "./NodeStrategy";
import type { Eval } from "php-parser";

export class EvalStrategy extends NodeStrategy {
	getChildren(node: Eval) {
		return [node.source];
	}
}
