import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Halt } from "php-parser";

export class HaltStrategy extends NodeStrategy {
	getChildren(node: Halt) {
		return [];
	}
}
