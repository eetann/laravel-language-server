import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Entry } from "php-parser";

export class EntryStrategy extends NodeStrategy {
	getChildren(node: Entry) {
		return [node.value];
	}
}
