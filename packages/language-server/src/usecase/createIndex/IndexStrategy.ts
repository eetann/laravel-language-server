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
import {
	type Document,
	DocumentSchema,
	type ViewArgumentDict,
} from "@/domain/model/scip";
import type { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";

// 走査関数
export function traverseForIndex(
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
		traverseForIndex(child, node.symbol, getChildren, onEnter, onLeave);
	}
	if (typeof onLeave !== "undefined") {
		onLeave(node);
	}
}

export class IndexStrategy extends NodeStrategy {
	public document: Document;
	public viewArgumentDict: ViewArgumentDict = {};
	private strategies = new Map<string, NodeStrategy>();

	constructor(relativePath: string, symbolCreator: SymbolCreator) {
		super(symbolCreator);
		this.document = create(DocumentSchema, {
			language: "php",
			relativePath,
		});
		this.strategies.set("array", new PhpArrayStrategy(symbolCreator));
		this.strategies.set("arrowfunc", new ArrowFuncStrategy(symbolCreator));
		this.strategies.set("assign", new AssignStrategy(symbolCreator));
		this.strategies.set("assignref", new AssignRefStrategy(symbolCreator));
		this.strategies.set("attrgroup", new AttrGroupStrategy(symbolCreator));
		this.strategies.set("attribute", new AttributeStrategy(symbolCreator));
		this.strategies.set("bin", new BinStrategy(symbolCreator));
		this.strategies.set("block", new BlockStrategy(symbolCreator));
		this.strategies.set("boolean", new PhpBooleanStrategy(symbolCreator));
		this.strategies.set("break", new BreakStrategy(symbolCreator));
		this.strategies.set("call", new CallStrategy(symbolCreator));
		this.strategies.set("case", new CaseStrategy(symbolCreator));
		this.strategies.set("cast", new CastStrategy(symbolCreator));
		this.strategies.set("catch", new CatchStrategy(symbolCreator));
		this.strategies.set("class", new ClassStrategy(symbolCreator));
		this.strategies.set(
			"classconstant",
			new ClassConstantStrategy(symbolCreator),
		);
		this.strategies.set("clone", new CloneStrategy(symbolCreator));
		this.strategies.set("closure", new ClosureStrategy(symbolCreator));
		this.strategies.set("constant", new ConstantStrategy(symbolCreator));
		this.strategies.set("continue", new ContinueStrategy(symbolCreator));
		this.strategies.set("declare", new DeclareStrategy(symbolCreator));
		this.strategies.set(
			"declaredirective",
			new DeclareDirectiveStrategy(symbolCreator),
		);
		this.strategies.set("do", new DoStrategy(symbolCreator));
		this.strategies.set("echo", new EchoStrategy(symbolCreator));
		this.strategies.set("empty", new EmptyStrategy(symbolCreator));
		this.strategies.set("encapsed", new EncapsedStrategy(symbolCreator));
		this.strategies.set(
			"encapsedpart",
			new EncapsedPartStrategy(symbolCreator),
		);
		this.strategies.set("entry", new EntryStrategy(symbolCreator));
		this.strategies.set("enum", new EnumStrategy(symbolCreator));
		this.strategies.set("enumcase", new EnumCaseStrategy(symbolCreator));
		this.strategies.set("eval", new EvalStrategy(symbolCreator));
		this.strategies.set("exit", new ExitStrategy(symbolCreator));
		this.strategies.set(
			"expressionstatement",
			new ExpressionStatementStrategy(symbolCreator),
		);
		this.strategies.set("for", new ForStrategy(symbolCreator));
		this.strategies.set("foreach", new ForeachStrategy(symbolCreator));
		this.strategies.set("function", new PhpFunctionStrategy(symbolCreator));
		this.strategies.set("global", new GlobalStrategy(symbolCreator));
		this.strategies.set("goto", new GotoStrategy(symbolCreator));
		this.strategies.set("halt", new HaltStrategy(symbolCreator));
		this.strategies.set("identifier", new IdentifierStrategy(symbolCreator));
		this.strategies.set("if", new IfStrategy(symbolCreator));
		this.strategies.set("include", new IncludeStrategy(symbolCreator));
		this.strategies.set("interface", new InterfaceStrategy(symbolCreator));
		this.strategies.set("isset", new IssetStrategy(symbolCreator));
		this.strategies.set("label", new LabelStrategy(symbolCreator));
		this.strategies.set("list", new ListStrategy(symbolCreator));
		this.strategies.set("match", new MatchStrategy(symbolCreator));
		this.strategies.set("matcharm", new MatchArmStrategy(symbolCreator));
		this.strategies.set("method", new MethodStrategy(symbolCreator));
		this.strategies.set(
			"namedargument",
			new namedargumentStrategy(symbolCreator),
		);
		this.strategies.set("namespace", new NamespaceStrategy(symbolCreator));
		this.strategies.set("new", new NewStrategy(symbolCreator));
		this.strategies.set("noop", new NoopStrategy(symbolCreator));
		this.strategies.set("nowdoc", new NowDocStrategy(symbolCreator));
		this.strategies.set("nullkeyword", new NullKeywordStrategy(symbolCreator));
		this.strategies.set(
			"nullsafepropertylookup",
			new NullSafePropertyLookupStrategy(symbolCreator),
		);
		this.strategies.set("number", new PhpNumberStrategy(symbolCreator));
		this.strategies.set(
			"offsetlookup",
			new OffsetLookupStrategy(symbolCreator),
		);
		this.strategies.set("parameter", new ParameterStrategy(symbolCreator));
		this.strategies.set(
			"parentreference",
			new ParentReferenceStrategy(symbolCreator),
		);
		this.strategies.set("post", new PostStrategy(symbolCreator));
		this.strategies.set("pre", new PreStrategy(symbolCreator));
		this.strategies.set("print", new PrintStrategy(symbolCreator));
		this.strategies.set("program", new ProgramStrategy(symbolCreator));
		this.strategies.set("property", new PropertyStrategy(symbolCreator));
		this.strategies.set(
			"propertylookup",
			new PropertyLookupStrategy(symbolCreator),
		);
		this.strategies.set(
			"propertystatement",
			new PropertyStatementStrategy(symbolCreator),
		);
		this.strategies.set("reference", new ReferenceStrategy(symbolCreator));
		this.strategies.set("retif", new RetIfStrategy(symbolCreator));
		this.strategies.set("return", new ReturnStrategy(symbolCreator));
		this.strategies.set(
			"selfreference",
			new SelfReferenceStrategy(symbolCreator),
		);
		this.strategies.set("silent", new SilentStrategy(symbolCreator));
		this.strategies.set("static", new StaticStrategy(symbolCreator));
		this.strategies.set(
			"staticlookup",
			new StaticLookupStrategy(symbolCreator),
		);
		this.strategies.set(
			"staticvariable",
			new StaticVariableStrategy(symbolCreator),
		);
		this.strategies.set("string", new PhpStringStrategy(symbolCreator));
		this.strategies.set("switch", new SwitchStrategy(symbolCreator));
		this.strategies.set("throw", new ThrowStrategy(symbolCreator));
		this.strategies.set("trait", new TraitStrategy(symbolCreator));
		this.strategies.set("traitalias", new TraitAliasStrategy(symbolCreator));
		this.strategies.set("traituse", new TraitUseStrategy(symbolCreator));
		this.strategies.set("try", new TryStrategy(symbolCreator));
		this.strategies.set(
			"typereference",
			new TypeReferenceStrategy(symbolCreator),
		);
		this.strategies.set("unary", new UnaryStrategy(symbolCreator));
		this.strategies.set("uniontype", new UnionTypeStrategy(symbolCreator));
		this.strategies.set("unset", new UnsetStrategy(symbolCreator));
		this.strategies.set("usegroup", new UseGroupStrategy(symbolCreator));
		this.strategies.set("useitem", new UseItemStrategy(symbolCreator));
		this.strategies.set("variable", new VariableStrategy(symbolCreator));
		this.strategies.set("while", new WhileStrategy(symbolCreator));
		this.strategies.set("yield", new YieldStrategy(symbolCreator));
		this.strategies.set("yieldfrom", new YieldFromStrategy(symbolCreator));
	}

	// thisを固定するためにarrow functionを使う
	onEnter = (node: Node, parentSymbol: string) => {
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
		const { symbolDict, occurrences, viewArgumentDict } =
			strategy.onLeave(node);
		Object.assign(this.document.symbols, symbolDict);
		this.document.occurrences.push(...occurrences);
		Object.assign(this.viewArgumentDict, viewArgumentDict);
		return {
			symbolDict: {},
			occurrences: [],
			viewArgumentDict: {},
		};
	};
}
