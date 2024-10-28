import { readFileSync } from "node:fs";
import {
	DocumentSchema,
	type Index,
	IndexSchema,
	OccurrenceSchema,
	type SymbolInformation,
	SymbolInformationSchema,
	SymbolInformation_Kind,
} from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import { BladeParser } from "./BladeParser";

export class Indexer {
	private index: Index;

	setIndex() {
		// プロジェクトルートを取得
		// プロジェクトの該当コード一覧を取得
		// 各ファイルをパースしてインデックス
		const filename = "../laravel-sample/resources/views/book/test.blade.php";
		const text = readFileSync(filename).toString();
		const bladeParser = new BladeParser(text);
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
		// for (const node of bladeParser.getNodes()) {
		// 	node;
		// }
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
}
