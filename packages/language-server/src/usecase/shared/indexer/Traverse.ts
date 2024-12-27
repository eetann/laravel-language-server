import type { Node } from "php-parser";

type OnFunction = (node: Node) => void;

// 走査関数
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

// 抽出関数
export function findNodes(node: Node, condition: (node: Node) => boolean) {
	const foundNodes: Node[] = [];

	const collectNodes = (enteredNode: Node) => {
		if (!condition(enteredNode)) {
			return;
		}
		foundNodes.push(enteredNode);
	};

	traverse(node, collectNodes);
	return foundNodes;
}
