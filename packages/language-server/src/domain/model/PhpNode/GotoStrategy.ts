import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Goto } from "php-parser";

export class GotoStrategy extends NodeStrategy {
	getChildren(node: Goto) {
		return [];
	}
}
