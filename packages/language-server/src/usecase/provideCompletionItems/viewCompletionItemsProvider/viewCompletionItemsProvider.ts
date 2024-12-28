import type { Index, SymbolInformation } from "@/domain/model/scip";
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
			/resources%252Fviews%252F(.*).blade.php/,
		);
		if (viewPathMatch && 2 <= viewPathMatch.length) {
			const currentViewPath = decodeURIComponent(
				decodeURIComponent(viewPathMatch[1]),
			);
			items.push(...this.getEchoNodeItems(currentViewPath, currentNode));
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
			for (const [symbol, symbolInformation] of Object.entries(doc.symbols)) {
				if (symbol.match("view().")) {
					items.push(
						...this.createItemForArguments(currentViewPath, symbolInformation),
					);
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
		try {
			const bladeFile = JSON.parse(symbolInformation.documentation[0]);
			if (currentViewPath !== bladeFile.viewPath) {
				return items;
			}
			for (const [argName, typeInfo] of Object.entries(bladeFile.arguments)) {
				let documentation = "";
				if (typeInfo === "") {
					for (const doc of this.index.documents) {
						// argNameはsymbolではないのでただしく値を取得できない
						const symbolInfomation = doc.symbols[argName];
						console.log({ symbolInfomation });
						if (symbolInfomation) {
							documentation = (symbolInfomation.documentation ?? []).join("\n");
							break;
						}
					}
				} else {
					documentation = `@var ${typeInfo}`;
				}
				items.push({
					label: argName,
					// TODO: 後で SymbolInformation_Kind -> LSPのやつの変換関数を作る
					kind: CompletionItemKind.Text,
					documentation,
					insertText: argName,
				});
			}
		} catch (error) {
			console.log(
				`ViewCompletionItemsProvider.createItemForArguments: ${error}`,
			);
		}
		console.log(items);
		return items;
	}
}
