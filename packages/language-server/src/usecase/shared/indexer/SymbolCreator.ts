import {
	DescriptorSchema,
	Descriptor_Suffix,
	OccurrenceSchema,
	SymbolInformationSchema,
	SymbolInformation_Kind,
	SymbolRole,
} from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import type { Program } from "php-parser";

function namespaceDescriptor(name: string) {
	return create(DescriptorSchema, {
		name,
		suffix: Descriptor_Suffix.Namespace,
	});
}

const a = namespaceDescriptor("bar");
a.disambiguator;

export class SymbolCreator {
	private scheme = "laravel-language-server";
	private packageName = "example";
	private version = "0.0.0";
	private namespace: string;
	constructor(namespace: string) {
		// ここで composer.jsonからpackageNameやversionを取得する
		this.packageName = this.escapePackage("example");
		this.version = this.escapePackage("0.0.0");
		// namespaceのファイル名がescaped-identifierになる？たぶんドットがあるから。
		this.namespace = "";
	}

	get package() {
		return `composer ${this.packageName} ${this.version}`;
	}

	escapePackage(value: string) {
		if (value === "") {
			return ".";
		}
		if (value.indexOf(" ") === -1) {
			return value;
		}
		return value.replace(/ /g, "  ");
	}

	createNamespace(node: Program) {
		const symbol = `${this.scheme} ${this.packageName} ${this.namespace}`;
		return {
			symbol: create(SymbolInformationSchema, {
				symbol,
				kind: SymbolInformation_Kind.File,
			}),
			occurrence: create(OccurrenceSchema, {
				range: [
					node.loc.start.line,
					node.loc.start.column,
					node.loc.end.column,
				],
				symbol,
				symbolRoles: SymbolRole.Definition,
			}),
		};
	}
}
