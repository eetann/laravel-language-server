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
import { ScipSymbol } from "../../../domain/model/Symbol";

export class Visitor implements AbstractVisitor {
	private _document: Document;
	private _symbol: ScipSymbol;
	constructor(filename: string) {
		this._document = create(DocumentSchema, {
			language: "php",
			relativePath: filename,
		});
		this._symbol = new ScipSymbol(filename);
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

	visitPhpArray(node: PhpArray): void {
		console.log("visitPhpArray");
	}
	visitArrowFunc(node: ArrowFunc): void {
		console.log("visitArrowFunc");
	}
	visitAssign(node: Assign): void {
		console.log("visitAssign");
	}
	visitAssignRef(node: AssignRef): void {
		console.log("visitAssignRef");
	}
	visitAttrGroup(node: AttrGroup): void {
		console.log("visitAttrGroup");
	}
	visitAttribute(node: Attribute): void {
		console.log("visitAttribute");
	}
	visitBin(node: Bin): void {
		console.log("visitBin");
	}
	visitBlock(node: Block): void {
		console.log("visitBlock");
	}
	visitPhpBoolean(node: PhpBoolean): void {
		console.log("visitPhpBoolean");
	}
	visitBreak(node: Break): void {
		console.log("visitBreak");
	}
	visitByRef(node: ByRef): void {
		console.log("visitByRef");
	}
	visitCall(node: Call): void {
		console.log("visitCall");
	}
	visitCase(node: Case): void {
		console.log("visitCase");
	}
	visitCast(node: Cast): void {
		console.log("visitCast");
	}
	visitCatch(node: Catch): void {
		console.log("visitCatch");
	}
	visitClass(node: Class): void {
		console.log("visitClass");
		let symbol = "";
		if (typeof node.name === "string") {
			symbol = node.name;
		} else {
			// visitIdentifier
			node.name.accept(this);
			symbol = this._symbol.createType(node.name.name);
		}
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Class,
		});
		this.createOccurrenceMultipleLine(symbol, node, {
			symbolRoles: SymbolRole.Definition,
			syntaxKind: SyntaxKind.IdentifierType,
		});
		// TODO: extendsはどう書くか？
	}
	visitClassConstant(node: ClassConstant): void {
		console.log("visitClassConstant");
	}
	visitClone(node: Clone): void {
		console.log("visitClone");
	}
	visitClosure(node: Closure): void {
		console.log("visitClosure");
	}
	visitComment(node: Comment): void {
		console.log("visitComment");
	}
	visitCommentBlock(node: CommentBlock): void {
		console.log("visitCommentBlock");
	}
	visitCommentLine(node: CommentLine): void {
		console.log("visitCommentLine");
	}
	visitConstant(node: Constant): void {
		console.log("visitConstant");
	}
	visitConstantStatement(node: ConstantStatement): void {
		console.log("visitConstantStatement");
	}
	visitContinue(node: Continue): void {
		console.log("visitContinue");
	}
	visitDeclaration(node: Declaration): void {
		console.log("visitDeclaration");
	}
	visitDeclare(node: Declare): void {
		console.log("visitDeclare");
	}
	visitDeclareDirective(node: DeclareDirective): void {
		console.log("visitDeclareDirective");
	}
	visitDo(node: Do): void {
		console.log("visitDo");
	}
	visitEcho(node: Echo): void {
		console.log("visitEcho");
	}
	visitEmpty(node: Empty): void {
		console.log("visitEmpty");
	}
	visitEncapsed(node: Encapsed): void {
		console.log("visitEncapsed");
	}
	visitEncapsedPart(node: EncapsedPart): void {
		console.log("visitEncapsedPart");
	}
	visitEntry(node: Entry): void {
		console.log("visitEntry");
	}
	visitEnum(node: Enum): void {
		console.log("visitEnum");
	}
	visitEnumCase(node: EnumCase): void {
		console.log("visitEnumCase");
	}
	visitPhpError(node: PhpError): void {
		console.log("visitPhpError");
	}
	visitEval(node: Eval): void {
		console.log("visitEval");
	}
	visitExit(node: Exit): void {
		console.log("visitExit");
	}
	visitExpression(node: Expression): void {
		console.log("visitExpression");
	}
	visitExpressionStatement(node: ExpressionStatement): void {
		console.log("visitExpressionStatement");
	}
	visitFor(node: For): void {
		console.log("visitFor");
	}
	visitForeach(node: Foreach): void {
		console.log("visitForeach");
	}
	visitPhpFunction(node: PhpFunction): void {
		console.log("visitPhpFunction");
	}
	visitGlobal(node: Global): void {
		console.log("visitGlobal");
	}
	visitGoto(node: Goto): void {
		console.log("visitGoto");
	}
	visitHalt(node: Halt): void {
		console.log("visitHalt");
	}
	visitIdentifier(node: Identifier): void {
		console.log("visitIdentifier");
	}
	visitIf(node: If): void {
		console.log("visitIf");
	}
	visitInclude(node: Include): void {
		console.log("visitInclude");
	}
	visitInline(node: Inline): void {
		console.log("visitInline");
	}
	visitInterface(node: Interface): void {
		console.log("visitInterface");
	}
	visitIntersectionType(node: IntersectionType): void {
		console.log("visitIntersectionType");
	}
	visitIsset(node: Isset): void {
		console.log("visitIsset");
	}
	visitLabel(node: Label): void {
		console.log("visitLabel");
	}
	visitList(node: List): void {
		console.log("visitList");
	}
	visitLiteral(node: Literal): void {
		console.log("visitLiteral");
	}
	visitLocation(node: Location): void {
		console.log("visitLocation");
	}
	visitLookup(node: Lookup): void {
		console.log("visitLookup");
	}
	visitMagic(node: Magic): void {
		console.log("visitMagic");
	}
	visitMatch(node: Match): void {
		console.log("visitMatch");
	}
	visitMatchArm(node: MatchArm): void {
		console.log("visitMatchArm");
	}
	visitMethod(node: Method): void {
		console.log("visitMethod");
	}
	visitName(node: Name): void {
		console.log("visitName");
	}
	visitNamedargument(node: namedargument): void {
		console.log("visitNamedargument");
	}
	visitNamespace(node: Namespace): void {
		console.log("visitNamespace");
		const symbol = this._symbol.createNamespace(node.name);
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		this.createOccurrenceMultipleLine(symbol, node);
		for (const child of node.children) {
			child.accept(this);
		}
	}
	visitNew(node: New): void {
		console.log("visitNew");
	}
	visitNode(node: Node): void {
		console.log("visitNode");
	}
	visitNoop(node: Noop): void {
		console.log("visitNoop");
	}
	visitNowDoc(node: NowDoc): void {
		console.log("visitNowDoc");
	}
	visitNullKeyword(node: NullKeyword): void {
		console.log("visitNullKeyword");
	}
	visitNullSafePropertyLookup(node: NullSafePropertyLookup): void {
		console.log("visitNullSafePropertyLookup");
	}
	visitPhpNumber(node: PhpNumber): void {
		console.log("visitPhpNumber");
	}
	visitOffsetLookup(node: OffsetLookup): void {
		console.log("visitOffsetLookup");
	}
	visitOperation(node: Operation): void {
		console.log("visitOperation");
	}
	visitParameter(node: Parameter): void {
		console.log("visitParameter");
	}
	visitParentReference(node: ParentReference): void {
		console.log("visitParentReference");
	}
	visitPosition(node: Position): void {
		console.log("visitPosition");
	}
	visitPost(node: Post): void {
		console.log("visitPost");
	}
	visitPre(node: Pre): void {
		console.log("visitPre");
	}
	visitPrint(node: Print): void {
		console.log("visitPrint");
	}
	visitProgram(node: Program): void {
		console.log("visitProgram");
		const symbol = this._symbol.filename;
		console.log(symbol);
		this.createSymbol({
			symbol,
			kind: SymbolInformation_Kind.Namespace,
		});
		this.createOccurrenceMultipleLine(symbol, node);
		for (const child of node.children) {
			child.accept(this);
		}
	}
	visitProperty(node: Property): void {
		console.log("visitProperty");
	}
	visitPropertyLookup(node: PropertyLookup): void {
		console.log("visitPropertyLookup");
	}
	visitPropertyStatement(node: PropertyStatement): void {
		console.log("visitPropertyStatement");
	}
	visitReference(node: Reference): void {
		console.log("visitReference");
	}
	visitRetIf(node: RetIf): void {
		console.log("visitRetIf");
	}
	visitReturn(node: Return): void {
		console.log("visitReturn");
	}
	visitSelfReference(node: SelfReference): void {
		console.log("visitSelfReference");
	}
	visitSilent(node: Silent): void {
		console.log("visitSilent");
	}
	visitStatement(node: Statement): void {
		console.log("visitStatement");
	}
	visitStatic(node: Static): void {
		console.log("visitStatic");
	}
	visitStaticLookup(node: StaticLookup): void {
		console.log("visitStaticLookup");
	}
	visitStaticReference(node: StaticReference): void {
		console.log("visitStaticReference");
	}
	visitStaticVariable(node: StaticVariable): void {
		console.log("visitStaticVariable");
	}
	visitPhpString(node: PhpString): void {
		console.log("visitPhpString");
	}
	visitSwitch(node: Switch): void {
		console.log("visitSwitch");
	}
	visitThrow(node: Throw): void {
		console.log("visitThrow");
	}
	visitTrait(node: Trait): void {
		console.log("visitTrait");
	}
	visitTraitAlias(node: TraitAlias): void {
		console.log("visitTraitAlias");
	}
	visitTraitPrecedence(node: TraitPrecedence): void {
		console.log("visitTraitPrecedence");
	}
	visitTraitUse(node: TraitUse): void {
		console.log("visitTraitUse");
	}
	visitTry(node: Try): void {
		console.log("visitTry");
	}
	visitTypeReference(node: TypeReference): void {
		console.log("visitTypeReference");
	}
	visitUnary(node: Unary): void {
		console.log("visitUnary");
	}
	visitUnionType(node: UnionType): void {
		console.log("visitUnionType");
	}
	visitUnset(node: Unset): void {
		console.log("visitUnset");
	}
	visitUseGroup(node: UseGroup): void {
		console.log("visitUseGroup");
		for (const child of node.items) {
			child.accept(this);
		}
	}
	visitUseItem(node: UseItem): void {
		console.log("visitUseItem");
		// TODO: useの後のキーワードとファイルの対応をどうやって知るか
		const filename = "TODO: ";
		const packageName = "TODO: ";
		const version = "0.0.1";
		const itemSymbol = new ScipSymbol(filename, packageName, version);
		// TODO: ここでvisitもやる？
		// const symbol = itemSymbol.createNamespace(node.name);
		// console.log(symbol);
		// this.createSymbol({
		// 	symbol,
		// 	kind: SymbolInformation_Kind.Module,
		// });
		// this.createOccurrenceSameLine(symbol, node, {
		// 	symbolRoles: SymbolRole.Import,
		// 	syntaxKind: SyntaxKind.IdentifierNamespace,
		// });
	}
	visitVariable(node: Variable): void {
		console.log("visitVariable");
	}
	visitVariadic(node: Variadic): void {
		console.log("visitVariadic");
	}
	visitVariadicPlaceholder(node: VariadicPlaceholder): void {
		console.log("visitVariadicPlaceholder");
	}
	visitWhile(node: While): void {
		console.log("visitWhile");
	}
	visitYield(node: Yield): void {
		console.log("visitYield");
	}
	visitYieldFrom(node: YieldFrom): void {
		console.log("visitYieldFrom");
	}
}

// example
// const visitor = new Visitor();
// const nodes = foo.getNodes();
// for (const node of nodes) {
//   node.accept(visitor)
// }
