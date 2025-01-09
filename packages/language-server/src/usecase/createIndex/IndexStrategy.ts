import { readFileSync } from "node:fs";
import path from "node:path";
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
import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import { DocumentSchema, type Index } from "@/domain/model/scip";
import { SymbolCreator } from "@/domain/model/shared/SymbolCreator";
import { create } from "@bufbuild/protobuf";
import type { Node } from "php-parser";
import type { UseItem } from "php-parser";
import { Engine } from "php-parser";

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

const phpParser = new Engine({
	parser: {
		extractDoc: true,
	},
	ast: {
		withPositions: true,
	},
});

export function indexOneFile(
	index: Index,
	workspaceFolder: string,
	filePath: string,
	isRelative: boolean,
): void {
	let relativePath = "";
	let absolutePath = "";
	if (isRelative) {
		relativePath = filePath;
		absolutePath = path.join(workspaceFolder, filePath);
	} else {
		relativePath = path.relative(workspaceFolder, filePath);
		absolutePath = filePath;
	}
	if (index.documents[relativePath]) {
		return;
	}
	const content = readFileSync(absolutePath, "utf-8");
	const rootNode = phpParser.parseCode(content, relativePath);
	const symbolCreator = new SymbolCreator(
		"laravel/laravel",
		"0.0.0",
		relativePath,
	);

	const strategy = new IndexStrategy(
		index,
		workspaceFolder,
		relativePath,
		symbolCreator,
	);
	traverseForIndex(
		rootNode,
		"",
		strategy.getChildren,
		strategy.onEnter,
		strategy.onLeave,
	);
}

function convertNamespaceToFilePath(namespace: string): string {
	const filePath = namespace.replace(/^App\\/, "app/").replace(/\\/g, "/");
	return `${filePath}.php`;
}

export class UseItemStrategy extends NodeStrategy {
	constructor(
		index: Index,
		relativePath: string,
		symbolCreator: SymbolCreator,
		private workspaceFolder: string,
	) {
		super(index, relativePath, symbolCreator);
	}
	getChildren(node: UseItem) {
		const namespace = node.name;
		let alias = "";
		if (node.alias) {
			alias = node.alias.name;
		} else {
			alias = node.name.split("\\").at(-1);
		}
		// TODO: Controllerよりも前にModelsのファイルを読み込まないと、
		//   Modelsのファイルで決められた名前空間と一致するか検索できない
		//   一旦名前空間とファイル名が一致している前提で実装する
		const relativePath = convertNamespaceToFilePath(namespace);
		if (relativePath.startsWith("app")) {
			indexOneFile(this.index, this.workspaceFolder, relativePath, true);
		}
		// vendorでもindexOneFileする
		return [];
	}
}

export class IndexStrategy extends NodeStrategy {
	private strategies = new Map<string, NodeStrategy>();

	constructor(
		public index: Index,
		workspaceFolder: string,
		relativePath: string,
		symbolCreator: SymbolCreator,
	) {
		super(index, relativePath, symbolCreator);
		this.index.documents[relativePath] = create(DocumentSchema, {
			language: "php",
		});
		this.strategies.set(
			"array",
			new PhpArrayStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"arrowfunc",
			new ArrowFuncStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"assign",
			new AssignStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"assignref",
			new AssignRefStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"attrgroup",
			new AttrGroupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"attribute",
			new AttributeStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"bin",
			new BinStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"block",
			new BlockStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"boolean",
			new PhpBooleanStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"break",
			new BreakStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"call",
			new CallStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"case",
			new CaseStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"cast",
			new CastStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"catch",
			new CatchStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"class",
			new ClassStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"classconstant",
			new ClassConstantStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"clone",
			new CloneStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"closure",
			new ClosureStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"constant",
			new ConstantStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"continue",
			new ContinueStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"declare",
			new DeclareStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"declaredirective",
			new DeclareDirectiveStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"do",
			new DoStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"echo",
			new EchoStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"empty",
			new EmptyStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"encapsed",
			new EncapsedStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"encapsedpart",
			new EncapsedPartStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"entry",
			new EntryStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"enum",
			new EnumStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"enumcase",
			new EnumCaseStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"eval",
			new EvalStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"exit",
			new ExitStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"expressionstatement",
			new ExpressionStatementStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"for",
			new ForStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"foreach",
			new ForeachStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"function",
			new PhpFunctionStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"global",
			new GlobalStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"goto",
			new GotoStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"halt",
			new HaltStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"identifier",
			new IdentifierStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"if",
			new IfStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"include",
			new IncludeStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"interface",
			new InterfaceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"isset",
			new IssetStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"label",
			new LabelStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"list",
			new ListStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"match",
			new MatchStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"matcharm",
			new MatchArmStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"method",
			new MethodStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"namedargument",
			new namedargumentStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"namespace",
			new NamespaceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"new",
			new NewStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"noop",
			new NoopStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"nowdoc",
			new NowDocStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"nullkeyword",
			new NullKeywordStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"nullsafepropertylookup",
			new NullSafePropertyLookupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"number",
			new PhpNumberStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"offsetlookup",
			new OffsetLookupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"parameter",
			new ParameterStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"parentreference",
			new ParentReferenceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"post",
			new PostStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"pre",
			new PreStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"print",
			new PrintStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"program",
			new ProgramStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"property",
			new PropertyStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"propertylookup",
			new PropertyLookupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"propertystatement",
			new PropertyStatementStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"reference",
			new ReferenceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"retif",
			new RetIfStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"return",
			new ReturnStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"selfreference",
			new SelfReferenceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"silent",
			new SilentStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"static",
			new StaticStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"staticlookup",
			new StaticLookupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"staticvariable",
			new StaticVariableStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"string",
			new PhpStringStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"switch",
			new SwitchStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"throw",
			new ThrowStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"trait",
			new TraitStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"traitalias",
			new TraitAliasStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"traituse",
			new TraitUseStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"try",
			new TryStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"typereference",
			new TypeReferenceStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"unary",
			new UnaryStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"uniontype",
			new UnionTypeStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"unset",
			new UnsetStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"usegroup",
			new UseGroupStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"useitem",
			new UseItemStrategy(index, relativePath, symbolCreator, workspaceFolder),
		);
		this.strategies.set(
			"variable",
			new VariableStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"while",
			new WhileStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"yield",
			new YieldStrategy(index, relativePath, symbolCreator),
		);
		this.strategies.set(
			"yieldfrom",
			new YieldFromStrategy(index, relativePath, symbolCreator),
		);
	}

	// thisを固定するためにarrow functionを使う
	onEnter = (node: Node, parentSymbol: string) => {
		this.strategies.get(node.kind)?.onEnter(node, parentSymbol);
	};

	getChildren = (node: Node) => {
		return this.strategies.get(node.kind)?.getChildren(node) ?? [];
	};

	onLeave = (node: Node) => {
		this.strategies.get(node.kind)?.onLeave(node);
	};
}
