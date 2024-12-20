import { CreateIndexUseCase } from "./CreateIndexUseCase";

describe("CreateIndexUseCase", () => {
	it("normal", () => {
		const filename = "test.php";
		const packageName = "example";
		const packageVersion = "0.0.0";
		const scipDocument = new CreateIndexUseCase().execute(
			filename,
			{},
			packageName,
			packageVersion,
		);

		const prefix = `laravel-language-server composer ${packageName} ${packageVersion} `;
		const namespace = `${prefix}\`App\\Http\\Controllers\`/BookController#`;
		const symbol = `${namespace}index().view().`;
		const documentation = [
			JSON.stringify({
				viewPath: "book/index",
				arguments: {
					books: "",
				},
			}),
		];
		expect(scipDocument.symbols).toContainEqual(
			expect.objectContaining({
				symbol,
				documentation,
			}),
		);
	});
});
