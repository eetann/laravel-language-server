import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Exit } from "php-parser";

export class ExitStrategy extends NodeStrategy {
	getChildren(node: Exit) {
		return [node.expression];
	}
}
