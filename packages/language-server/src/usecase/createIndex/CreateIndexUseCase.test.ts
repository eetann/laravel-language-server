import path from "node:path";
import { CreateIndexUseCase } from "./CreateIndexUseCase";

describe("CreateIndexUseCase", () => {
	it("normal", () => {
		const workspaceFolder = path.resolve("../laravel-sample/");
		const index = new CreateIndexUseCase().execute(workspaceFolder);

		const prefix = "laravel-language-server composer laravel/laravel 0.0.0 ";
		const namespace = `${prefix}\`App\\Http\\Controllers\`/BookController#`;
		const symbol = `${namespace}index().view().`;
		const bookControllerDocument = index.documents.find(
			(d) => d.relativePath === "app/Http/Controllers/BookController.php",
		);
		expect(bookControllerDocument).not.toBeUndefined();
		expect(bookControllerDocument.symbols).toHaveProperty(symbol);
		expect(index.viewArgumentDict).toEqual(
			expect.objectContaining({
				"book/index": {
					books: "",
				},
			}),
		);
	});
});
