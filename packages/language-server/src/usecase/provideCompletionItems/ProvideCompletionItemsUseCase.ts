import {
	type CompletionItem,
	CompletionItemKind,
	type LanguageServicePluginInstance,
} from "@volar/language-server";
import type { Indexer } from "../shared/IndexCodeUseCase";
import { BladeCompletionItemsProvider } from "./bladeCompletionItemsProvider/BladeCompletionItemsProvider";

export class ProvideCompletionItemsUseCase {
	constructor(private indexer: Indexer) {}
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
		for (const symbol of this.indexer.getSymbols()) {
			items.push({
				label: symbol.symbol,
				// 後で SymbolInformation_Kind -> LSPのやつの変換関数を作る
				kind: CompletionItemKind.Text,
			});
		}
		return items;
	}
}
