import type { Connection, LanguageServicePlugin } from "@volar/language-server";
import { LanguageServicePluginInstanceCreator } from "./LanguageServicePluginInstanceCreator";

export const createBladeService = (
	connection: Connection,
): LanguageServicePlugin => {
	return {
		capabilities: {
			// textDocumentSyncはvolar側でIncrementalにしてるっぽい
			completionProvider: {
				triggerCharacters: ["$", "@"],
				resolveProvider: true,
			},
		},
		create: new LanguageServicePluginInstanceCreator(connection).execute,
	};
};
