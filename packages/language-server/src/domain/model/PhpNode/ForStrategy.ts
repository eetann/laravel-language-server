import { NodeStrategy } from "./NodeStrategy";
import type { For } from "php-parser";

export class ForStrategy extends NodeStrategy {
	getChildren(node: For) {
		return [...node.init, ...node.test, ...node.increment, node.body];
	}
}
