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
import path from "node:path";
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
import { ScipSymbol } from "../../../domain/model/Symbol";
import type { PackageDict } from "../composerFetcher/ComposerFetcher";

export class Visitor implements AbstractVisitor {
	private _document: Document;
	private _symbol: ScipSymbol;
	private _thisPackageName: string;
	private _thisPackageVersion: string;
	private _packageDict: PackageDict;
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
		this._symbol = new ScipSymbol(
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

	visitPhpArray(node: PhpArray, parentSymbol: string): void {
		console.log("visitPhpArray");
	}
	visitArrowFunc(node: ArrowFunc, parentSymbol: string): void {
		console.log("visitArrowFunc");
	}
	visitAssign(node: Assign, parentSymbol: string): void {
		console.log("visitAssign");
	}
	visitAssignRef(node: AssignRef, parentSymbol: string): void {
		console.log("visitAssignRef");
	}
	visitAttrGroup(node: AttrGroup, parentSymbol: string): void {
		console.log("visitAttrGroup");
	}
	visitAttribute(node: Attribute, parentSymbol: string): void {
		console.log("visitAttribute");
	}
	visitBin(node: Bin, parentSymbol: string): void {
		console.log("visitBin");
	}
	visitBlock(node: Block, parentSymbol: string): void {
		console.log("visitBlock");
	}
	visitPhpBoolean(node: PhpBoolean, parentSymbol: string): void {
		console.log("visitPhpBoolean");
	}
	visitBreak(node: Break, parentSymbol: string): void {
		console.log("visitBreak");
	}
	visitByRef(node: ByRef, parentSymbol: string): void {
		console.log("visitByRef");
	}
	visitCall(node: Call, parentSymbol: string): void {
		console.log("visitCall");
	}
	visitCase(node: Case, parentSymbol: string): void {
		console.log("visitCase");
	}
	visitCast(node: Cast, parentSymbol: string): void {
		console.log("visitCast");
	}
	visitCatch(node: Catch, parentSymbol: string): void {
		console.log("visitCatch");
	}

	visitClass(node: Class, parentSymbol: string): void {
		console.log("visitClass");
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
			child.accept(this, parentSymbol);
		}
	}

	visitClassConstant(node: ClassConstant, parentSymbol: string): void {
		console.log("visitClassConstant");
	}
	visitClone(node: Clone, parentSymbol: string): void {
		console.log("visitClone");
	}
	visitClosure(node: Closure, parentSymbol: string): void {
		console.log("visitClosure");
	}
	visitComment(node: Comment, parentSymbol: string): void {
		console.log("visitComment");
	}
	visitCommentBlock(node: CommentBlock, parentSymbol: string): void {
		console.log("visitCommentBlock");
	}
	visitCommentLine(node: CommentLine, parentSymbol: string): void {
		console.log("visitCommentLine");
	}
	visitConstant(node: Constant, parentSymbol: string): void {
		console.log("visitConstant");
	}
	visitConstantStatement(node: ConstantStatement, parentSymbol: string): void {
		console.log("visitConstantStatement");
	}
	visitContinue(node: Continue, parentSymbol: string): void {
		console.log("visitContinue");
	}
	visitDeclaration(node: Declaration, parentSymbol: string): void {
		console.log("visitDeclaration");
	}
	visitDeclare(node: Declare, parentSymbol: string): void {
		console.log("visitDeclare");
	}
	visitDeclareDirective(node: DeclareDirective, parentSymbol: string): void {
		console.log("visitDeclareDirective");
	}
	visitDo(node: Do, parentSymbol: string): void {
		console.log("visitDo");
	}
	visitEcho(node: Echo, parentSymbol: string): void {
		console.log("visitEcho");
	}
	visitEmpty(node: Empty, parentSymbol: string): void {
		console.log("visitEmpty");
	}
	visitEncapsed(node: Encapsed, parentSymbol: string): void {
		console.log("visitEncapsed");
	}
	visitEncapsedPart(node: EncapsedPart, parentSymbol: string): void {
		console.log("visitEncapsedPart");
	}
	visitEntry(node: Entry, parentSymbol: string): void {
		console.log("visitEntry");
	}
	visitEnum(node: Enum, parentSymbol: string): void {
		console.log("visitEnum");
	}
	visitEnumCase(node: EnumCase, parentSymbol: string): void {
		console.log("visitEnumCase");
	}
	visitPhpError(node: PhpError, parentSymbol: string): void {
		console.log("visitPhpError");
	}
	visitEval(node: Eval, parentSymbol: string): void {
		console.log("visitEval");
	}
	visitExit(node: Exit, parentSymbol: string): void {
		console.log("visitExit");
	}
	visitExpression(node: Expression, parentSymbol: string): void {
		console.log("visitExpression");
	}
	visitExpressionStatement(
		node: ExpressionStatement,
		parentSymbol: string,
	): void {
		console.log("visitExpressionStatement");
	}
	visitFor(node: For, parentSymbol: string): void {
		console.log("visitFor");
	}
	visitForeach(node: Foreach, parentSymbol: string): void {
		console.log("visitForeach");
	}
	visitPhpFunction(node: PhpFunction, parentSymbol: string): void {
		console.log("visitPhpFunction");
	}
	visitGlobal(node: Global, parentSymbol: string): void {
		console.log("visitGlobal");
	}
	visitGoto(node: Goto, parentSymbol: string): void {
		console.log("visitGoto");
	}
	visitHalt(node: Halt, parentSymbol: string): void {
		console.log("visitHalt");
	}
	visitIdentifier(node: Identifier, parentSymbol: string): void {
		console.log("visitIdentifier");
		const symbol = this._symbol.createIdentifier(node.name);
		// this.createSymbol({symbol,
		//   kind: SymbolInformation_Kind.Class
		// })
	}
	visitIf(node: If, parentSymbol: string): void {
		console.log("visitIf");
	}
	visitInclude(node: Include, parentSymbol: string): void {
		console.log("visitInclude");
	}
	visitInline(node: Inline, parentSymbol: string): void {
		console.log("visitInline");
	}
	visitInterface(node: Interface, parentSymbol: string): void {
		console.log("visitInterface");
	}
	visitIntersectionType(node: IntersectionType, parentSymbol: string): void {
		console.log("visitIntersectionType");
	}
	visitIsset(node: Isset, parentSymbol: string): void {
		console.log("visitIsset");
	}
	visitLabel(node: Label, parentSymbol: string): void {
		console.log("visitLabel");
	}
	visitList(node: List, parentSymbol: string): void {
		console.log("visitList");
	}
	visitLiteral(node: Literal, parentSymbol: string): void {
		console.log("visitLiteral");
	}
	visitLocation(node: Location, parentSymbol: string): void {
		console.log("visitLocation");
	}
	visitLookup(node: Lookup, parentSymbol: string): void {
		console.log("visitLookup");
	}
	visitMagic(node: Magic, parentSymbol: string): void {
		console.log("visitMagic");
	}
	visitMatch(node: Match, parentSymbol: string): void {
		console.log("visitMatch");
	}
	visitMatchArm(node: MatchArm, parentSymbol: string): void {
		console.log("visitMatchArm");
	}

	getName(name: string | Identifier) {
		if (typeof name === "string") {
			return name;
		}
		return name.name;
	}

	visitMethod(node: Method, parentSymbol: string): void {
		console.log("visitMethod");
		// TODO: 同名の場合引数で曖昧さ回避
		// 親の名前はどこで保持する？
		//   thisで持たせるか、 acceptで全部渡す
		const symbol = this._symbol.createMethod(
			parentSymbol,
			this.getName(node.name),
		);
		// TODO: ここから
		// symbol
		// occurrence
		node.body.accept(this, parentSymbol);
	}

	visitName(node: Name, parentSymbol: string): void {
		console.log("visitName");
	}
	visitNamedargument(node: namedargument, parentSymbol: string): void {
		console.log("visitNamedargument");
	}
	visitNamespace(node: Namespace, parentSymbol: string): void {
		console.log("visitNamespace");
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
	}
	visitNew(node: New, parentSymbol: string): void {
		console.log("visitNew");
	}
	visitNode(node: Node, parentSymbol: string): void {
		console.log("visitNode");
	}
	visitNoop(node: Noop, parentSymbol: string): void {
		console.log("visitNoop");
	}
	visitNowDoc(node: NowDoc, parentSymbol: string): void {
		console.log("visitNowDoc");
	}
	visitNullKeyword(node: NullKeyword, parentSymbol: string): void {
		console.log("visitNullKeyword");
	}
	visitNullSafePropertyLookup(
		node: NullSafePropertyLookup,
		parentSymbol: string,
	): void {
		console.log("visitNullSafePropertyLookup");
	}
	visitPhpNumber(node: PhpNumber, parentSymbol: string): void {
		console.log("visitPhpNumber");
	}
	visitOffsetLookup(node: OffsetLookup, parentSymbol: string): void {
		console.log("visitOffsetLookup");
	}
	visitOperation(node: Operation, parentSymbol: string): void {
		console.log("visitOperation");
	}
	visitParameter(node: Parameter, parentSymbol: string): void {
		console.log("visitParameter");
	}
	visitParentReference(node: ParentReference, parentSymbol: string): void {
		console.log("visitParentReference");
	}
	visitPosition(node: Position, parentSymbol: string): void {
		console.log("visitPosition");
	}
	visitPost(node: Post, parentSymbol: string): void {
		console.log("visitPost");
	}
	visitPre(node: Pre, parentSymbol: string): void {
		console.log("visitPre");
	}
	visitPrint(node: Print, parentSymbol: string): void {
		console.log("visitPrint");
	}
	visitProgram(node: Program, parentSymbol: string): void {
		console.log("visitProgram");
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
	}
	visitProperty(node: Property, parentSymbol: string): void {
		console.log("visitProperty");
	}
	visitPropertyLookup(node: PropertyLookup, parentSymbol: string): void {
		console.log("visitPropertyLookup");
	}
	visitPropertyStatement(node: PropertyStatement, parentSymbol: string): void {
		console.log("visitPropertyStatement");
	}
	visitReference(node: Reference, parentSymbol: string): void {
		console.log("visitReference");
	}
	visitRetIf(node: RetIf, parentSymbol: string): void {
		console.log("visitRetIf");
	}
	visitReturn(node: Return, parentSymbol: string): void {
		console.log("visitReturn");
	}
	visitSelfReference(node: SelfReference, parentSymbol: string): void {
		console.log("visitSelfReference");
	}
	visitSilent(node: Silent, parentSymbol: string): void {
		console.log("visitSilent");
	}
	visitStatement(node: Statement, parentSymbol: string): void {
		console.log("visitStatement");
	}
	visitStatic(node: Static, parentSymbol: string): void {
		console.log("visitStatic");
	}
	visitStaticLookup(node: StaticLookup, parentSymbol: string): void {
		console.log("visitStaticLookup");
	}
	visitStaticReference(node: StaticReference, parentSymbol: string): void {
		console.log("visitStaticReference");
	}
	visitStaticVariable(node: StaticVariable, parentSymbol: string): void {
		console.log("visitStaticVariable");
	}
	visitPhpString(node: PhpString, parentSymbol: string): void {
		console.log("visitPhpString");
	}
	visitSwitch(node: Switch, parentSymbol: string): void {
		console.log("visitSwitch");
	}
	visitThrow(node: Throw, parentSymbol: string): void {
		console.log("visitThrow");
	}
	visitTrait(node: Trait, parentSymbol: string): void {
		console.log("visitTrait");
	}
	visitTraitAlias(node: TraitAlias, parentSymbol: string): void {
		console.log("visitTraitAlias");
	}
	visitTraitPrecedence(node: TraitPrecedence, parentSymbol: string): void {
		console.log("visitTraitPrecedence");
	}
	visitTraitUse(node: TraitUse, parentSymbol: string): void {
		console.log("visitTraitUse");
	}
	visitTry(node: Try, parentSymbol: string): void {
		console.log("visitTry");
	}
	visitTypeReference(node: TypeReference, parentSymbol: string): void {
		console.log("visitTypeReference");
	}
	visitUnary(node: Unary, parentSymbol: string): void {
		console.log("visitUnary");
	}
	visitUnionType(node: UnionType, parentSymbol: string): void {
		console.log("visitUnionType");
	}
	visitUnset(node: Unset, parentSymbol: string): void {
		console.log("visitUnset");
	}
	visitUseGroup(node: UseGroup, parentSymbol: string): void {
		console.log("visitUseGroup");
		for (const child of node.items) {
			child.accept(this, parentSymbol);
		}
	}

	readComposerFile(packageName: string, filename: string) {
		const dir = `vendor/${packageName}/${filename}`;
	}
	createUseItem(
		packageName: string,
		version: string,
		filename: string,
		node: UseItem,
	): void {
		const itemSymbol = new ScipSymbol(packageName, version, filename);
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
	}
	visitUseItem(node: UseItem, parentSymbol: string): void {
		console.log("visitUseItem");
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
	}
	visitVariable(node: Variable, parentSymbol: string): void {
		console.log("visitVariable");
	}
	visitVariadic(node: Variadic, parentSymbol: string): void {
		console.log("visitVariadic");
	}
	visitVariadicPlaceholder(
		node: VariadicPlaceholder,
		parentSymbol: string,
	): void {
		console.log("visitVariadicPlaceholder");
	}
	visitWhile(node: While, parentSymbol: string): void {
		console.log("visitWhile");
	}
	visitYield(node: Yield, parentSymbol: string): void {
		console.log("visitYield");
	}
	visitYieldFrom(node: YieldFrom, parentSymbol: string): void {
		console.log("visitYieldFrom");
	}
}

// example
// const visitor = new Visitor();
// const nodes = foo.getNodes();
// for (const node of nodes) {
//   node.accept(visitor)
// }
