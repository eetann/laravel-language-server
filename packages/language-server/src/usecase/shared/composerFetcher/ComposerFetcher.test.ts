import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ComposerFetcher } from "./ComposerFetcher";

const testComposerLockPath = path.resolve(__dirname, "./test-composer.lock");

describe("ComposerFetcher", () => {
	it("should correctly fetch PSR-4 mappings from a valid composer.lock", () => {
		const fetcher = new ComposerFetcher(testComposerLockPath);
		const packageDict = fetcher.execute();

		// brick/math
		let expectKey = "composer brick/math 0.12.1";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "brick/math",
			version: "0.12.1",
			srcList: {
				"Brick\\Math\\": "src/",
			},
		});

		// carbonphp/carbon-doctrine-types
		expectKey = "composer carbonphp/carbon-doctrine-types 3.2.0";
		expect(packageDict).toHaveProperty(expectKey);
		expect(packageDict[expectKey]).toEqual({
			name: "carbonphp/carbon-doctrine-types",
			version: "3.2.0",
			srcList: {
				"Carbon\\Doctrine\\": "src/Carbon/Doctrine/",
			},
		});
	});

	it("should throw an error if composer.lock does not exist", () => {
		const nonExistentPath = path.resolve(
			__dirname,
			"non-existent-composer.lock",
		);
		const fetcher = new ComposerFetcher(nonExistentPath);
		expect(() => fetcher.execute()).toThrow(
			`composer.lock not found at ${nonExistentPath}`,
		);
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
