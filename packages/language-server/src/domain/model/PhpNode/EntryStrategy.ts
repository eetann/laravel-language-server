import { NodeStrategy } from "./NodeStrategy";
import type { Entry } from "php-parser";

export class EntryStrategy extends NodeStrategy {
	getChildren(node: Entry) {
		return [node.value];
	}
}
