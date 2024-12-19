import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Post } from "php-parser";

export class PostStrategy extends NodeStrategy {
	getChildren(node: Post) {
		return [node.what];
	}
}
