import type {
	ArrowFunc,
	Assign,
	AssignRef,
	AttrGroup,
	Attribute,
	Bin,
	Block,
	Break,
	ByRef,
	Call,
	Case,
	Cast,
	Catch,
	Class,
	ClassConstant,
	Clone,
	Closure,
	Comment,
	CommentBlock,
	CommentLine,
	Constant,
	ConstantStatement,
	Continue,
	Declaration,
	Declare,
	DeclareDirective,
	Do,
	Echo,
	Empty,
	Encapsed,
	EncapsedPart,
	Entry,
	Enum,
	EnumCase,
	Eval,
	Exit,
	Expression,
	ExpressionStatement,
	For,
	Foreach,
	Global,
	Goto,
	Halt,
	Identifier,
	If,
	Include,
	Inline,
	Interface,
	IntersectionType,
	Isset,
	Label,
	List,
	Literal,
	Location,
	Lookup,
	Magic,
	Match,
	MatchArm,
	Method,
	Name,
	Namespace,
	New,
	Node,
	Noop,
	NowDoc,
	NullKeyword,
	NullSafePropertyLookup,
	OffsetLookup,
	Operation,
	Parameter,
	ParentReference,
	Array as PhpArray,
	Boolean as PhpBoolean,
	Error as PhpError,
	Function as PhpFunction,
	Number as PhpNumber,
	String as PhpString,
	Position,
	Post,
	Pre,
	Print,
	Program,
	Property,
	PropertyLookup,
	PropertyStatement,
	Reference,
	RetIf,
	Return,
	SelfReference,
	Silent,
	Statement,
	Static,
	StaticLookup,
	StaticReference,
	StaticVariable,
	Switch,
	Throw,
	Trait,
	TraitAlias,
	TraitPrecedence,
	TraitUse,
	Try,
	TypeReference,
	Unary,
	UnionType,
	Unset,
	UseGroup,
	UseItem,
	Variable,
	Variadic,
	VariadicPlaceholder,
	While,
	Yield,
	YieldFrom,
	namedargument,
} from "php-parser";
import type { AbstractVisitor } from "./visitorPatternExtensions";
import "./visitorPatternExtensions";
import {
	type Document,
	DocumentSchema,
	OccurrenceSchema,
	SymbolInformationSchema,
	SymbolInformation_Kind,
	SymbolRole,
	SyntaxKind,
} from "@/gen/scip_pb";
import { type MessageInitShape, create } from "@bufbuild/protobuf";
import { SymbolCreator } from "../../../domain/model/shared/SymbolCreator";
import type { PackageDict } from "../composerFetcher/ComposerFetcher";

export type ViewCaller = {
	parentSymbol: string;
	callerLocation: number;
	viewPath: string;
	arguments: string[];
};

function isCall(node: Node): node is Call {
	return node.kind === "call";
}

function isPhpString(node: Node): node is PhpString {
	return node.kind === "string";
}

export class Visitor implements AbstractVisitor {
	private _document: Document;
	private _symbol: SymbolCreator;
	private _thisPackageName: string;
	private _thisPackageVersion: string;
	private _packageDict: PackageDict;
	private _viewCallerList: ViewCaller[] = [];
	constructor(
		filename: string,
		packageDict: PackageDict,
		thisPackageName: string,
		thisPackageVersion: string,
	) {
		this._document = create(DocumentSchema, {
			language: "php",
			relativePath: filename,
		});
		this._symbol = new SymbolCreator(
			thisPackageName,
			thisPackageVersion,
			filename,
		);
		this._thisPackageName = thisPackageName;
		this._thisPackageVersion = thisPackageVersion;
		this._packageDict = packageDict;
	}

	get document() {
		return this._document;
	}

	createSymbol(symbol: MessageInitShape<typeof SymbolInformationSchema>) {
		this._document.symbols.push(create(SymbolInformationSchema, symbol));
	}

	createOccurrenceSameLine(
		symbol: string,
		node: Node,
		occurrence?: MessageInitShape<typeof OccurrenceSchema>,
	) {
		this._document.occurrences.push(
			create(OccurrenceSchema, {
				symbol,
				range: [
					node.loc.start.line,
					node.loc.start.column,
					node.loc.end.column,
				],
				...occurrence,
			}),
		);
	}

	createOccurrenceMultipleLine(
		symbol: string,
		node: Node,
		occurrence?: MessageInitShape<typeof OccurrenceSchema>,
	) {
		this._document.occurrences.push(
			create(OccurrenceSchema, {
				symbol,
				range: [
					node.loc.start.line,
					node.loc.start.column,
					node.loc.end.line,
					node.loc.end.column,
				],
				...occurrence,
			}),
		);
	}

	visitPhpArray(node: PhpArray, parentSymbol: string) {
		console.log("visitPhpArray");
		return "";
	}
	visitArrowFunc(node: ArrowFunc, parentSymbol: string) {
		console.log("visitArrowFunc");
		return "";
	}

	visitAssign(node: Assign, parentSymbol: string) {
		// Laravelの場合はBladeに向けて変数を送り出すのでlocalにはならない
		// if (/\(.*\)/.test(parentSymbol)) {
		// 	// local
		// 	const symbol = this._symbol.createLocalId();
		// 	this.createSymbol({ symbol });
		// 	this.createOccurrenceSameLine(symbol, node.left, {
		// 		symbolRoles: SymbolRole.Definition,
		// 		syntaxKind: SyntaxKind.IdentifierLocal,
		// 	});
		// 	return;
		// }
		// TODO: class変数
		// TODO: グローバル変数
		// どうやってleftがrightの型を知るか
		// rightが呼び出しだと、その時点では型がわからない
		// indexerはあくまでもindexにとどめて、型情報は後で取ってくるのでは？
		// TODO: たとえばrightが数値だと、
		node.left.accept(this, parentSymbol);
		node.right.accept(this, parentSymbol);
		return "";
	}
	visitAssignRef(node: AssignRef, parentSymbol: string) {
		console.log("visitAssignRef");
		return "";
	}
	visitAttrGroup(node: AttrGroup, parentSymbol: string) {
		console.log("visitAttrGroup");
		return "";
	}
	visitAttribute(node: Attribute, parentSymbol: string) {
		console.log("visitAttribute");
		return "";
	}
	visitBin(node: Bin, parentSymbol: string) {
		console.log("visitBin");
		return "";
	}
	visitBlock(node: Block, parentSymbol: string) {
		let returnType = "";
		for (const child of node.children) {
			returnType = child.accept(this, parentSymbol);
		}
		return returnType;
	}
	visitPhpBoolean(node: PhpBoolean, parentSymbol: string) {
		console.log("visitPhpBoolean");
		return "bool";
	}
	visitBreak(node: Break, parentSymbol: string) {
		console.log("visitBreak");
		return "";
	}
	visitByRef(node: ByRef, parentSymbol: string) {
		console.log("visitByRef");
		return "";
	}
	visitCall(node: Call, parentSymbol: string) {
		// 呼び出し側なので詳しく書かない
		// node.what.accept(this, parentSymbol);
		// for (const arg of node.arguments) {
		// 	arg.accept(this, parentSymbol);
		// }
		if (node.what.name === "view") {
			// TODO: ここでviewを呼び出していたらリスト化？
			const viewPathNode = node.arguments[0];
			// stringだったら
			if (isPhpString(viewPathNode)) {
				const args: string[] = [];
				const argsNode = node.arguments[1];
				if (isCall(argsNode) && argsNode.what.name === "compact") {
					for (const arg of argsNode.arguments) {
						if (isPhpString(arg)) {
							args.push(arg.value);
						} else {
							// TODO: 配列だったら
						}
					}
					// TODO: compactの結果が複雑なとき
				}
				// TODO: compact以外だったら
				this._viewCallerList.push({
					parentSymbol: parentSymbol,
					callerLocation: node.loc.start.line,
					viewPath: viewPathNode.value,
					arguments: args,
				});
				return "";
			}
			// TODO: variableだったら
			// TODO: callerだったら
			return "";
		}
		console.log("visitCall view以外");
		return "";
	}
	visitCase(node: Case, parentSymbol: string) {
		console.log("visitCase");
		return "";
	}
	visitCast(node: Cast, parentSymbol: string) {
		console.log("visitCast");
		return "";
	}
	visitCatch(node: Catch, parentSymbol: string) {
		console.log("visitCatch");
		return "";
	}

	visitClass(node: Class, parentSymbol: string) {
		let symbol = "";
		if (typeof node.name === "string") {
			symbol = node.name;
		} else {
			// visitIdentifier
			node.name.accept(this, parentSymbol);
			symbol = this._symbol.createType(node.name.name);
		}
		console.log(symbol);
		if (node.extends) {
			const symbolForExtends = this._symbol.createIdentifier(node.extends.name);
			this.createSymbol({
				symbol,
				kind: SymbolInformation_Kind.Class,
				relationships: [
					{
						symbol: symbolForExtends,
						isImplementation: true,
					},
				],
			});
		} else {
			this.createSymbol({
				symbol,
				kind: SymbolInformation_Kind.Class,
			});
		}
		this.createOccurrenceMultipleLine(symbol, node, {
			symbolRoles: SymbolRole.Definition,
			syntaxKind: SyntaxKind.IdentifierType,
		});
		for (const child of node.body) {
			child.accept(this, symbol);
		}
		return this.getName(node.name);
	}

	visitClassConstant(node: ClassConstant, parentSymbol: string) {
		console.log("visitClassConstant");
		return "";
	}
	visitClone(node: Clone, parentSymbol: string) {
		console.log("visitClone");
		return "";
	}
	visitClosure(node: Closure, parentSymbol: string) {
		console.log("visitClosure");
		return "";
	}
	visitComment(node: Comment, parentSymbol: string) {
		console.log("visitComment");
		return "";
	}
	visitCommentBlock(node: CommentBlock, parentSymbol: string) {
		console.log("visitCommentBlock");
		return "";
	}
	visitCommentLine(node: CommentLine, parentSymbol: string) {
		console.log("visitCommentLine");
		return "";
	}
	visitConstant(node: Constant, parentSymbol: string) {
		console.log("visitConstant");
		return "";
	}
	visitConstantStatement(node: ConstantStatement, parentSymbol: string) {
		console.log("visitConstantStatement");
		return "";
	}
	visitContinue(node: Continue, parentSymbol: string) {
		console.log("visitContinue");
		return "";
	}
	visitDeclaration(node: Declaration, parentSymbol: string) {
		console.log("visitDeclaration");
		return "";
	}
	visitDeclare(node: Declare, parentSymbol: string) {
		console.log("visitDeclare");
		return "";
	}
	visitDeclareDirective(node: DeclareDirective, parentSymbol: string) {
		console.log("visitDeclareDirective");
		return "";
	}
	visitDo(node: Do, parentSymbol: string) {
		console.log("visitDo");
		return "";
	}
	visitEcho(node: Echo, parentSymbol: string) {
		console.log("visitEcho");
		return "";
	}
	visitEmpty(node: Empty, parentSymbol: string) {
		console.log("visitEmpty");
		return "";
	}
	visitEncapsed(node: Encapsed, parentSymbol: string) {
		console.log("visitEncapsed");
		return "";
	}
	visitEncapsedPart(node: EncapsedPart, parentSymbol: string) {
		console.log("visitEncapsedPart");
		return "";
	}
	visitEntry(node: Entry, parentSymbol: string) {
		console.log("visitEntry");
		return "";
	}
	visitEnum(node: Enum, parentSymbol: string) {
		console.log("visitEnum");
		return "";
	}
	visitEnumCase(node: EnumCase, parentSymbol: string) {
		console.log("visitEnumCase");
		return "";
	}
	visitPhpError(node: PhpError, parentSymbol: string) {
		console.log("visitPhpError");
		return "error";
	}
	visitEval(node: Eval, parentSymbol: string) {
		console.log("visitEval");
		return "";
	}
	visitExit(node: Exit, parentSymbol: string) {
		console.log("visitExit");
		return "";
	}
	visitExpression(node: Expression, parentSymbol: string) {
		// Expressionは継承されるのでvisitExpressionは実装しない？
		// console.log("visitExpression");
		return "";
	}
	visitExpressionStatement(node: ExpressionStatement, parentSymbol: string) {
		return node.expression.accept(this, parentSymbol);
	}
	visitFor(node: For, parentSymbol: string) {
		console.log("visitFor");
		return "";
	}
	visitForeach(node: Foreach, parentSymbol: string) {
		console.log("visitForeach");
		return "";
	}
	visitPhpFunction(node: PhpFunction, parentSymbol: string) {
		console.log("visitPhpFunction");
		const symbol = this._symbol.createMethod(
			parentSymbol,
			this.getName(node.name),
		);
		this.createSymbol({ symbol, kind: SymbolInformation_Kind.Function });
		this.createOccurrenceMultipleLine(symbol, node, {
			syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
			symbolRoles: SymbolRole.Definition,
		});
		node.body.accept(this, symbol);
		return "";
	}
	visitGlobal(node: Global, parentSymbol: string) {
		console.log("visitGlobal");
		return "";
	}
	visitGoto(node: Goto, parentSymbol: string) {
		console.log("visitGoto");
		return "";
	}
	visitHalt(node: Halt, parentSymbol: string) {
		console.log("visitHalt");
		return "";
	}
	visitIdentifier(node: Identifier, parentSymbol: string) {
		const symbol = this._symbol.createIdentifier(node.name);
		// this.createSymbol({symbol,
		//   kind: SymbolInformation_Kind.Class
		// })
		return "";
	}
	visitIf(node: If, parentSymbol: string) {
		console.log("visitIf");
		return "";
	}
	visitInclude(node: Include, parentSymbol: string) {
		console.log("visitInclude");
		return "";
	}
	visitInline(node: Inline, parentSymbol: string) {
		console.log("visitInline");
		return "";
	}
	visitInterface(node: Interface, parentSymbol: string) {
		console.log("visitInterface");
		return "";
	}
	visitIntersectionType(node: IntersectionType, parentSymbol: string) {
		console.log("visitIntersectionType");
		return "";
	}
	visitIsset(node: Isset, parentSymbol: string) {
		console.log("visitIsset");
		return "";
	}
	visitLabel(node: Label, parentSymbol: string) {
		console.log("visitLabel");
		return "";
	}
	visitList(node: List, parentSymbol: string) {
		console.log("visitList");
		return "";
	}
	visitLiteral(node: Literal, parentSymbol: string) {
		console.log("visitLiteral");
		return "";
	}
	visitLocation(node: Location, parentSymbol: string) {
		console.log("visitLocation");
		return "";
	}
	visitLookup(node: Lookup, parentSymbol: string) {
		console.log("visitLookup");
		return "";
	}
	visitMagic(node: Magic, parentSymbol: string) {
		console.log("visitMagic");
		return "";
	}
	visitMatch(node: Match, parentSymbol: string) {
		console.log("visitMatch");
		return "";
	}
	visitMatchArm(node: MatchArm, parentSymbol: string) {
		console.log("visitMatchArm");
		return "";
	}

	getName(name: string | Identifier) {
		if (typeof name === "string") {
			return name;
		}
		return name.name;
	}

	visitMethod(node: Method, parentSymbol: string) {
		// TODO: 同名の場合引数で曖昧さ回避
		// TODO: public、static、
		// TODO: 引数の考慮
		const symbol = this._symbol.createMethod(
			parentSymbol,
			this.getName(node.name),
		);
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Method,
		});
		this.createOccurrenceMultipleLine(symbol, node, {
			symbolRoles: SymbolRole.Definition,
			syntaxKind: SyntaxKind.IdentifierFunctionDefinition,
		});
		return node.body.accept(this, symbol);
	}

	visitName(node: Name, parentSymbol: string) {
		console.log("visitName");
		return "";
	}
	visitNamedargument(node: namedargument, parentSymbol: string) {
		console.log("visitNamedargument");
		return "";
	}
	visitNamespace(node: Namespace, parentSymbol: string) {
		// TODO: ここでファイル名とnamespaceの対応を保持するリストへ入れる
		const symbol = this._symbol.createNamespace(node.name);
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		this.createOccurrenceMultipleLine(symbol, node);
		for (const child of node.children) {
			child.accept(this, parentSymbol);
		}
		return "";
	}
	visitNew(node: New, parentSymbol: string) {
		console.log("visitNew");
		return "";
	}
	visitNode(node: Node, parentSymbol: string) {
		console.log("visitNode");
		return "";
	}
	visitNoop(node: Noop, parentSymbol: string) {
		console.log("visitNoop");
		return "";
	}
	visitNowDoc(node: NowDoc, parentSymbol: string) {
		console.log("visitNowDoc");
		return "";
	}
	visitNullKeyword(node: NullKeyword, parentSymbol: string) {
		console.log("visitNullKeyword");
		return "null";
	}
	visitNullSafePropertyLookup(
		node: NullSafePropertyLookup,
		parentSymbol: string,
	) {
		console.log("visitNullSafePropertyLookup");
		return "";
	}
	visitPhpNumber(node: PhpNumber, parentSymbol: string) {
		console.log("visitPhpNumber");
		// numberかfloat
		// TypeScriptに渡っている時点で正確ではないかも？
		// node.valueはstringだが型定義でnumberになってしまっている
		if (/\./.test(String(node.value))) {
			return "float";
		}
		return "int";
	}
	visitOffsetLookup(node: OffsetLookup, parentSymbol: string) {
		console.log("visitOffsetLookup");
		return "";
	}
	visitOperation(node: Operation, parentSymbol: string) {
		console.log("visitOperation");
		return "";
	}
	visitParameter(node: Parameter, parentSymbol: string) {
		console.log("visitParameter");
		return "";
	}
	visitParentReference(node: ParentReference, parentSymbol: string) {
		console.log("visitParentReference");
		return "";
	}
	visitPosition(node: Position, parentSymbol: string) {
		console.log("visitPosition");
		return "";
	}
	visitPost(node: Post, parentSymbol: string) {
		console.log("visitPost");
		return "";
	}
	visitPre(node: Pre, parentSymbol: string) {
		console.log("visitPre");
		return "";
	}
	visitPrint(node: Print, parentSymbol: string) {
		console.log("visitPrint");
		return "";
	}
	visitProgram(node: Program, parentSymbol: string) {
		const symbol = this._symbol.filename;
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		this.createOccurrenceMultipleLine(symbol, node);
		for (const child of node.children) {
			child.accept(this, parentSymbol);
		}
		return "";
	}
	visitProperty(node: Property, parentSymbol: string) {
		console.log("visitProperty");
		return "";
	}
	visitPropertyLookup(node: PropertyLookup, parentSymbol: string) {
		console.log("visitPropertyLookup");
		return "";
	}
	visitPropertyStatement(node: PropertyStatement, parentSymbol: string) {
		console.log("visitPropertyStatement");
		return "";
	}
	visitReference(node: Reference, parentSymbol: string) {
		console.log("visitReference");
		return "";
	}
	visitRetIf(node: RetIf, parentSymbol: string) {
		console.log("visitRetIf");
		return "";
	}
	visitReturn(node: Return, parentSymbol: string) {
		return node.expr.accept(this, parentSymbol);
	}
	visitSelfReference(node: SelfReference, parentSymbol: string) {
		console.log("visitSelfReference");
		return "";
	}
	visitSilent(node: Silent, parentSymbol: string) {
		console.log("visitSilent");
		return "";
	}
	visitStatement(node: Statement, parentSymbol: string) {
		console.log("visitStatement");
		return "";
	}
	visitStatic(node: Static, parentSymbol: string) {
		console.log("visitStatic");
		return "";
	}
	visitStaticLookup(node: StaticLookup, parentSymbol: string) {
		console.log("visitStaticLookup");
		return "";
	}
	visitStaticReference(node: StaticReference, parentSymbol: string) {
		console.log("visitStaticReference");
		return "";
	}
	visitStaticVariable(node: StaticVariable, parentSymbol: string) {
		console.log("visitStaticVariable");
		return "";
	}
	visitPhpString(node: PhpString, parentSymbol: string) {
		console.log("visitPhpString");
		return "string";
	}
	visitSwitch(node: Switch, parentSymbol: string) {
		console.log("visitSwitch");
		return "";
	}
	visitThrow(node: Throw, parentSymbol: string) {
		console.log("visitThrow");
		return "";
	}
	visitTrait(node: Trait, parentSymbol: string) {
		console.log("visitTrait");
		return "";
	}
	visitTraitAlias(node: TraitAlias, parentSymbol: string) {
		console.log("visitTraitAlias");
		return "";
	}
	visitTraitPrecedence(node: TraitPrecedence, parentSymbol: string) {
		console.log("visitTraitPrecedence");
		return "";
	}
	visitTraitUse(node: TraitUse, parentSymbol: string) {
		console.log("visitTraitUse");
		return "";
	}
	visitTry(node: Try, parentSymbol: string) {
		console.log("visitTry");
		return "";
	}
	visitTypeReference(node: TypeReference, parentSymbol: string) {
		console.log("visitTypeReference");
		return "";
	}
	visitUnary(node: Unary, parentSymbol: string) {
		console.log("visitUnary");
		return "";
	}
	visitUnionType(node: UnionType, parentSymbol: string) {
		console.log("visitUnionType");
		return "";
	}
	visitUnset(node: Unset, parentSymbol: string) {
		console.log("visitUnset");
		return "";
	}
	visitUseGroup(node: UseGroup, parentSymbol: string) {
		for (const child of node.items) {
			child.accept(this, parentSymbol);
		}
		return "";
	}

	createUseItem(
		packageName: string,
		version: string,
		filename: string,
		node: UseItem,
	) {
		const itemSymbol = new SymbolCreator(packageName, version, filename);
		const symbol = itemSymbol.createNamespace(node.name);
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Module,
		});
		this.createOccurrenceSameLine(symbol, node, {
			symbolRoles: SymbolRole.Import,
			syntaxKind: SyntaxKind.IdentifierNamespace,
		});
		// TODO: ここで中身をvisitしたい
		return "";
	}

	visitUseItem(node: UseItem, parentSymbol: string) {
		if (node.name.startsWith("App\\")) {
			const filepath = node.name.replace(/^App/, "app").replace(/\\/g, "/");
			const src = `${filepath}.php`;
			this.createUseItem(
				this._thisPackageName,
				this._thisPackageVersion,
				src,
				node,
			);
		} else {
			const packageInfo = this._packageDict[node.name];
			if (packageInfo) {
				const packageName = packageInfo.name;
				const version = packageInfo.version;
				const src = packageInfo.src;
				this.createUseItem(packageName, version, src, node);
			} else {
				// TODO エラー
			}
		}
		return "";
	}
	visitVariable(node: Variable, parentSymbol: string) {
		if (typeof node.name !== "string") {
			return;
		}
		const symbol = this._symbol.createTerm(parentSymbol, node.name);
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Variable,
		});
		this.createOccurrenceSameLine(symbol, node, {
			symbolRoles: SymbolRole.Definition,
			// TODO: IdentifierLocalなどで分岐
			syntaxKind: SyntaxKind.Identifier,
		});
		return "";
	}
	visitVariadic(node: Variadic, parentSymbol: string) {
		console.log("visitVariadic");
		return "";
	}
	visitVariadicPlaceholder(node: VariadicPlaceholder, parentSymbol: string) {
		console.log("visitVariadicPlaceholder");
		return "";
	}
	visitWhile(node: While, parentSymbol: string) {
		console.log("visitWhile");
		return "";
	}
	visitYield(node: Yield, parentSymbol: string) {
		console.log("visitYield");
		return "";
	}
	visitYieldFrom(node: YieldFrom, parentSymbol: string) {
		console.log("visitYieldFrom");
		return "";
	}
}

// example
// const visitor = new Visitor();
// const nodes = foo.getNodes();
// for (const node of nodes) {
//   node.accept(visitor)
// }
