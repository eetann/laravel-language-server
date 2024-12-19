import { NodeStrategy } from "./NodeStrategy";
import type { Case } from "php-parser";

export class CaseStrategy extends NodeStrategy {
	getChildren(node: Case) {
		const children = [];
		if (node.test) {
			children.push(node.test);
		}
		children.push(node.body);
		return children;
	}
}
