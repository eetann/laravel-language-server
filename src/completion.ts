import { readFileSync } from "node:fs";
import { BladeEchoNode } from "stillat-blade-parser/out/nodes/nodes";
import { DocumentParser } from "stillat-blade-parser/out/parser/documentParser";

import {
	type CompletionItem,
	CompletionItemKind,
	type Position as LspPosition,
	type TextDocumentIdentifier,
	type TextDocumentPositionParams,
} from "vscode-languageserver/node";
import { bladeDirective } from "./data/directive";

// TODO: 要検証
// ref: [LSP概観｜Language Server Protocol の仕様 及び実装方法](https://zenn.dev/mtshiba/books/language_server_protocol/viewer/03_basics#position)
// TextDocumentPositionParamsのPosition 0始まり
// Bladeのposition: そのまま

function getCurrentNode(parser: DocumentParser, position: LspPosition) {
	const cursor = parser.positionFromCursor(
		position.line + 1,
		position.character + 1,
	);
	for (const node of parser.getNodes()) {
		if (cursor?.isWithin(node.startPosition, node.endPosition)) {
			return node;
		}
	}
	return undefined;
}

function getFileContent(textDocument: TextDocumentIdentifier) {
	return readFileSync(textDocument.uri.replace("file://", ""));
}

export function onCompletion(
	params: TextDocumentPositionParams,
): CompletionItem[] {
	const itemList: CompletionItem[] = [];
	if (params.textDocument.uri.endsWith("blade.php")) {
		itemList.push(...bladeDirective);
		const bladeParser = new DocumentParser();
		const text = getFileContent(params.textDocument);
		bladeParser.parse(text.toString());
		const currentNode = getCurrentNode(bladeParser, params.position);
		// {{ }} の中だったらさらに補完を追加
		if (currentNode instanceof BladeEchoNode) {
			itemList.push({
				label: "inside echo!!!!",
				kind: CompletionItemKind.Text,
			});
		}
	}
	itemList.push({
		label: "TypeScript",
		kind: CompletionItemKind.Text,
	});
	return itemList;
}
