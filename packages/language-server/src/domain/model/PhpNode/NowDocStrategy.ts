import { NodeStrategy } from "./NodeStrategy";
import type { NowDoc } from "php-parser";

export class NowDocStrategy extends NodeStrategy {
	getChildren(node: NowDoc) {
		return [];
	}
}
