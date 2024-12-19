import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { PhpNumber } from "php-parser";

export class PhpNumberStrategy extends NodeStrategy {
	getChildren(node: PhpNumber) {
		return [];
	}
}
