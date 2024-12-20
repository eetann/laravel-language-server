import type { Index, SymbolInformation } from "@/gen/scip_pb";
import { BladeParser } from "@/usecase/shared/BladeParser";
import {
	type CompletionItem,
	CompletionItemKind,
	InsertTextFormat,
} from "@volar/language-server";
import {
	type AbstractNode,
	BladeEchoNode,
} from "stillat-blade-parser/out/nodes/nodes";
import type {
	Position as LspPosition,
	TextDocument,
} from "vscode-languageserver-textdocument";

export class ViewCompletionItemsProvider {
	constructor(private index: Index) {}
	execute(textDocument: TextDocument, position: LspPosition): CompletionItem[] {
		const items: CompletionItem[] = [];
		const bladeParser = new BladeParser(textDocument.getText());
		const currentNode = bladeParser.getCurrentNode(position);

		const viewPathMatch = textDocument.uri.match(
			"resources/views/(.*).blade.php",
		);
		console.log(viewPathMatch);
		if (viewPathMatch && 2 <= viewPathMatch.length) {
			items.push(...this.getEchoNodeItems(viewPathMatch[1], currentNode));
		}
		return items;
	}

	getEchoNodeItems(currentViewPath: string, currentNode: AbstractNode) {
		const items: CompletionItem[] = [];
		if (!(currentNode instanceof BladeEchoNode)) {
			return items;
		}
		if (typeof this.index === "undefined") {
			return items;
		}
		return this.getItemsFromView(currentViewPath);
	}

	getItemsFromView(currentViewPath: string): CompletionItem[] {
		const items: CompletionItem[] = [];
		for (const doc of this.index.documents) {
			for (const symbol of doc.symbols) {
				if (symbol.symbol.match("view().")) {
					items.push(...this.createItemForArguments(currentViewPath, symbol));
				}
			}
		}
		return items;
	}

	createItemForArguments(
		currentViewPath: string,
		symbolInformation: SymbolInformation,
	): CompletionItem[] {
		const items: CompletionItem[] = [];
		console.log(currentViewPath);
		try {
			const bladeFile = JSON.parse(symbolInformation.documentation[0]);
			// TODO: ここでファイル名と一致するか確認
			for (const [argName, typeInfo] of Object.entries(bladeFile.arguments)) {
				items.push({
					label: argName,
					// TODO: 後で SymbolInformation_Kind -> LSPのやつの変換関数を作る
					kind: CompletionItemKind.Text,
					documentation: `@var ${typeInfo}`,
					insertText: argName,
				});
			}
		} catch (error) {
			console.log(
				`ViewCompletionItemsProvider.createItemForArguments: ${error}`,
			);
		}
		return items;
	}
}
