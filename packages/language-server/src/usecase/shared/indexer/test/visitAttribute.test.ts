import { traverse } from "../Traverse";
import { createParser, targetName } from "./helper";

describe("visit AttrGrpup Attribute", () => {
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
class Address
{
    public function __construct(
        #[Length(min: 1, max: 100)]
        public string $city,
        #[RegExp(pattern: '/\\A\\d{3}-\\d{4}\\z/')]
        public string $postal,
    ) {
        validate_properties($this);
    }
}
`,
		targetName,
	);

	it("check attributes", () => {
		const nodes = [];
		traverse(rootNode, (node) => {
			// console.log(node.kind)
			nodes.push(node.kind);
		});
		expect(nodes).toContain("attrgroup");
		expect(nodes).toContain("attribute");
	});
});
