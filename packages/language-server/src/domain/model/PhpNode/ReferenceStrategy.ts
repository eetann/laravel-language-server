import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Reference } from "php-parser";

export class ReferenceStrategy extends NodeStrategy {
	getChildren(node: Reference) {
		return [];
	}
}
