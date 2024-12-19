import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Bin } from "php-parser";

export class BinStrategy extends NodeStrategy {
	getChildren(node: Bin) {
		return [node.left, node.right];
	}
}
