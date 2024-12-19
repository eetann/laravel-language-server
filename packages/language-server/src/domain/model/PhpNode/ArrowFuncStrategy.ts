import { NodeStrategy } from "./NodeStrategy";
import type { ArrowFunc } from "php-parser";

export class ArrowFuncStrategy extends NodeStrategy {
	getChildren(node: ArrowFunc) {
		return [...node.arguments, node.body];
	}
}
