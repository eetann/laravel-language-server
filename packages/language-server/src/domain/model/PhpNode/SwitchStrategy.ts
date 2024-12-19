import { NodeStrategy } from "./NodeStrategy";
import type { Switch } from "php-parser";

export class SwitchStrategy extends NodeStrategy {
	getChildren(node: Switch) {
		return [node.test, node.body];
	}
}
