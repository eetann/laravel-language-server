import type { LanguagePlugin } from "@volar/language-core";
import type { URI } from "vscode-uri";
import { createVirtualCodeUseCase } from "./usecase/createVirtualCode/createVirtualCodeUseCase";

export const laravelLanguagePlugin: LanguagePlugin<URI> = {
	getLanguageId(uri) {
		if (uri.path.endsWith("blade")) {
			return "blade";
		}
	},
	createVirtualCode(scriptId, languageId, snapshot, ctx) {
		return new createVirtualCodeUseCase().execute(
			scriptId,
			languageId,
			snapshot,
			ctx,
		);
	},
	// updateVirtualCode(uri, languageCode, snapshot) {
	// 	languageCode.update(snapshot);
	// 	return languageCode;
	// },
};
