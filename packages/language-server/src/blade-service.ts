import {
	type CompletionItem,
	CompletionItemKind,
	type LanguageServicePlugin,
	type LanguageServicePluginInstance,
} from "@volar/language-server";

export const createBladeService = (): LanguageServicePlugin => {
	return {
		capabilities: {
			completionProvider: {
				triggerCharacters: ["$", "@"],
				resolveProvider: true,
			},
		},
		create(context): LanguageServicePluginInstance {
			return {
				provideCompletionItems(document, position, completionContext, token) {
					if (token.isCancellationRequested) return null;
					const items: CompletionItem[] = [];
					items.push({
						label: "volar-test!",
						kind: CompletionItemKind.Text,
					});
					return {
						isIncomplete: false,
						items: items,
					};
				},
			};
		},
	};
};
