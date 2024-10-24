import type {
	LanguageServicePlugin,
	LanguageServicePluginInstance,
} from "@volar/language-server";
import { ProvideCompletionItemsUseCase } from "../usecase/ProvideCompletionItemsUseCase";

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
