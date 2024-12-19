import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { DeclareDirective } from "php-parser";

export class DeclareDirectiveStrategy extends NodeStrategy {
	getChildren(node: DeclareDirective) {
		return [node.value];
	}
}
