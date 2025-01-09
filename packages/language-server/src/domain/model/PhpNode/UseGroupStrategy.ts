import type { UseGroup, UseItem } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

declare module "php-parser" {
	interface UseGroup {
		items: UseItem[];
	}
}

export class UseGroupStrategy extends NodeStrategy {
	getChildren(node: UseGroup) {
		return node.items;
	}
}
