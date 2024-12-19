import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Global } from "php-parser";

export class GlobalStrategy extends NodeStrategy {
	getChildren(node: Global) {
		return node.items;
	}
}
