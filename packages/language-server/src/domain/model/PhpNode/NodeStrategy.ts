import type { Occurrence, SymbolInformation } from "@/gen/scip_pb";
import type { Node } from "php-parser";

declare module "php-parser" {
	interface Node {
		getChildren(): Node[];
		symbol: string;
		type: string;
	}
}

export class NodeStrategy {
	getSymbol(node: Node, parentSymbol: string): string {
		return "";
	}
	getType(node: Node): string {
		return "";
	}
	onEnter(node: Node, parentSymbol: string): void {
		node.symbol = this.getSymbol(node, parentSymbol);
		node.type = this.getType(node);
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
