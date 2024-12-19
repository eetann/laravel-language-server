import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Pre } from "php-parser";

export class PreStrategy extends NodeStrategy {
	getChildren(node: Pre) {
		return [node.what];
	}
}
