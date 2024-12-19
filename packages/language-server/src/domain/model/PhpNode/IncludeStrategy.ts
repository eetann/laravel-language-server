import { NodeStrategy } from "./NodeStrategy";
import type { Include } from "php-parser";

export class IncludeStrategy extends NodeStrategy {
	getChildren(node: Include) {
		return [node.target];
	}
}
