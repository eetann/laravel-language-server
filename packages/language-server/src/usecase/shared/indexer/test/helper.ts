import { Engine } from "php-parser";
import { Visitor } from "../Visitor";

export const targetName = "test.php";

export function createVisitor() {
	return new Visitor(targetName);
}

export function createParser() {
	return new Engine({
		parser: {
			extractDoc: true,
		},
		ast: {
			withPositions: true,
		},
	});
}

export const prefix = "laravel-language-server composer example 0.0.0 ";
