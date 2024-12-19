import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Clone } from "php-parser";

export class CloneStrategy extends NodeStrategy {
	getChildren(node: Clone) {
		return [node.what];
	}
}
