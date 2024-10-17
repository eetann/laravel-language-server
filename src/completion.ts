import {
	type CompletionItem,
	CompletionItemKind,
	type TextDocumentPositionParams,
} from "vscode-languageserver/node";
import { bladeDirective } from "./data/directive";

export function onCompletion(
	textDocumentPosition: TextDocumentPositionParams,
): CompletionItem[] {
	const itemList: CompletionItem[] = [];
	if (textDocumentPosition.textDocument.uri.endsWith("blade.php")) {
		itemList.push(...bladeDirective);
	}
	itemList.push({
		label: "TypeScript",
		kind: CompletionItemKind.Text,
		data: 1,
	});
	return itemList;
}
