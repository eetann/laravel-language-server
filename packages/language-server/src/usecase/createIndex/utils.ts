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
	VariableStrategy,
	WhileStrategy,
	YieldFromStrategy,
	YieldStrategy,
	namedargumentStrategy,
} from "@/domain/model/PhpNode";
import type { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import type { Index } from "@/domain/model/scip";
import type { SymbolCreator } from "@/domain/model/shared/SymbolCreator";

export function setStrategies(
	index: Index,
	relativePath: string,
	symbolCreator: SymbolCreator,
) {
	const strategies = new Map<string, NodeStrategy>();
	strategies.set(
		"array",
		new PhpArrayStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"arrowfunc",
		new ArrowFuncStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"assign",
		new AssignStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"assignref",
		new AssignRefStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"attrgroup",
		new AttrGroupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"attribute",
		new AttributeStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("bin", new BinStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"block",
		new BlockStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"boolean",
		new PhpBooleanStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"break",
		new BreakStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("call", new CallStrategy(index, relativePath, symbolCreator));
	strategies.set("case", new CaseStrategy(index, relativePath, symbolCreator));
	strategies.set("cast", new CastStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"catch",
		new CatchStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"class",
		new ClassStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"classconstant",
		new ClassConstantStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"clone",
		new CloneStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"closure",
		new ClosureStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"constant",
		new ConstantStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"continue",
		new ContinueStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"declare",
		new DeclareStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"declaredirective",
		new DeclareDirectiveStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("do", new DoStrategy(index, relativePath, symbolCreator));
	strategies.set("echo", new EchoStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"empty",
		new EmptyStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"encapsed",
		new EncapsedStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"encapsedpart",
		new EncapsedPartStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"entry",
		new EntryStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("enum", new EnumStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"enumcase",
		new EnumCaseStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("eval", new EvalStrategy(index, relativePath, symbolCreator));
	strategies.set("exit", new ExitStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"expressionstatement",
		new ExpressionStatementStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("for", new ForStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"foreach",
		new ForeachStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"function",
		new PhpFunctionStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"global",
		new GlobalStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("goto", new GotoStrategy(index, relativePath, symbolCreator));
	strategies.set("halt", new HaltStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"identifier",
		new IdentifierStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("if", new IfStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"include",
		new IncludeStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"interface",
		new InterfaceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"isset",
		new IssetStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"label",
		new LabelStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("list", new ListStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"match",
		new MatchStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"matcharm",
		new MatchArmStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"method",
		new MethodStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"namedargument",
		new namedargumentStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"namespace",
		new NamespaceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("new", new NewStrategy(index, relativePath, symbolCreator));
	strategies.set("noop", new NoopStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"nowdoc",
		new NowDocStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"nullkeyword",
		new NullKeywordStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"nullsafepropertylookup",
		new NullSafePropertyLookupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"number",
		new PhpNumberStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"offsetlookup",
		new OffsetLookupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"parameter",
		new ParameterStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"parentreference",
		new ParentReferenceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("post", new PostStrategy(index, relativePath, symbolCreator));
	strategies.set("pre", new PreStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"print",
		new PrintStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"program",
		new ProgramStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"property",
		new PropertyStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"propertylookup",
		new PropertyLookupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"propertystatement",
		new PropertyStatementStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"reference",
		new ReferenceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"retif",
		new RetIfStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"return",
		new ReturnStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"selfreference",
		new SelfReferenceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"silent",
		new SilentStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"static",
		new StaticStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"staticlookup",
		new StaticLookupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"staticvariable",
		new StaticVariableStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"string",
		new PhpStringStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"switch",
		new SwitchStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"throw",
		new ThrowStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"trait",
		new TraitStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"traitalias",
		new TraitAliasStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"traituse",
		new TraitUseStrategy(index, relativePath, symbolCreator),
	);
	strategies.set("try", new TryStrategy(index, relativePath, symbolCreator));
	strategies.set(
		"typereference",
		new TypeReferenceStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"unary",
		new UnaryStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"uniontype",
		new UnionTypeStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"unset",
		new UnsetStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"usegroup",
		new UseGroupStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"variable",
		new VariableStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"while",
		new WhileStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"yield",
		new YieldStrategy(index, relativePath, symbolCreator),
	);
	strategies.set(
		"yieldfrom",
		new YieldFromStrategy(index, relativePath, symbolCreator),
	);
	return strategies;
}
