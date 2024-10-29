import { readFileSync } from "node:fs";
import {
	DocumentSchema,
	type Index,
	IndexSchema,
	type Occurrence,
	OccurrenceSchema,
	type SymbolInformation,
	SymbolInformationSchema,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import type { Class as PhpClass } from "php-parser";
import {
	type AbstractNode,
	PhpParser,
	isClass,
	isMethod,
	isNamespace,
	isProgram,
} from "../PhpParser";
import { SymbolCreator } from "./SymbolCreator";

export class Indexer {
	private index: Index;

	setIndex() {
		// プロジェクトルートを取得
		// プロジェクトの該当コード一覧を取得
		// 各ファイルをパースしてインデックス
		const filename =
			"../laravel-sample/app/Http/Controllers/BookController.php";
		const text = readFileSync(filename).toString();

		const occurrence = create(OccurrenceSchema, {
			range: [2, 7, 2, 12],
			symbol: "$target",
		});
		const symbol = create(SymbolInformationSchema, {
			symbol: "$target",
			kind: SymbolInformation_Kind.Variable,
		});
		const doc = create(DocumentSchema, {
			language: "blade",
			relativePath: filename,
			occurrences: [occurrence],
			symbols: [symbol],
		});
		this.index = create(IndexSchema, { documents: [doc] });
		// ここでindexから情報を探す
	}

	getSymbols() {
		const symbols: SymbolInformation[] = [];
		for (const doc of this.index.documents) {
			symbols.push(...doc.symbols);
		}
		return symbols;
	}

	createIndexDocument(text: string, filename: string) {
		const phpParser = new PhpParser(text, filename);
		const symbolCreator = new SymbolCreator(filename);
	}

	createDocumentValue(nodes: AbstractNode[]) {
		const symbols: SymbolInformation[] = [];
		const occurrences: Occurrence[] = [];
		for (const node of nodes) {
			if (isProgram(node)) {
				const value = this.createDocumentValue(node.children);
				symbols.push(...value.symbols);
				occurrences.push(...value.occurrences);
			} else if (isNamespace(node)) {
				const value = this.createDocumentValue(node.children);
				symbols.push(...value.symbols);
				occurrences.push(...value.occurrences);
			} else if (isClass(node)) {
				const value = this.createClasssSymbol(node);
				symbols.push(value.symbol);
				occurrences.push(value.occurrence);
			} else if (isMethod(node)) {
			}
		}
		return { symbols, occurrences };
	}

	createClasssSymbol(node: PhpClass) {
		const symbol = typeof node.name === "string" ? node.name : node.name.name;
		const documentation = node.leadingComments.map((v) => v.value);
		return {
			symbol: create(SymbolInformationSchema, {
				symbol,
				kind: SymbolInformation_Kind.Class,
				documentation,
			}),
			occurrence: create(OccurrenceSchema, {
				range: [
					node.loc.start.line,
					node.loc.start.column,
					node.loc.end.column,
				],
				symbol,
				symbolRoles: SymbolRole.Definition,
				syntaxKind: SyntaxKind.IdentifierType,
			}),
		};
	}
}
