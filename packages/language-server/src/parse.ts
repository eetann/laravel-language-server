import type { VirtualCode } from "@volar/language-core";
import type {
	AbstractNode,
	FragmentNode,
} from "stillat-blade-parser/out/nodes/nodes";
import type { DocumentParser as BladeParser } from "stillat-blade-parser/out/parser/documentParser";

type LanguageId = "css" | "javascript";

export function getEmbeddedLanguage(
	bladeParser: BladeParser,
	nodes: AbstractNode[],
) {
	const virtualCodes: VirtualCode[] = [];
	const fragmentsParser = bladeParser.getFragmentsParser();
	for (const fragment of fragmentsParser.getFragments()) {
		const lowerName = fragment.name.toLowerCase();

		if (
			!fragment.isClosingFragment &&
			!fragment.isSelfClosing &&
			(lowerName === "script" || lowerName === "style")
		) {
			const closingFragment = fragmentsParser.getClosingFragmentAfter(fragment);

			if (closingFragment == null) {
				return;
			}

			if (
				fragment.endPosition != null &&
				closingFragment.startPosition != null
			) {
				if (lowerName === "style") {
					virtualCodes.push(
						fragmentToVirtualCode(
							bladeParser,
							fragment,
							closingFragment,
							"css",
						),
					);
					// VirtualCodeにして配列へ
					continue;
				}
				virtualCodes.push(
					fragmentToVirtualCode(
						bladeParser,
						fragment,
						closingFragment,
						"javascript",
					),
				);
			}
		}
	}
	return virtualCodes;
}

function fragmentToVirtualCode(
	bladeParser: BladeParser,
	fragment: FragmentNode,
	closingFragment: FragmentNode,
	languageId: LanguageId,
): VirtualCode {
	// タグ以外 = 中身のみを取得する
	const text = bladeParser.getText(
		fragment.endPosition.offset + 1,
		closingFragment.startPosition.offset - 1,
	);
	return {
		id: `${languageId}_${fragment.refId}`,
		languageId: languageId,
		snapshot: {
			getText: (start, end) => text.substring(start, end),
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
