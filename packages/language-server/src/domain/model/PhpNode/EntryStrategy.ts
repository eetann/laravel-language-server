import type { Entry } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class EntryStrategy extends NodeStrategy {
	getChildren(node: Entry) {
		return [node.value];
	}

	getType(node: Entry): string {
		return node.value.typeInfo;
	}
}
