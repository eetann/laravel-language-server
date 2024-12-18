import {
	OccurrenceSchema,
	SymbolInformationSchema,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/gen/scip_pb";
import { type MessageInitShape, create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";

export abstract class SCIPPolicy {
	abstract getDocumentProperties(node: Node): string[];

	createSymbol(symbol: MessageInitShape<typeof SymbolInformationSchema>) {
		return create(SymbolInformationSchema, symbol);
	}

	createOccurrenceSameLine(
		symbol: string,
		node: Node,
		occurrence?: MessageInitShape<typeof OccurrenceSchema>,
	) {
		return create(OccurrenceSchema, {
			symbol,
			range: [node.loc.start.line, node.loc.start.column, node.loc.end.column],
			...occurrence,
		});
	}

	createOccurrenceMultipleLine(
		symbol: string,
		node: Node,
		occurrence?: MessageInitShape<typeof OccurrenceSchema>,
	) {
		return create(OccurrenceSchema, {
			symbol,
			range: [
				node.loc.start.line,
				node.loc.start.column,
				node.loc.end.line,
				node.loc.end.column,
			],
			...occurrence,
		});
	}
}

// TODO: WIP
export class SCIPPolicies implements SCIPPolicy {
	getDocumentProperties(node: Node): string[] {
		return this.policies.reduce((violations, policy) => {
			return violations.concat(policy.getViolations(node));
		}, []);
	}
}
