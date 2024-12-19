import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Label } from "php-parser";

export class LabelStrategy extends NodeStrategy {
	getChildren(node: Label) {
		return [];
	}
}
