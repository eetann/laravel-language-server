import type { Index } from "@/domain/model/scip";
import { BladeParser } from "@/usecase/shared/BladeParser";
import {
	type CompletionItem,
	CompletionItemKind,
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

		const currentViewPath = this.getCurrentViewPath(textDocument.uri);
		if (
			currentViewPath !== "" &&
			this.isInEchoNode(textDocument.getText(), position)
		) {
			items.push(...this.getItemsFromView(currentViewPath));
		}
		return items;
	}

	getCurrentViewPath(uri: string): string {
		const viewPathMatch = uri.match(/resources%252Fviews%252F(.*).blade.php/);
		if (viewPathMatch && 2 <= viewPathMatch.length) {
			return decodeURIComponent(decodeURIComponent(viewPathMatch[1]));
		}
		return "";
	}

	isInEchoNode(text: string, position: LspPosition): boolean {
		const bladeParser = new BladeParser(text);
		const currentNode = bladeParser.getCurrentNode(position);
		if (!(currentNode instanceof BladeEchoNode)) {
			return false;
		}
		if (typeof this.index === "undefined") {
			return false;
		}
		return true;
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
					for (const doc of Object.values(this.index.documents)) {
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
