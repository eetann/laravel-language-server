import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { NullKeyword } from "php-parser";

export class NullKeywordStrategy extends NodeStrategy {
	getChildren(node: NullKeyword) {
		return [];
	}
}
