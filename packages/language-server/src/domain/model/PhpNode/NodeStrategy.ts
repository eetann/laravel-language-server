import {
	type Occurrence,
	OccurrenceSchema,
	type SymbolInformation,
	SymbolInformationSchema,
} from "@/gen/scip_pb";
import { type MessageInitShape, create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";
import type { SymbolCreator } from "../shared/SymbolCreator";

declare module "php-parser" {
	interface Node {
		getChildren(): Node[];
		symbol: string;
		typeInfo: string;
	}
}

export function createSymbolInformation(
	symbol: MessageInitShape<typeof SymbolInformationSchema>,
) {
	return create(SymbolInformationSchema, symbol);
}

export function createOccurrenceSameLine(
	symbol: string,
	node: Node,
	occurrence?: MessageInitShape<typeof OccurrenceSchema>,
) {
	return create(OccurrenceSchema, {
		symbol,
		range: [node.loc.start.line, node.loc.start.column, node.loc.end.column],
		...occurrence,
	});
}

export function createOccurrenceMultipleLine(
	symbol: string,
	node: Node,
	occurrence?: MessageInitShape<typeof OccurrenceSchema>,
) {
	return create(OccurrenceSchema, {
		symbol,
		range: [
			node.loc.start.line,
			node.loc.start.column,
			node.loc.end.line,
			node.loc.end.column,
		],
		...occurrence,
	});
}

export class NodeStrategy {
	constructor(protected symbolCreator: SymbolCreator) {}

	getSymbol(_node: Node, parentSymbol: string): string {
		return parentSymbol;
	}
	onEnter(node: Node, parentSymbol: string): void {
		node.symbol = this.getSymbol(node, parentSymbol);
	}

	getChildren(node: Node): Node[] {
		return [];
	}

	getType(node: Node): string {
		return "";
	}
	createSymbolInformations(node: Node): SymbolInformation[] {
		return [];
	}
	createOccurrences(node: Node): Occurrence[] {
		return [];
	}
	onLeave(node: Node) {
		node.typeInfo = this.getType(node);
		return {
			symbolInfomations: this.createSymbolInformations(node),
			occurrences: this.createOccurrences(node),
		};
	}
}
