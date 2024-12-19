import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { NowDoc } from "php-parser";

export class NowDocStrategy extends NodeStrategy {
	getChildren(node: NowDoc) {
		return [];
	}
}
