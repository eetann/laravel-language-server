import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { New } from "php-parser";

export class NewStrategy extends NodeStrategy {
	getChildren(node: New) {
		return [node.what, ...node.arguments];
	}
}
