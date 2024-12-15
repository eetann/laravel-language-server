import type { Node } from "php-parser";
import "./traverseExtensions";

type OnFunction = (node: Node) => void;

export function traverse(
	node: Node,
	onEnter?: OnFunction,
	onLeave?: OnFunction,
) {
	if (typeof onEnter !== "undefined") {
		onEnter(node);
	}
	for (const child of node.getChildren()) {
		traverse(child, onEnter, onLeave);
	}
	if (typeof onLeave !== "undefined") {
		onLeave(node);
	}
}
