import type { Print } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

declare module "php-parser" {
	interface Print {
		expression: Expression;
	}
}
export class PrintStrategy extends NodeStrategy {
	getChildren(node: Print) {
		return [node.expression];
	}
}
