import { BladeParser } from "@/usecase/shared/BladeParser";
import type { VirtualCode } from "@volar/language-server";
import type { IScriptSnapshot } from "typescript";

export class BladeVirtualCode implements VirtualCode {
	id = "root";
	languageId = "blade";
	mappings = [];
	embeddedCodes: VirtualCode[] = [];
	bladeParser: BladeParser;

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
		this.bladeParser = new BladeParser(
			snapshot.getText(0, snapshot.getLength()),
		);
		this.embeddedCodes = this.bladeParser.getEmbeddedLanguage();
	}
}
