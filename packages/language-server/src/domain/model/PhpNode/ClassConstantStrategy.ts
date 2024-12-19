import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { ClassConstant } from "php-parser";

export class ClassConstantStrategy extends NodeStrategy {
	getChildren(node: ClassConstant) {
		return [...node.constants, ...node.attrGroups];
	}
}
