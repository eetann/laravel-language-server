// @ts-nocheck
import Inline from "php-parser/src/ast/inline.js";
import Namespace from "php-parser/src/ast/namespace.js";
import Program from "php-parser/src/ast/program.js";

export interface AbstractVisitor {
	visitProgram(node: Program): void;
	visitNamespace(node: Namespace): void;
	visitInline(node: Inline): void;
}

declare module "php-parser" {
	interface Node {
		accept(visitor: AbstractVisitor): void;
	}
}

Inline.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitInline(this);
};

Program.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitProgram(this);
};

Namespace.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNamespace(this);
};
