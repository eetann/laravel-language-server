import type { Index } from "@/domain/model/scip";
import {
	type CompletionItem,
	CompletionItemKind,
	type LanguageServicePluginInstance,
} from "@volar/language-server";
import { BladeCompletionItemsProvider } from "./bladeCompletionItemsProvider/BladeCompletionItemsProvider";
import { ViewCompletionItemsProvider } from "./viewCompletionItemsProvider/viewCompletionItemsProvider";

export class ProvideCompletionItemsUseCase {
	constructor(private index: Index) {}

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
		items.push(
			...new ViewCompletionItemsProvider(this.index).execute(
				textDocument,
				position,
			),
		);
		return {
			isIncomplete: false,
			items: items,
		};
	};
}
