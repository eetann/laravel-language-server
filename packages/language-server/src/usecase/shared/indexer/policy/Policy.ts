import type { Node } from "php-parser";

export abstract class Policy {
	abstract getViolations(node: Node): string[];
}

export class Policies implements Policy {
	constructor(private policies: Policy[]) {}

	getViolations(node: Node): string[] {
		return this.policies.reduce((violations, policy) => {
			return violations.concat(policy.getViolations(node));
		}, []);
	}
}
