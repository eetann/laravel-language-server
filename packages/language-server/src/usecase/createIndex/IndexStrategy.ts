import {
	ArrowFuncStrategy,
	AssignRefStrategy,
	AssignStrategy,
	AttrGroupStrategy,
	AttributeStrategy,
	BinStrategy,
	BlockStrategy,
	BreakStrategy,
	CallStrategy,
	CaseStrategy,
	CastStrategy,
	CatchStrategy,
	ClassConstantStrategy,
	ClassStrategy,
	CloneStrategy,
	ClosureStrategy,
	ConstantStrategy,
	ContinueStrategy,
	DeclareDirectiveStrategy,
	DeclareStrategy,
	DoStrategy,
	EchoStrategy,
	EmptyStrategy,
	EncapsedPartStrategy,
	EncapsedStrategy,
	EntryStrategy,
	EnumCaseStrategy,
	EnumStrategy,
	EvalStrategy,
	ExitStrategy,
	ExpressionStatementStrategy,
	ForStrategy,
	ForeachStrategy,
	GlobalStrategy,
	GotoStrategy,
	HaltStrategy,
	IdentifierStrategy,
	IfStrategy,
	IncludeStrategy,
	InterfaceStrategy,
	IssetStrategy,
	LabelStrategy,
	ListStrategy,
	MatchArmStrategy,
	MatchStrategy,
	MethodStrategy,
	NamespaceStrategy,
	NewStrategy,
	NoopStrategy,
	NowDocStrategy,
	NullKeywordStrategy,
	NullSafePropertyLookupStrategy,
	OffsetLookupStrategy,
	ParameterStrategy,
	ParentReferenceStrategy,
	PhpArrayStrategy,
	PhpBooleanStrategy,
	PhpFunctionStrategy,
	PhpNumberStrategy,
	PhpStringStrategy,
	PostStrategy,
	PreStrategy,
	PrintStrategy,
	ProgramStrategy,
	PropertyLookupStrategy,
	PropertyStatementStrategy,
	PropertyStrategy,
	ReferenceStrategy,
	RetIfStrategy,
	ReturnStrategy,
	SelfReferenceStrategy,
	SilentStrategy,
	StaticLookupStrategy,
	StaticStrategy,
	StaticVariableStrategy,
	SwitchStrategy,
	ThrowStrategy,
	TraitAliasStrategy,
	TraitStrategy,
	TraitUseStrategy,
	TryStrategy,
	TypeReferenceStrategy,
	UnaryStrategy,
	UnionTypeStrategy,
	UnsetStrategy,
	UseGroupStrategy,
	UseItemStrategy,
	VariableStrategy,
	WhileStrategy,
	YieldFromStrategy,
	YieldStrategy,
	namedargumentStrategy,
} from "@/domain/model/PhpNode";
import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import { type Document, DocumentSchema } from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";

// 走査関数
export function traverse(
	node: Node,
	parentSymbol: string,
	getChildren: (node: Node) => Node[],
	onEnter?: (node: Node, parentSymbol: string) => void,
	onLeave?: (node: Node) => void,
) {
	if (typeof onEnter !== "undefined") {
		onEnter(node, parentSymbol);
	}
	for (const child of getChildren(node)) {
		traverse(child, node.symbol, getChildren, onEnter, onLeave);
	}
	if (typeof onLeave !== "undefined") {
		onLeave(node);
	}
}

export class IndexStrategy extends NodeStrategy {
	public document: Document;
	private strategies = new Map<string, NodeStrategy>();

	constructor(filename: string) {
		super();
		this.document = create(DocumentSchema, {
			language: "php",
			relativePath: filename,
		});
		this.strategies.set("array", new PhpArrayStrategy());
		this.strategies.set("arrowfunc", new ArrowFuncStrategy());
		this.strategies.set("assign", new AssignStrategy());
		this.strategies.set("assignref", new AssignRefStrategy());
		this.strategies.set("attrgroup", new AttrGroupStrategy());
		this.strategies.set("attribute", new AttributeStrategy());
		this.strategies.set("bin", new BinStrategy());
		this.strategies.set("block", new BlockStrategy());
		this.strategies.set("boolean", new PhpBooleanStrategy());
		this.strategies.set("break", new BreakStrategy());
		this.strategies.set("call", new CallStrategy());
		this.strategies.set("case", new CaseStrategy());
		this.strategies.set("cast", new CastStrategy());
		this.strategies.set("catch", new CatchStrategy());
		this.strategies.set("class", new ClassStrategy());
		this.strategies.set("classconstant", new ClassConstantStrategy());
		this.strategies.set("clone", new CloneStrategy());
		this.strategies.set("closure", new ClosureStrategy());
		this.strategies.set("constant", new ConstantStrategy());
		this.strategies.set("continue", new ContinueStrategy());
		this.strategies.set("declare", new DeclareStrategy());
		this.strategies.set("declaredirective", new DeclareDirectiveStrategy());
		this.strategies.set("do", new DoStrategy());
		this.strategies.set("echo", new EchoStrategy());
		this.strategies.set("empty", new EmptyStrategy());
		this.strategies.set("encapsed", new EncapsedStrategy());
		this.strategies.set("encapsedpart", new EncapsedPartStrategy());
		this.strategies.set("entry", new EntryStrategy());
		this.strategies.set("enum", new EnumStrategy());
		this.strategies.set("enumcase", new EnumCaseStrategy());
		this.strategies.set("eval", new EvalStrategy());
		this.strategies.set("exit", new ExitStrategy());
		this.strategies.set(
			"expressionstatement",
			new ExpressionStatementStrategy(),
		);
		this.strategies.set("for", new ForStrategy());
		this.strategies.set("foreach", new ForeachStrategy());
		this.strategies.set("function", new PhpFunctionStrategy());
		this.strategies.set("global", new GlobalStrategy());
		this.strategies.set("goto", new GotoStrategy());
		this.strategies.set("halt", new HaltStrategy());
		this.strategies.set("identifier", new IdentifierStrategy());
		this.strategies.set("if", new IfStrategy());
		this.strategies.set("include", new IncludeStrategy());
		this.strategies.set("interface", new InterfaceStrategy());
		this.strategies.set("isset", new IssetStrategy());
		this.strategies.set("label", new LabelStrategy());
		this.strategies.set("list", new ListStrategy());
		this.strategies.set("match", new MatchStrategy());
		this.strategies.set("matcharm", new MatchArmStrategy());
		this.strategies.set("method", new MethodStrategy());
		this.strategies.set("namedargument", new namedargumentStrategy());
		this.strategies.set("namespace", new NamespaceStrategy());
		this.strategies.set("new", new NewStrategy());
		this.strategies.set("noop", new NoopStrategy());
		this.strategies.set("nowdoc", new NowDocStrategy());
		this.strategies.set("nullkeyword", new NullKeywordStrategy());
		this.strategies.set(
			"nullsafepropertylookup",
			new NullSafePropertyLookupStrategy(),
		);
		this.strategies.set("number", new PhpNumberStrategy());
		this.strategies.set("offsetlookup", new OffsetLookupStrategy());
		this.strategies.set("parameter", new ParameterStrategy());
		this.strategies.set("parentreference", new ParentReferenceStrategy());
		this.strategies.set("post", new PostStrategy());
		this.strategies.set("pre", new PreStrategy());
		this.strategies.set("print", new PrintStrategy());
		this.strategies.set("program", new ProgramStrategy());
		this.strategies.set("property", new PropertyStrategy());
		this.strategies.set("propertylookup", new PropertyLookupStrategy());
		this.strategies.set("propertystatement", new PropertyStatementStrategy());
		this.strategies.set("reference", new ReferenceStrategy());
		this.strategies.set("retif", new RetIfStrategy());
		this.strategies.set("return", new ReturnStrategy());
		this.strategies.set("selfreference", new SelfReferenceStrategy());
		this.strategies.set("silent", new SilentStrategy());
		this.strategies.set("static", new StaticStrategy());
		this.strategies.set("staticlookup", new StaticLookupStrategy());
		this.strategies.set("staticvariable", new StaticVariableStrategy());
		this.strategies.set("string", new PhpStringStrategy());
		this.strategies.set("switch", new SwitchStrategy());
		this.strategies.set("throw", new ThrowStrategy());
		this.strategies.set("trait", new TraitStrategy());
		this.strategies.set("traitalias", new TraitAliasStrategy());
		this.strategies.set("traituse", new TraitUseStrategy());
		this.strategies.set("try", new TryStrategy());
		this.strategies.set("typereference", new TypeReferenceStrategy());
		this.strategies.set("unary", new UnaryStrategy());
		this.strategies.set("uniontype", new UnionTypeStrategy());
		this.strategies.set("unset", new UnsetStrategy());
		this.strategies.set("usegroup", new UseGroupStrategy());
		this.strategies.set("useitem", new UseItemStrategy());
		this.strategies.set("variable", new VariableStrategy());
		this.strategies.set("while", new WhileStrategy());
		this.strategies.set("yield", new YieldStrategy());
		this.strategies.set("yieldfrom", new YieldFromStrategy());
	}

	// thisを固定するためにarrow functionを使う
	onEnter = (node: Node, parentSymbol: string) => {
		console.log(node.kind);
		this.strategies.get(node.kind)?.onEnter(node, parentSymbol);
	};

	getChildren = (node: Node) => {
		return this.strategies.get(node.kind)?.getChildren(node) ?? [];
	};

	onLeave = (node: Node) => {
		const strategy = this.strategies.get(node.kind);
		if (typeof strategy === "undefined") {
			return;
		}
		this.document.symbols.concat(strategy.createSymbolInformations(node));
		this.document.occurrences.concat(strategy.createOccurrences(node));
	};
}
