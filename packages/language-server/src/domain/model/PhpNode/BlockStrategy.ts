import { NodeStrategy } from "./NodeStrategy";
import type { Block } from "php-parser";

export class BlockStrategy extends NodeStrategy {
	getChildren(node: Block) {
		return node.children;
	}
}
