import {
	Engine,
	Method,
	type Namespace,
	type Node,
	type Class as PhpClass,
	type Program,
} from "php-parser";

export interface AbstractNode extends Node {
	children?: AbstractNode[];
}

export function isProgram(node: Node): node is Program {
	return node.kind === "program";
}

export function isNamespace(node: Node): node is Namespace {
	return node.kind === "namespace";
}

export function isClass(node: Node): node is PhpClass {
	return node.kind === "class";
}

export function isMethod(node: Node): node is Method {
	return node.kind === "method";
}

export class PhpParser {
	private parser: Engine;
	private ast: Program;

	constructor(text: string, filename: string) {
		this.parser = new Engine({
			parser: {
				extractDoc: true,
			},
			ast: {
				withPositions: true,
			},
		});
		this.ast = this.parser.parseCode(text, filename);
	}

	getNodes(): AbstractNode[] {
		return this.ast.children;
	}

	getCurrentNode(offset: number): AbstractNode | undefined {
		return this.findNodeAtCursor(this.getNodes(), offset);
	}

	findNodeAtCursor(
		nodes: AbstractNode[],
		cursorOffset: number,
	): AbstractNode | undefined {
		for (const node of nodes) {
			const { start, end } = node.loc;
			if (start.offset <= cursorOffset && cursorOffset <= end.offset) {
				// TODO: leftとrightのケースもある
				if (node.children && node.children.length > 0) {
					const childNode = this.findNodeAtCursor(node.children, cursorOffset);
					if (childNode) {
						return childNode;
					}
					return node;
				}
			}
		}
		return undefined;
	}
}
