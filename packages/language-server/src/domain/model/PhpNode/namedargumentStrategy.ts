import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { namedargument } from "php-parser";

export class namedargumentStrategy extends NodeStrategy {
	getChildren(node: namedargument) {
		return [node.value];
	}
}
