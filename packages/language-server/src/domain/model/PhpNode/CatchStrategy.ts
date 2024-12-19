import { NodeStrategy } from "./NodeStrategy";
import type { Catch } from "php-parser";

export class CatchStrategy extends NodeStrategy {
	getChildren(node: Catch) {
		// TODO: もっと複雑かも？
		return [...node.what, node.variable, node.body];
	}
}
