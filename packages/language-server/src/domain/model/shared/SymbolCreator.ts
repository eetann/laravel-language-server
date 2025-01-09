import type { Identifier } from "php-parser";

function escapePackage(value: string) {
	if (value === "") {
		return ".";
	}
	if (value.indexOf(" ") === -1) {
		return value;
	}
	return value.replace(/ /g, "  ");
}

function escapedIdentifier(_value: string | Identifier) {
	const value = getName(_value);
	if (!value) {
		return "";
	}
	if (/^[\w_$+-]+$/i.test(value)) {
		return value;
	}
	return `\`${value.replace(/`/g, "``")}\``;
}

export function getName(name: string | Identifier) {
	if (typeof name === "string") {
		return name;
	}
	return name.name;
}

export class SymbolCreator {
	private scheme = "laravel-language-server";
	private packageName = "example";
	private version = "0.0.0";
	private _filename: string;
	private _namespace = "";
	private _local_id = 1;
	constructor(packageName: string, version: string, filename: string) {
		this.packageName = escapePackage(packageName);
		this.version = escapePackage(version);
		this._filename = escapedIdentifier(filename);
	}

	get package() {
		return `composer ${this.packageName} ${this.version}`;
	}

	get filename() {
		return `${this.scheme} ${this.package} ${this._filename}/`;
	}

	get namespace() {
		if (this._namespace !== "") {
			return this._namespace;
		}
		return this.filename;
	}

	createNamespace(namespace: string) {
		this._namespace = `${this.scheme} ${this.package} ${escapedIdentifier(namespace)}/`;
		return this._namespace;
	}

	createType(type: string | Identifier) {
		return `${this.namespace}${escapedIdentifier(type)}#`;
	}
	createTerm(parentSymbol: string, term: string) {
		return `${parentSymbol}${escapedIdentifier(term)}.`;
	}

	createMethod(parentSymbol: string, method: string | Identifier) {
		return `${parentSymbol}${escapedIdentifier(method)}().`;
	}

	createIdentifier(identifier: string) {
		return `${this.namespace}${escapedIdentifier(identifier)}#`;
	}

	createLocalId() {
		return `local ${this._local_id++}`;
	}
}
