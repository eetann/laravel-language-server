import { NodeStrategy } from "./NodeStrategy";
import type { Match } from "php-parser";

export class MatchStrategy extends NodeStrategy {
	getChildren(node: Match) {
		return [node.cond, ...node.arms];
	}
}
