import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { PropertyStatement } from "php-parser";

export class PropertyStatementStrategy extends NodeStrategy {
	getChildren(node: PropertyStatement) {
		return node.properties;
	}
}
