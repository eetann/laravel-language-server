import type { Node } from "php-parser";

export abstract class Policy {
	abstract getViolations(node: Node): string[];
}

export class Policies extends Policy {
	constructor(private policies: Policy[]) {
		super();
	}

	getViolations(node: Node): string[] {
		return this.policies.reduce((violations, policy) => {
			return violations.concat(policy.getViolations(node));
		}, []);
	}
}
