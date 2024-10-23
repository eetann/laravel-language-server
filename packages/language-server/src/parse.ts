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
						fragmentToVirtualCode(bladeParser, fragment, "css"),
					);
					// VirtualCodeにして配列へ
					continue;
				}
				virtualCodes.push(
					fragmentToVirtualCode(bladeParser, fragment, "javascript"),
				);
			}
		}
	}
	return virtualCodes;
}

function fragmentToVirtualCode(
	bladeParser: BladeParser,
	fragment: FragmentNode,
	languageId: LanguageId,
): VirtualCode {
	const text = bladeParser.getText(
		fragment.startPosition.offset,
		fragment.endPosition.offset,
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
				// TODO: ここは実際にembeddedとして扱いたいコードのオフセット？
				sourceOffsets: [fragment.startPosition.offset + text.length],
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
