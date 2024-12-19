import type { Program } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class ProgramStrategy extends NodeStrategy {
	getSymbol(_node: Program, _parentSymbol: string): string {
		return this.symbolCreator.filename;
	}
	getChildren(node: Program) {
		console.log("program getChildren");
		return node.children;
	}
}
