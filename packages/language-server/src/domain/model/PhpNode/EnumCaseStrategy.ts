import { NodeStrategy } from "./NodeStrategy";
import type { EnumCase } from "php-parser";

export class EnumCaseStrategy extends NodeStrategy {
	getChildren(node: EnumCase) {
		return [];
	}
}
