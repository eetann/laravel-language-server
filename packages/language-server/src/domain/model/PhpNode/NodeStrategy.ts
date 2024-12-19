import type { Occurrence, SymbolInformation } from "@/gen/scip_pb";
import type { Node } from "php-parser";
import { SymbolCreator } from "../shared/SymbolCreator";

declare module "php-parser" {
	interface Node {
		getChildren(): Node[];
		symbol: string;
		typeInfo: string;
	}
}

export class NodeStrategy {
	constructor(protected symbolCreator: SymbolCreator) {}

	getSymbol(node: Node, parentSymbol: string): string {
		return "";
	}
	getType(node: Node): string {
		return "";
	}
	onEnter(node: Node, parentSymbol: string): void {
		node.symbol = this.getSymbol(node, parentSymbol);
		node.typeInfo = this.getType(node);
	}

	getChildren(node: Node): Node[] {
		return [];
	}

	// onLeaveとして呼び出す
	createSymbolInformations(node: Node): SymbolInformation[] {
		return [];
	}
	createOccurrences(node: Node): Occurrence[] {
		return [];
	}
}
