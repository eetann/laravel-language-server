import type { Case } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class CaseStrategy extends NodeStrategy {
	getChildren(node: Case) {
		const children = [];
		if (node.test) {
			children.push(node.test);
		}
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
