import type { LanguagePlugin } from "@volar/language-server";
import { BladeVirtualCode } from "./BladeVirtualCode";

export class createVirtualCodeUseCase {
	execute: LanguagePlugin["createVirtualCode"] = (_, languageId, snapshot) => {
		if (languageId === "blade") {
			return new BladeVirtualCode(snapshot);
		}
		return undefined;
	};
}
