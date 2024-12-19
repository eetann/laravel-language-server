import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Unary } from "php-parser";

export class UnaryStrategy extends NodeStrategy {
	getChildren(node: Unary) {
		return [node.what];
	}
}
