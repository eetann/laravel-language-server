import type { Document } from "@/gen/scip_pb";
import {
	type CompletionItem,
	CompletionItemKind,
	type LanguageServicePluginInstance,
} from "@volar/language-server";
import { BladeCompletionItemsProvider } from "./bladeCompletionItemsProvider/BladeCompletionItemsProvider";

export class ProvideCompletionItemsUseCase {
	constructor(private index: Document) {}
	execute: LanguageServicePluginInstance["provideCompletionItems"] = (
		textDocument,
		position,
		completionContext,
		token,
	) => {
		if (token.isCancellationRequested) return null;
		const items: CompletionItem[] = [];
		if (textDocument.languageId === "blade") {
			items.push(
				...new BladeCompletionItemsProvider().execute(textDocument, position),
			);
		}
		items.push({
			label: "volar-test!",
			kind: CompletionItemKind.Text,
		});
		items.push(...this.createItemFromIndexer());
		return {
			isIncomplete: false,
			items: items,
		};
	};

	createItemFromIndexer(): CompletionItem[] {
		const items: CompletionItem[] = [];
		if (typeof this.index === "undefined") {
			return items;
		}
		for (const symbol of this.index.symbols) {
			// TODO: symbolを変更
			items.push({
				label: symbol.symbol,
				// TODO: 後で SymbolInformation_Kind -> LSPのやつの変換関数を作る
				kind: CompletionItemKind.Text,
				insertText: symbol.symbol,
			});
		}
		return items;
	}
}
