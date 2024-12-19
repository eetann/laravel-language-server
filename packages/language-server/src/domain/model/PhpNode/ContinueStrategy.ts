import { NodeStrategy } from "./NodeStrategy";
import type { Continue } from "php-parser";

export class ContinueStrategy extends NodeStrategy {
	getChildren(node: Continue) {
		return [];
	}
}
