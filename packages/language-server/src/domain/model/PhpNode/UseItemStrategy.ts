import { NodeStrategy } from "./NodeStrategy";
import type { UseItem } from "php-parser";

export class UseItemStrategy extends NodeStrategy {
	getChildren(node: UseItem) {
		return [];
	}
}
