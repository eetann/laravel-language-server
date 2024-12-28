import {
	type Occurrence,
	OccurrenceSchema,
	type SymbolDict,
	SymbolInformationSchema,
	type ViewArgumentDict,
} from "@/domain/model/scip";
import { type MessageInitShape, create } from "@bufbuild/protobuf";
import type {
	Call,
	Node,
	Array as PhpArray,
	String as PhpString,
} from "php-parser";
import type { SymbolCreator } from "../shared/SymbolCreator";

declare module "php-parser" {
	interface Node {
		getChildren(): Node[];
		symbol: string;
		typeInfo: string;
	}
}

export function isPhpArray(node: Node): node is PhpArray {
	return node.kind === "array";
}
export function isPhpString(node: Node): node is PhpString {
	return node.kind === "string";
}
export function isCall(node: Node): node is Call {
	return node.kind === "call";
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

type ReturnOnLeave = {
	symbolDict: SymbolDict;
	occurrences: Occurrence[];
	viewArgumentDict: ViewArgumentDict;
};

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
	createSymbolInformations(node: Node): SymbolDict {
		return {};
	}
	createOccurrences(node: Node): Occurrence[] {
		return [];
	}
	onLeave(node: Node): ReturnOnLeave {
		node.typeInfo = this.getType(node);
		return {
			symbolDict: this.createSymbolInformations(node),
			occurrences: this.createOccurrences(node),
			viewArgumentDict: {},
		};
	}
}
