import fs, { type Dirent } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ComposerFetcher } from "./ComposerFetcher";

const testComposerLockPath = path.resolve(__dirname, "./test-composer.lock");

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
			if (dir === "vendor/brick/math/src/") {
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
describe("ComposerFetcher", () => {
	it("should correctly fetch PSR-4 mappings from a valid composer.lock", () => {
		const fetcher = new ComposerFetcher(testComposerLockPath);
		const packageDict = fetcher.execute();

		let expectKey = "Brick\\Math\\BigDecimal";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "brick/math",
			version: "0.12.1",
			src: "vendor/brick/math/src/BigDecimal.php",
		});

		expectKey = "Illuminate\\Database\\Seeder";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "laravel/framework",
			version: "v11.29.0",
			src: "vendor/laravel/framework/src/Illuminate/Database/Seeder.php",
		});

		expectKey = "Illuminate\\Http\\Request";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "laravel/framework",
			version: "v11.29.0",
			src: "vendor/laravel/framework/src/Illuminate/Http/Request.php",
		});
	});

	it("should throw an error if composer.lock does not exist", () => {
		const nonExistentPath = path.resolve(
			__dirname,
			"non-existent-composer.lock",
		);
		const fetcher = new ComposerFetcher(nonExistentPath);
		expect(() => fetcher.execute()).toThrow();
	});

	it("should throw an error for invalid composer.lock format", () => {
		const invalidComposerLockPath = path.resolve(
			__dirname,
			"invalid-composer.lock",
		);
		const invalidContent = '{"invalid": "data"}';
		fs.writeFileSync(invalidComposerLockPath, invalidContent);

		const fetcher = new ComposerFetcher(invalidComposerLockPath);
		expect(() => fetcher.execute()).toThrow(
			"Invalid composer.lock format: `packages` not found",
		);
		fs.unlinkSync(invalidComposerLockPath);
	});
});
