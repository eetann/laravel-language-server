import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Constant } from "php-parser";

export class ConstantStrategy extends NodeStrategy {
	getChildren(node: Constant) {
		return [node.value];
	}
}
