import type { StaticLookup } from "php-parser";
import { NodeStrategy } from "./NodeStrategy";

export class StaticLookupStrategy extends NodeStrategy {
	// getType
	// TODO: `use App\Models\Book`(UseItem Node)側でどのように型を取得するか <- 他のindex.documentにアクセスできるのか？

	// whatのsymbolを取得
	// whatの型を取得
	// @varが空の時に取得させる？
	getChildren(node: StaticLookup) {
		return [node.what, node.offset];
	}
}
