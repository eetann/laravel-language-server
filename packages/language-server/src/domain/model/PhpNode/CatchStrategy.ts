import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Catch } from "php-parser";

export class CatchStrategy extends NodeStrategy {
	getChildren(node: Catch) {
		// TODO: もっと複雑かも？
		return [...node.what, node.variable, node.body];
	}
}
