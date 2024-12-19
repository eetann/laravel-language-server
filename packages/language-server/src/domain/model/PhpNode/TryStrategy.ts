import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Try } from "php-parser";

export class TryStrategy extends NodeStrategy {
	getChildren(node: Try) {
		return [node.body, ...node.catches];
	}
}
