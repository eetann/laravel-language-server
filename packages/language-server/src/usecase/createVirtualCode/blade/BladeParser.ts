import type { IScriptSnapshot, VirtualCode } from "@volar/language-core";
import type { FragmentNode } from "stillat-blade-parser/out/nodes/nodes";
import { DocumentParser } from "stillat-blade-parser/out/parser/documentParser";
import type { FragmentsParser } from "stillat-blade-parser/out/parser/fragmentsParser";

export class BladeParser {
	private parser: DocumentParser;
	private fragmentsParser: FragmentsParser;
	constructor(snapshot: IScriptSnapshot) {
		this.parser = new DocumentParser();
		this.parser.parse(snapshot.getText(0, snapshot.getLength()));
		this.fragmentsParser = this.parser.getFragmentsParser();
	}

	getEmbeddedLanguage(): VirtualCode[] {
		const virtualCodes: VirtualCode[] = [];
		for (const fragment of this.fragmentsParser.getFragments()) {
			const virtualCode = this.getVirtualCode(fragment);
			if (virtualCode) {
				virtualCodes.push(virtualCode);
			}
		}
		return virtualCodes;
	}

	getVirtualCode(fragment: FragmentNode): VirtualCode | undefined {
		const lowerName = fragment.name.toLowerCase();
		if (
			fragment.isClosingFragment ||
			fragment.isSelfClosing ||
			!(lowerName === "style" || lowerName === "script")
		) {
			return undefined;
		}
		const closingFragment =
			this.fragmentsParser.getClosingFragmentAfter(fragment);
		const hasValidPositions =
			fragment.endPosition && closingFragment?.startPosition;
		if (!closingFragment || !hasValidPositions) {
			return undefined;
		}
		return this.fragmentToVirtualCode(
			fragment,
			closingFragment,
			lowerName === "style" ? "css" : "javascript",
		);
	}

	fragmentToVirtualCode(
		fragment: FragmentNode,
		closingFragment: FragmentNode,
		languageId: string,
	): VirtualCode {
		// タグ以外 = 中身のみを取得する
		const text = this.parser.getText(
			fragment.endPosition.offset + 1,
			closingFragment.startPosition.offset - 1,
		);
		return {
			id: `${languageId}_${fragment.refId}`,
			languageId: languageId,
			snapshot: {
				getText: (start: number, end: number) => text.substring(start, end),
				getLength: () => text.length,
				getChangeRange: () => undefined,
			},
			mappings: [
				{
					sourceOffsets: [fragment.endPosition.offset + 1],
					generatedOffsets: [0],
					lengths: [text.length],
					data: {
						completion: true,
						format: true,
						navigation: true,
						semantic: true,
						structure: true,
						verification: true,
					},
				},
			],
		};
	}
}
