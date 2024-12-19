import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { List } from "php-parser";

export class ListStrategy extends NodeStrategy {
	getChildren(node: List) {
		return node.items;
	}
}
