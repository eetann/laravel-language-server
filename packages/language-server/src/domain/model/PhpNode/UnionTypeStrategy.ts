import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { UnionType } from "php-parser";

export class UnionTypeStrategy extends NodeStrategy {
	getChildren(node: UnionType) {
		return node.types;
	}
}
