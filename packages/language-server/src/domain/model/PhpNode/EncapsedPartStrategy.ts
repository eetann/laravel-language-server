import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { EncapsedPart } from "php-parser";

export class EncapsedPartStrategy extends NodeStrategy {
	getChildren(node: EncapsedPart) {
		return [node.expression];
	}
}
