import type { Inline, Namespace, Program } from "php-parser";
import type { AbstractVisitor } from "./visitorPatternExtensions";
import "./visitorPatternExtensions";

export class Visitor implements AbstractVisitor {
	visitProgram(node: Program): void {
		console.log(node);
	}
	visitNamespace(node: Namespace): void {
		console.log("visitNamespace");
		console.log(node);
	}
	visitInline(node: Inline): void {
		console.log("visitInline");
		console.log(node);
	}
}

// example
// const visitor = new Visitor();
// const nodes = foo.getNodes();
// for (const node of nodes) {
//   node.accept(visitor)
// }
