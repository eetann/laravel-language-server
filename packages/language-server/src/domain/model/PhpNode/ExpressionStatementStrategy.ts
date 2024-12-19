import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { ExpressionStatement } from "php-parser";

export class ExpressionStatementStrategy extends NodeStrategy {
	getChildren(node: ExpressionStatement) {
		return [node.expression];
	}
}
