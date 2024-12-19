import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Encapsed } from "php-parser";

export class EncapsedStrategy extends NodeStrategy {
	getChildren(node: Encapsed) {
		return node.value;
	}
}
