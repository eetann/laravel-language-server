import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Break } from "php-parser";

export class BreakStrategy extends NodeStrategy {
	getChildren(node: Break) {
		return [];
	}
}
