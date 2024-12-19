import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { UseGroup } from "php-parser";

export class UseGroupStrategy extends NodeStrategy {
	getChildren(node: UseGroup) {
		return node.items;
	}
}
