import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { NullSafePropertyLookup } from "php-parser";

export class NullSafePropertyLookupStrategy extends NodeStrategy {
	getChildren(node: NullSafePropertyLookup) {
		return [node.what, node.offset];
	}
}
