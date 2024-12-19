import { NodeStrategy } from "./NodeStrategy";
import type { Closure } from "php-parser";

export class ClosureStrategy extends NodeStrategy {
	getChildren(node: Closure) {
		return [...node.arguments, node.body];
	}
}