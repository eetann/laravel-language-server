import { NodeStrategy } from "./NodeStrategy";
import type { Global } from "php-parser";

export class GlobalStrategy extends NodeStrategy {
	getChildren(node: Global) {
		return node.items;
	}
}
