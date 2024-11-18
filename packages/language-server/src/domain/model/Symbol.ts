function escapePackage(value: string) {
	if (value === "") {
		return ".";
	}
	if (value.indexOf(" ") === -1) {
		return value;
	}
	return value.replace(/ /g, "  ");
}

function escapedIdentifier(value: string) {
	if (!value) {
		return "";
	}
	if (/^[\w_$+-]+$/i.test(value)) {
		return value;
	}
	return `\`${value.replace(/`/g, "``")}\``;
}

export class ScipSymbol {
	private scheme = "laravel-language-server";
	private packageName = "example";
	private version = "0.0.0";
	private _filename: string;
	private _namespace = "";
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

	createType(type: string) {
		return `${this.namespace}${escapedIdentifier(type)}#`;
	}
}
