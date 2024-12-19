import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { AttrGroup } from "php-parser";

export class AttrGroupStrategy extends NodeStrategy {
	getChildren(node: AttrGroup) {
		return node.attrs;
	}
}
