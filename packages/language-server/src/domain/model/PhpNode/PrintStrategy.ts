import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Print } from "php-parser";

export class PrintStrategy extends NodeStrategy {
	getChildren(node: Print) {
		return [node.expression];
	}
}
