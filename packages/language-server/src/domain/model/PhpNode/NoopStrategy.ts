import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Noop } from "php-parser";

export class NoopStrategy extends NodeStrategy {
	getChildren(node: Noop) {
		return [];
	}
}
