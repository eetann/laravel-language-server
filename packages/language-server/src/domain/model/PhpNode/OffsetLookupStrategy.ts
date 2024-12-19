import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { OffsetLookup } from "php-parser";

export class OffsetLookupStrategy extends NodeStrategy {
	getChildren(node: OffsetLookup) {
		return [node.what, node.offset];
	}
}
