import { ProvideCompletionItemsUseCase } from "@/usecase/provideCompletionItems/ProvideCompletionItemsUseCase";
import type {
	LanguageServicePlugin,
	LanguageServicePluginInstance,
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
				provideCompletionItems: new ProvideCompletionItemsUseCase().execute,
			};
		},
	};
};
