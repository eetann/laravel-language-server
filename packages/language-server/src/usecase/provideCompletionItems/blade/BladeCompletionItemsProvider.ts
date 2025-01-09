import { BladeParser } from "@/usecase/shared/BladeParser";
import {
	type CompletionItem,
	CompletionItemKind,
	InsertTextFormat,
} from "@volar/language-server";
import {
	type AbstractNode,
	BladeEchoNode,
} from "stillat-blade-parser/out/nodes/nodes";
import type {
	Position as LspPosition,
	TextDocument,
} from "vscode-languageserver-textdocument";
import { bladeDirective } from "./directives";

export class BladeCompletionItemsProvider {
	execute(textDocument: TextDocument, position: LspPosition): CompletionItem[] {
		const items: CompletionItem[] = [];
		items.push({
			label: "comment",
			kind: CompletionItemKind.Snippet,
			detail: "{{-- comment here --}}",
			documentation: "```blade\n{{-- comment here --}}\n```",
			insertText: "{{-- ${1} --}}",
			insertTextFormat: InsertTextFormat.Snippet,
		});
		items.push(...bladeDirective);
		const bladeParser = new BladeParser(textDocument.getText());
		const currentNode = bladeParser.getCurrentNode(position);
		items.push(...this.getEchoNodeItems(currentNode));
		return items;
	}

	getEchoNodeItems(currentNode: AbstractNode) {
		const items: CompletionItem[] = [];
		if (currentNode instanceof BladeEchoNode) {
			items.push({
				label: "inside echo!!!!",
				kind: CompletionItemKind.Text,
			});
		}
		return items;
	}
}
