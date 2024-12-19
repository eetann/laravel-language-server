import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Switch } from "php-parser";

export class SwitchStrategy extends NodeStrategy {
	getChildren(node: Switch) {
		return [node.test, node.body];
	}
}
