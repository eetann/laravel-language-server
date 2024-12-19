import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Program } from "php-parser";

export class ProgramStrategy extends NodeStrategy {
	getChildren(node: Program) {
		console.log("program getChildren");
		return node.children;
	}
}
