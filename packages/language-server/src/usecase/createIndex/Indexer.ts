import { readFileSync } from "node:fs";
import path from "node:path";
import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import { DocumentSchema, type Index } from "@/domain/model/scip";
import { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";
import type { UseItem } from "php-parser";
import { Engine } from "php-parser";
import { setStrategies } from "./utils";

// 走査関数
export function traverseForIndex(
	node: Node,
	parentSymbol: string,
	getChildren: (node: Node) => Node[],
	onEnter?: (node: Node, parentSymbol: string) => void,
	onLeave?: (node: Node) => void,
) {
	if (typeof onEnter !== "undefined") {
		onEnter(node, parentSymbol);
	}
	for (const child of getChildren(node)) {
		traverseForIndex(child, node.symbol, getChildren, onEnter, onLeave);
	}
	if (typeof onLeave !== "undefined") {
		onLeave(node);
	}
}

const phpParser = new Engine({
	parser: {
		extractDoc: true,
	},
	ast: {
		withPositions: true,
	},
});

function convertNamespaceToFilePath(namespace: string): string {
	const filePath = namespace.replace(/^App\\/, "app/").replace(/\\/g, "/");
	return `${filePath}.php`;
}

export class UseItemStrategy extends NodeStrategy {
	constructor(
		index: Index,
		relativePath: string,
		symbolCreator: SymbolCreator,
		private workspaceFolder: string,
	) {
		super(index, relativePath, symbolCreator);
	}
	getChildren(node: UseItem) {
		const namespace = node.name;
		let alias = "";
		if (node.alias) {
			alias = node.alias.name;
		} else {
			alias = node.name.split("\\").at(-1);
		}
		if (namespace in this.index.packageDict) {
			const absolutePath = this.index.packageDict[namespace].src;
			// PHP 8.0以降の文法に対応していないのでパーサー側を修正しないといけない
			// new Indexer().execute(
			// 	this.index,
			// 	this.workspaceFolder,
			// 	absolutePath,
			// 	false,
			// );
		}
		// TODO: Controllerよりも前にModelsのファイルを読み込まないと、
		//   Modelsのファイルで決められた名前空間と一致するか検索できない
		//   一旦名前空間とファイル名が一致している前提で実装する
		const relativePath = convertNamespaceToFilePath(namespace);
		if (relativePath.startsWith("app")) {
			new Indexer().execute(
				this.index,
				this.workspaceFolder,
				relativePath,
				true,
			);
		}
		// vendorでもindexOneFileする
		return [];
	}
}

export class IndexStrategy extends NodeStrategy {
	private strategies: Map<string, NodeStrategy>;

	constructor(
		public index: Index,
		workspaceFolder: string,
		relativePath: string,
		symbolCreator: SymbolCreator,
	) {
		super(index, relativePath, symbolCreator);
		this.index.documents[relativePath] = create(DocumentSchema, {
			language: "php",
		});
		this.strategies = setStrategies(index, relativePath, symbolCreator);
		this.strategies.set(
			"useitem",
			new UseItemStrategy(index, relativePath, symbolCreator, workspaceFolder),
		);
	}

	// thisを固定するためにarrow functionを使う
	onEnter = (node: Node, parentSymbol: string) => {
		this.strategies.get(node.kind)?.onEnter(node, parentSymbol);
	};

	getChildren = (node: Node) => {
		return this.strategies.get(node.kind)?.getChildren(node) ?? [];
	};

	onLeave = (node: Node) => {
		this.strategies.get(node.kind)?.onLeave(node);
	};
}

export class Indexer {
	execute(
		index: Index,
		workspaceFolder: string,
		filePath: string,
		isRelative: boolean,
	): void {
		let relativePath = "";
		let absolutePath = "";
		if (isRelative) {
			relativePath = filePath;
			absolutePath = path.join(workspaceFolder, filePath);
		} else {
			relativePath = path.relative(workspaceFolder, filePath);
			absolutePath = filePath;
		}
		if (index.documents[relativePath]) {
			return;
		}
		const content = readFileSync(absolutePath, "utf-8");
		try {
			const rootNode = phpParser.parseCode(content, relativePath);
			const symbolCreator = new SymbolCreator(
				"laravel/laravel",
				"0.0.0",
				relativePath,
			);

			const strategy = new IndexStrategy(
				index,
				workspaceFolder,
				relativePath,
				symbolCreator,
			);
			traverseForIndex(
				rootNode,
				"",
				strategy.getChildren,
				strategy.onEnter,
				strategy.onLeave,
			);
		} catch (error) {
			console.error(error);
		}
	}
}
