import path from "node:path";
import { CreateIndexUseCase } from "./CreateIndexUseCase";

describe("CreateIndexUseCase", () => {
	it("normal", () => {
		const workspaceFolder = path.resolve("../laravel-sample/");
		const index = new CreateIndexUseCase().execute(workspaceFolder);

		const prefix = "laravel-language-server composer laravel/laravel 0.0.0 ";
		const namespace = `${prefix}\`App\\Http\\Controllers\`/BookController#`;
		const symbol = `${namespace}index().view().`;
		const documentation = [
			JSON.stringify({
				viewPath: "book/index",
				// TODO: 後でcompactを実装したら変更する
				arguments: {
					books: "",
				},
			}),
		];
		const bookControllerDocument = index.documents.find(
			(d) => d.relativePath === "app/Http/Controllers/BookController.php",
		);
		expect(bookControllerDocument).not.toBeUndefined();
		expect(bookControllerDocument.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				documentation,
			}),
		);
	});
});
