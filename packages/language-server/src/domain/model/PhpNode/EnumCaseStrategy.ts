import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { EnumCase } from "php-parser";

export class EnumCaseStrategy extends NodeStrategy {
	getChildren(node: EnumCase) {
		return [];
	}
}
