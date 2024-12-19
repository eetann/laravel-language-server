import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Continue } from "php-parser";

export class ContinueStrategy extends NodeStrategy {
	getChildren(node: Continue) {
		return [];
	}
}
