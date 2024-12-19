import { NodeStrategy } from "./NodeStrategy";
import type { Declare } from "php-parser";

export class DeclareStrategy extends NodeStrategy {
	getChildren(node: Declare) {
		return node.directives;
	}
}
