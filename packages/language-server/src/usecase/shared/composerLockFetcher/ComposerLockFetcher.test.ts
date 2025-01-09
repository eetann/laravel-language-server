import type { Dirent } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ComposerLockFetcher } from "./ComposerLockFetcher";

const workspaceFolder = path.resolve(__dirname);
vi.mock("node:fs", async (importOriginal) => {
	const mod = await importOriginal<typeof import("node:fs")>();
	const mockDirent = (parentPath: string, name: string): Dirent => ({
		name,
		parentPath,
		path: name,
		isFile: () => true,
		isDirectory: () => false,
		isBlockDevice: () => false,
		isCharacterDevice: () => false,
		isFIFO: () => false,
		isSocket: () => false,
		isSymbolicLink: () => false,
	});
	return {
		...mod,
		existsSync: vi.fn(() => true),
		readdirSync: vi.fn((dir: string) => {
			if (dir.endsWith("vendor/brick/math/src/")) {
				return [mockDirent("vendor/brick/math/src/", "BigDecimal.php")];
			}
			return [
				mockDirent(
					"vendor/laravel/framework/src/Illuminate/",
					"Database/Seeder.php",
				),
				mockDirent(
					"vendor/laravel/framework/src/Illuminate/",
					"/Http/Request.php",
				),
			];
		}),
	};
});

describe("ComposerLockFetcher", () => {
	it("should correctly fetch PSR-4 mappings from a valid composer.lock", () => {
		const fetcher = new ComposerLockFetcher(workspaceFolder);
		const packageDict = fetcher.execute();

		let expectKey = "Brick\\Math\\BigDecimal";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "brick/math",
			version: "0.12.1",
			src: path.join(workspaceFolder, "vendor/brick/math/src/BigDecimal.php"),
		});

		expectKey = "Illuminate\\Database\\Seeder";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "laravel/framework",
			version: "v11.29.0",
			src: path.join(
				workspaceFolder,
				"vendor/laravel/framework/src/Illuminate/Database/Seeder.php",
			),
		});

		expectKey = "Illuminate\\Http\\Request";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "laravel/framework",
			version: "v11.29.0",
			src: path.join(
				workspaceFolder,
				"vendor/laravel/framework/src/Illuminate/Http/Request.php",
			),
		});
	});

	it("should throw an error if composer.lock does not exist", () => {
		const nonExistentPath = path.resolve(__dirname, "does-not-exist/");
		const fetcher = new ComposerLockFetcher(nonExistentPath);
		expect(() => fetcher.execute()).toThrow();
	});

	it("should throw an error for invalid composer.lock format", () => {
		const invalidContent = { invalid: "data" };

		const fetcher = new ComposerLockFetcher(workspaceFolder);
		expect(() => fetcher.extractPsr4Mapping(invalidContent)).toThrow(
			"Invalid composer.lock format: `packages` not found",
		);
	});
});
