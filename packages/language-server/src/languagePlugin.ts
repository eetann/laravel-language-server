import type { LanguagePlugin, VirtualCode } from "@volar/language-core";
import { BladeDocument } from "stillat-blade-parser/out/document/bladeDocument";
import type { IScriptSnapshot } from "typescript";
import type { URI } from "vscode-uri";
import { getEmbeddedLanguage } from "./parse";

export const laravelLanguagePlugin: LanguagePlugin<URI> = {
	getLanguageId(uri) {
		if (uri.path.endsWith("blad3")) {
			return "blade";
		}
	},
	createVirtualCode(uri, languageId, snapshot) {
		if (languageId === "blade") {
			return new BladeVirtualCode(snapshot);
		}
	},
	// updateVirtualCode(uri, languageCode, snapshot) {
	// 	languageCode.update(snapshot);
	// 	return languageCode;
	// },
};

export class BladeVirtualCode implements VirtualCode {
	id = "root";
	languageId = "blade";
	mappings = [];
	embeddedCodes?: VirtualCode[] = [];

	bladeDocument: BladeDocument;

	constructor(public snapshot: IScriptSnapshot) {
		this.mappings = [
			{
				// bladeは全体なので0 = ファイルの全体がスタート
				sourceOffsets: [0],
				generatedOffsets: [0],
				lengths: [snapshot.getLength()],
				data: {
					completion: true,
				},
			},
		];

		this.bladeDocument = new BladeDocument();
		this.bladeDocument.getParser();
		this.bladeDocument.loadString(snapshot.getText(0, snapshot.getLength()));
		this.embeddedCodes = getEmbeddedLanguage(
			this.bladeDocument.getParser(),
			this.bladeDocument.getAllNodes(),
		);
	}
}
