import { NodeStrategy } from "./NodeStrategy";
import type { Echo } from "php-parser";

export class EchoStrategy extends NodeStrategy {
	getChildren(node: Echo) {
		return node.expressions;
	}
}
