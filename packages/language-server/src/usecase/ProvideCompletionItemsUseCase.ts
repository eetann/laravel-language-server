import {
	CompletionItemKind,
	type CompletionItem,
	type LanguageServicePluginInstance,
} from "@volar/language-server";

export class ProvideCompletionItemsUseCase {
	execute: LanguageServicePluginInstance["provideCompletionItems"] = (
		document,
		position,
		completionContext,
		token,
	) => {
		if (token.isCancellationRequested) return null;
		const items: CompletionItem[] = [];
		items.push({
			label: "volar-test!",
			kind: CompletionItemKind.Text,
		});
		items.push({
			label: "VOLAR-TEST!?!?",
			kind: CompletionItemKind.Text,
		});
		return {
			isIncomplete: false,
			items: items,
		};
	};
}
