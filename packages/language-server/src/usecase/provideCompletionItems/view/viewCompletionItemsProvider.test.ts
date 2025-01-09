import path from "node:path";
import { CreateIndexUseCase } from "@/usecase/createIndex/CreateIndexUseCase";
import { CompletionItemKind } from "@volar/language-server";
import type { TextDocument } from "vscode-languageserver-textdocument";
import { ViewCompletionItemsProvider } from "./viewCompletionItemsProvider";

describe("ViewCompletionItemsProvider", () => {
	const workspaceFolder = path.resolve("../laravel-sample/");
	const textDocument: TextDocument = {
		languageId: "blade",
		version: 1,
		offsetAt: (_position) => 0,
		lineCount: 1,
		uri: "volar-embedded-content://root/file%253A%252F%252F%252FUsers%252Feetann%252Fghq%252Fgithub.com%252Feetann%252Flaravel-language-server%252Fpackages%252Flaravel-sample%252Fresources%252Fviews%252Fbook%252Findex.blade.php",
		getText: (_range) => "<p>{{$ $target }}</p>\n",
		positionAt: (_offset) => ({ line: 0, character: 0 }),
	};
	const index = new CreateIndexUseCase().execute(workspaceFolder);
	const provider = new ViewCompletionItemsProvider(index);

	it("getCurrentViewPath", () => {
		const currentViewPath = provider.getCurrentViewPath(textDocument.uri);
		expect(currentViewPath).toBe("book/index");
	});

	it("getItemsFromView", () => {
		const items = provider.getItemsFromView("book/index");
		expect(items).toContainEqual(
			expect.objectContaining({
				label: "books",
				kind: CompletionItemKind.Text,
				insertText: "books",
			}),
		);
	});

	it("execute", () => {
		// <p>{{$ $target }}</p>
		//      ^ cursor here
		const items = provider.execute(textDocument, { line: 0, character: 6 });
		expect(items).toContainEqual(
			expect.objectContaining({
				label: "books",
				kind: CompletionItemKind.Text,
				insertText: "books",
			}),
		);
	});
});
