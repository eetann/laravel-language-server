import type { Node, OffsetLookup } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class OffsetLookupStrategy extends NodeStrategy {
	getChildren(node: OffsetLookup) {
		const children: Node[] = [node.what];
		// node.offset = falseのケースがあるため
		// $b[] = 'a' で配列末尾に追加
		if (node.offset) {
			children.push(node.offset);
		}
		return children;
	}
}
