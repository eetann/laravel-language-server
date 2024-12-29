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
		for (const [viewPath, args] of Object.entries(
			this.index.viewArgumentDict,
		)) {
			if (currentViewPath !== viewPath) {
				continue;
			}
			for (const [argName, arg] of Object.entries(args)) {
				let documentation = "";
				if (arg.typeInfo === "") {
					for (const doc of this.index.documents) {
						const symbolInfomation = doc.symbols[arg.symbol];
						if (symbolInfomation) {
							documentation = (symbolInfomation.documentation ?? []).join("\n");
							break;
						}
					}
				} else {
					documentation = `@var ${arg.typeInfo}`;
				}
				items.push({
					label: argName,
					// TODO: 後で SymbolInformation_Kind -> LSPのやつの変換関数を作る
					kind: CompletionItemKind.Text,
					documentation,
					insertText: argName,
				});
			}
		}
		return items;
	}
}
