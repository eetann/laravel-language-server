import {
	type CompletionItem,
	CompletionItemKind,
	type LanguageServicePluginInstance,
} from "@volar/language-server";
import { BladeCompletionItemsProvider } from "./bladeCompletionItemsProvider/BladeCompletionItemsProvider";

export class ProvideCompletionItemsUseCase {
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
		return {
			isIncomplete: false,
			items: items,
		};
	};
}
