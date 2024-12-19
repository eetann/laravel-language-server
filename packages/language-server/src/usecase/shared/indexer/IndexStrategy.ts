import {
	type Document,
	DocumentSchema,
	type Occurrence,
	type SymbolInformation,
} from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";
import "./traverseExtensions";

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
		console.log(node.kind);
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

export class CallStrategy extends NodeStrategy {
	getType(node: Node): string {
		return "function";
	}
}

// 走査関数
export function traverse(
	node: Node,
	parentSymbol: string,
	getChildren: (node: Node) => Node[],
	onEnter?: (node: Node, parentSymbol: string) => void,
	onLeave?: (node: Node) => void,
) {
	if (typeof onEnter !== "undefined") {
		onEnter(node, parentSymbol);
	}
	for (const child of node.getChildren()) {
		traverse(child, node.symbol, getChildren, onEnter, onLeave);
	}
	if (typeof onLeave !== "undefined") {
		onLeave(node);
	}
}

export class IndexStrategy extends NodeStrategy {
	public document: Document;
	private strategies = new Map<string, NodeStrategy>();

	constructor(filename: string) {
		super();
		this.document = create(DocumentSchema, {
			language: "php",
			relativePath: filename,
		});
		this.strategies.set("call", new CallStrategy());
	}

	// thisを固定するためにarrow functionを使う
	onEnter = (node: Node, parentSymbol: string) => {
		this.strategies.get(node.kind).onEnter(node, parentSymbol);
	};

	getChildren = (node: Node) => {
		return this.strategies.get(node.kind).getChildren(node);
	};

	onLeave = (node: Node) => {
		const strategy = this.strategies.get(node.kind);
		if (typeof strategy === "undefined") {
			return [];
		}
		this.document.symbols.concat(strategy.createSymbolInformations(node));
		this.document.occurrences.concat(strategy.createOccurrences(node));
	};
}

export function executeIndexStrategy(rootNode: Node) {
	const parentSymbol = "";
	const strategy = new IndexStrategy("test.php");
	traverse(
		rootNode,
		parentSymbol,
		strategy.getChildren,
		strategy.onEnter,
		strategy.onLeave,
	);
	return strategy.document;
}
