import { NodeStrategy } from "@/domain/model/PhpNode/NodeStrategy";
import { type Document, DocumentSchema } from "@/gen/scip_pb";
import { create } from "@bufbuild/protobuf";
import type PhpArray from "php-parser/src/ast/array.js";
import type ArrowFunc from "php-parser/src/ast/arrowfunc.js";
import type Assign from "php-parser/src/ast/assign.js";
import type AssignRef from "php-parser/src/ast/assignref.js";
import type AttrGroup from "php-parser/src/ast/attrgroup.js";
import type Attribute from "php-parser/src/ast/attribute.js";
import type Bin from "php-parser/src/ast/bin.js";
import type Block from "php-parser/src/ast/block.js";
import type PhpBoolean from "php-parser/src/ast/boolean.js";
import type Break from "php-parser/src/ast/break.js";
import type ByRef from "php-parser/src/ast/byref.js";
import type Call from "php-parser/src/ast/call.js";
import type Case from "php-parser/src/ast/case.js";
import type Cast from "php-parser/src/ast/cast.js";
import type Catch from "php-parser/src/ast/catch.js";
import type Class from "php-parser/src/ast/class.js";
import type ClassConstant from "php-parser/src/ast/classconstant.js";
import type Clone from "php-parser/src/ast/clone.js";
import type Closure from "php-parser/src/ast/closure.js";
import type Comment from "php-parser/src/ast/comment.js";
import type CommentBlock from "php-parser/src/ast/commentblock.js";
import type CommentLine from "php-parser/src/ast/commentline.js";
import type Constant from "php-parser/src/ast/constant.js";
import type ConstantStatement from "php-parser/src/ast/constantstatement.js";
import type Continue from "php-parser/src/ast/continue.js";
import type Declaration from "php-parser/src/ast/declaration.js";
import type Declare from "php-parser/src/ast/declare.js";
import type DeclareDirective from "php-parser/src/ast/declaredirective.js";
import type Do from "php-parser/src/ast/do.js";
import type Echo from "php-parser/src/ast/echo.js";
import type Empty from "php-parser/src/ast/empty.js";
import type Encapsed from "php-parser/src/ast/encapsed.js";
import type EncapsedPart from "php-parser/src/ast/encapsedpart.js";
import type Entry from "php-parser/src/ast/entry.js";
import type Enum from "php-parser/src/ast/enum.js";
import type EnumCase from "php-parser/src/ast/enumcase.js";
import type PhpError from "php-parser/src/ast/error.js";
import type Eval from "php-parser/src/ast/eval.js";
import type Exit from "php-parser/src/ast/exit.js";
import type Expression from "php-parser/src/ast/expression.js";
import type ExpressionStatement from "php-parser/src/ast/expressionstatement.js";
import type For from "php-parser/src/ast/for.js";
import type Foreach from "php-parser/src/ast/foreach.js";
import type PhpFunction from "php-parser/src/ast/function.js";
import type Global from "php-parser/src/ast/global.js";
import type Goto from "php-parser/src/ast/goto.js";
import type Halt from "php-parser/src/ast/halt.js";
import type Identifier from "php-parser/src/ast/identifier.js";
import type If from "php-parser/src/ast/if.js";
import type Include from "php-parser/src/ast/include.js";
import type Inline from "php-parser/src/ast/inline.js";
import type Interface from "php-parser/src/ast/interface.js";
import type IntersectionType from "php-parser/src/ast/intersectiontype.js";
import type Isset from "php-parser/src/ast/isset.js";
import type Label from "php-parser/src/ast/label.js";
import type List from "php-parser/src/ast/list.js";
import type Literal from "php-parser/src/ast/literal.js";
import type Location from "php-parser/src/ast/location.js";
import type Lookup from "php-parser/src/ast/lookup.js";
import type Magic from "php-parser/src/ast/magic.js";
import type Match from "php-parser/src/ast/match.js";
import type MatchArm from "php-parser/src/ast/matcharm.js";
import type Method from "php-parser/src/ast/method.js";
import type Name from "php-parser/src/ast/name.js";
import type namedargument from "php-parser/src/ast/namedargument.js";
import type Namespace from "php-parser/src/ast/namespace.js";
import type New from "php-parser/src/ast/new.js";
import type Node from "php-parser/src/ast/node.js";
import type Noop from "php-parser/src/ast/noop.js";
import type NowDoc from "php-parser/src/ast/nowdoc.js";
import type NullKeyword from "php-parser/src/ast/nullkeyword.js";
import type NullSafePropertyLookup from "php-parser/src/ast/nullsafepropertylookup.js";
import type PhpNumber from "php-parser/src/ast/number.js";
import type OffsetLookup from "php-parser/src/ast/offsetlookup.js";
import type Operation from "php-parser/src/ast/operation.js";
import type Parameter from "php-parser/src/ast/parameter.js";
import type ParentReference from "php-parser/src/ast/parentreference.js";
import type Position from "php-parser/src/ast/position.js";
import type Post from "php-parser/src/ast/post.js";
import type Pre from "php-parser/src/ast/pre.js";
import type Print from "php-parser/src/ast/print.js";
import type Program from "php-parser/src/ast/program.js";
import type Property from "php-parser/src/ast/property.js";
import type PropertyLookup from "php-parser/src/ast/propertylookup.js";
import type PropertyStatement from "php-parser/src/ast/propertystatement.js";
import type Reference from "php-parser/src/ast/reference.js";
import type RetIf from "php-parser/src/ast/retif.js";
import type Return from "php-parser/src/ast/return.js";
import type SelfReference from "php-parser/src/ast/selfreference.js";
import type Silent from "php-parser/src/ast/silent.js";
import type Statement from "php-parser/src/ast/statement.js";
import type Static from "php-parser/src/ast/static.js";
import type StaticLookup from "php-parser/src/ast/staticlookup.js";
import type StaticReference from "php-parser/src/ast/staticreference.js";
import type StaticVariable from "php-parser/src/ast/staticvariable.js";
import type PhpString from "php-parser/src/ast/string.js";
import type Switch from "php-parser/src/ast/switch.js";
import type Throw from "php-parser/src/ast/throw.js";
import type Trait from "php-parser/src/ast/trait.js";
import type TraitAlias from "php-parser/src/ast/traitalias.js";
import type TraitPrecedence from "php-parser/src/ast/traitprecedence.js";
import type TraitUse from "php-parser/src/ast/traituse.js";
import type Try from "php-parser/src/ast/try.js";
import type TypeReference from "php-parser/src/ast/typereference.js";
import type Unary from "php-parser/src/ast/unary.js";
import type UnionType from "php-parser/src/ast/uniontype.js";
import type Unset from "php-parser/src/ast/unset.js";
import type UseGroup from "php-parser/src/ast/usegroup.js";
import type UseItem from "php-parser/src/ast/useitem.js";
import type Variable from "php-parser/src/ast/variable.js";
import type Variadic from "php-parser/src/ast/variadic.js";
import type VariadicPlaceholder from "php-parser/src/ast/variadicplaceholder.js";
import type While from "php-parser/src/ast/while.js";
import type Yield from "php-parser/src/ast/yield.js";
import type YieldFrom from "php-parser/src/ast/yieldfrom.js";

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

export function executeIndexStrategy(rootNode: Node) {
	const parentSymbol = "";
	const strategy = new IndexStrategy("test.php");
	traverse(
		rootNode,
		parentSymbol,
		strategy.getChildren,
		strategy.onEnter,
		strategy.onLeave,
	);
	return strategy.document;
}

export class PhpArrayStrategy extends NodeStrategy {
	getChildren(node: PhpArray) {
		return node.items;
	}
}
export class ArrowFuncStrategy extends NodeStrategy {
	getChildren(node: ArrowFunc) {
		return [...node.arguments, node.body];
	}
}
export class AssignStrategy extends NodeStrategy {
	getChildren(node: Assign) {
		return [node.left, node.right];
	}
}
export class AssignRefStrategy extends NodeStrategy {
	getChildren(node: AssignRef) {
		return [node.left, node.right];
	}
}
export class AttrGroupStrategy extends NodeStrategy {
	getChildren(node: AttrGroup) {
		return node.attrs;
	}
}
export class AttributeStrategy extends NodeStrategy {
	getChildren(node: Attribute) {
		return node.args;
	}
}
export class BinStrategy extends NodeStrategy {
	getChildren(node: Bin) {
		return [node.left, node.right];
	}
}
export class BlockStrategy extends NodeStrategy {
	getChildren(node: Block) {
		return node.children;
	}
}
export class PhpBooleanStrategy extends NodeStrategy {
	getChildren(node: PhpBoolean) {
		return [];
	}
}
export class BreakStrategy extends NodeStrategy {
	getChildren(node: Break) {
		return [];
	}
}
// ByRef
export class CallStrategy extends NodeStrategy {
	getChildren(node: Call) {
		return [node.what, ...node.arguments];
	}
}
// Call.prototype.createSymbolInformations = function () {
// 	return [
// 		createSymbol({
// 			symbol: node.symbol(),
// 			kind: SymbolInformation_Kind.Function,
// 		}),
// 	];
// };
// Call.prototype.createOccurrences = function () {
// 	return [
// 		createOccurrenceMultipleLine(node.symbol(), node, {
// 			syntaxKind: SyntaxKind.IdentifierFunction,
// 		}),
// 	];
// };
export class CaseStrategy extends NodeStrategy {
	getChildren(node: Case) {
		const children = [];
		if (node.test) {
			children.push(node.test);
		}
		children.push(node.body);
		return children;
	}
}
export class CastStrategy extends NodeStrategy {
	getChildren(node: Cast) {
		return [node.expr];
	}
}
export class CatchStrategy extends NodeStrategy {
	getChildren(node: Catch) {
		// TODO: もっと複雑かも？
		return [...node.what, node.variable, node.body];
	}
}
export class ClassStrategy extends NodeStrategy {
	getChildren(node: Class) {
		// TODO: extends, implementsも？
		return [...node.body, ...node.attrGroups];
	}
}
export class ClassConstantStrategy extends NodeStrategy {
	getChildren(node: ClassConstant) {
		return [...node.constants, ...node.attrGroups];
	}
}
export class CloneStrategy extends NodeStrategy {
	getChildren(node: Clone) {
		return [node.what];
	}
}
export class ClosureStrategy extends NodeStrategy {
	getChildren(node: Closure) {
		return [...node.arguments, node.body];
	}
}
// Comment
// CommentBlock
// CommentLine
export class ConstantStrategy extends NodeStrategy {
	getChildren(node: Constant) {
		return [node.value];
	}
}
// ConstantStatement
export class ContinueStrategy extends NodeStrategy {
	getChildren(node: Continue) {
		return [];
	}
}
// Declaration
export class DeclareStrategy extends NodeStrategy {
	getChildren(node: Declare) {
		return node.directives;
	}
}
export class DeclareDirectiveStrategy extends NodeStrategy {
	getChildren(node: DeclareDirective) {
		return [node.value];
	}
}
export class DoStrategy extends NodeStrategy {
	getChildren(node: Do) {
		return [node.test, node.body];
	}
}
export class EchoStrategy extends NodeStrategy {
	getChildren(node: Echo) {
		return node.expressions;
	}
}
export class EmptyStrategy extends NodeStrategy {
	getChildren(node: Empty) {
		return [node.expression];
	}
}
export class EncapsedStrategy extends NodeStrategy {
	getChildren(node: Encapsed) {
		return node.value;
	}
}
export class EncapsedPartStrategy extends NodeStrategy {
	getChildren(node: EncapsedPart) {
		return [node.expression];
	}
}
export class EntryStrategy extends NodeStrategy {
	getChildren(node: Entry) {
		return [node.value];
	}
}
export class EnumStrategy extends NodeStrategy {
	getChildren(node: Enum) {
		return [...node.body, ...node.attrGroups];
	}
}
export class EnumCaseStrategy extends NodeStrategy {
	getChildren(node: EnumCase) {
		return [];
	}
}
// PhpError
export class EvalStrategy extends NodeStrategy {
	getChildren(node: Eval) {
		return [node.source];
	}
}
export class ExitStrategy extends NodeStrategy {
	getChildren(node: Exit) {
		return [node.expression];
	}
}
// Expression
export class ExpressionStatementStrategy extends NodeStrategy {
	getChildren(node: ExpressionStatement) {
		return [node.expression];
	}
}
export class ForStrategy extends NodeStrategy {
	getChildren(node: For) {
		return [...node.init, ...node.test, ...node.increment, node.body];
	}
}
export class ForeachStrategy extends NodeStrategy {
	getChildren(node: Foreach) {
		return [node.source, node.value, node.body];
	}
}
export class PhpFunctionStrategy extends NodeStrategy {
	getChildren(node: PhpFunction) {
		return [...node.arguments, node.body, ...node.attrGroups];
	}
}
export class GlobalStrategy extends NodeStrategy {
	getChildren(node: Global) {
		return node.items;
	}
}
export class GotoStrategy extends NodeStrategy {
	getChildren(node: Goto) {
		return [];
	}
}
export class HaltStrategy extends NodeStrategy {
	getChildren(node: Halt) {
		return [];
	}
}
export class IdentifierStrategy extends NodeStrategy {
	getChildren(node: Identifier) {
		return [];
	}
}
export class IfStrategy extends NodeStrategy {
	getChildren(node: If) {
		return [node.test, node.body];
	}
}
export class IncludeStrategy extends NodeStrategy {
	getChildren(node: Include) {
		return [node.target];
	}
}
// Inline
export class InterfaceStrategy extends NodeStrategy {
	getChildren(node: Interface) {
		return [...node.body, ...node.attrGroups];
	}
}
// IntersectionType
export class IssetStrategy extends NodeStrategy {
	getChildren(node: Isset) {
		return node.variables;
	}
}
export class LabelStrategy extends NodeStrategy {
	getChildren(node: Label) {
		return [];
	}
}
export class ListStrategy extends NodeStrategy {
	getChildren(node: List) {
		return node.items;
	}
}
// Literal
// Location
// Lookup
// Magic
export class MatchStrategy extends NodeStrategy {
	getChildren(node: Match) {
		return [node.cond, ...node.arms];
	}
}
export class MatchArmStrategy extends NodeStrategy {
	getChildren(node: MatchArm) {
		const children = [];
		if (node.conds) {
			children.push(...node.conds);
		}
		children.push(node.body);
		return children;
	}
}
export class MethodStrategy extends NodeStrategy {
	getChildren(node: Method) {
		const children = [...node.arguments];
		if (node.body) {
			children.push(node.body);
		}
		return children;
	}
}
// Name
export class namedargumentStrategy extends NodeStrategy {
	getChildren(node: namedargument) {
		return [node.value];
	}
}
export class NamespaceStrategy extends NodeStrategy {
	getChildren(node: Namespace) {
		return node.children;
	}
}
export class NewStrategy extends NodeStrategy {
	getChildren(node: New) {
		return [node.what, ...node.arguments];
	}
}
export class NoopStrategy extends NodeStrategy {
	getChildren(node: Noop) {
		return [];
	}
}
export class NowDocStrategy extends NodeStrategy {
	getChildren(node: NowDoc) {
		return [];
	}
}
export class NullKeywordStrategy extends NodeStrategy {
	getChildren(node: NullKeyword) {
		return [];
	}
}
export class NullSafePropertyLookupStrategy extends NodeStrategy {
	getChildren(node: NullSafePropertyLookup) {
		return [node.what, node.offset];
	}
}
export class PhpNumberStrategy extends NodeStrategy {
	getChildren(node: PhpNumber) {
		return [];
	}
}
export class OffsetLookupStrategy extends NodeStrategy {
	getChildren(node: OffsetLookup) {
		return [node.what, node.offset];
	}
}
// Operation
export class ParameterStrategy extends NodeStrategy {
	getChildren(node: Parameter) {
		return node.attrGroups;
	}
}
export class ParentReferenceStrategy extends NodeStrategy {
	getChildren(node: ParentReference) {
		return [];
	}
}
// Position
// 後置インクリメント i++
export class PostStrategy extends NodeStrategy {
	getChildren(node: Post) {
		return [node.what];
	}
}
export class PreStrategy extends NodeStrategy {
	getChildren(node: Pre) {
		return [node.what];
	}
}
export class PrintStrategy extends NodeStrategy {
	getChildren(node: Print) {
		return [node.expression];
	}
}
export class ProgramStrategy extends NodeStrategy {
	getChildren(node: Program) {
		console.log("program getChildren");
		return node.children;
	}
}
export class PropertyStrategy extends NodeStrategy {
	getChildren(node: Property) {
		return node.attrGroups;
	}
}
export class PropertyLookupStrategy extends NodeStrategy {
	getChildren(node: PropertyLookup) {
		return [node.what];
	}
}
export class PropertyStatementStrategy extends NodeStrategy {
	getChildren(node: PropertyStatement) {
		return node.properties;
	}
}
export class ReferenceStrategy extends NodeStrategy {
	getChildren(node: Reference) {
		return [];
	}
}
export class RetIfStrategy extends NodeStrategy {
	getChildren(node: RetIf) {
		return [node.test, node.trueExpr, node.falseExpr];
	}
}
export class ReturnStrategy extends NodeStrategy {
	getChildren(node: Return) {
		return [node.expr];
	}
}
export class SelfReferenceStrategy extends NodeStrategy {
	getChildren(node: SelfReference) {
		return [];
	}
}
export class SilentStrategy extends NodeStrategy {
	getChildren(node: Silent) {
		return [node.expr];
	}
}
// Statement
export class StaticStrategy extends NodeStrategy {
	getChildren(node: Static) {
		return node.variables;
	}
}
export class StaticLookupStrategy extends NodeStrategy {
	getChildren(node: StaticLookup) {
		return [node.what, node.offset];
	}
}
// StaticReference
export class StaticVariableStrategy extends NodeStrategy {
	getChildren(node: StaticVariable) {
		return [node.variable, node.defaultValue];
	}
}
export class PhpStringStrategy extends NodeStrategy {
	getChildren(node: PhpString) {
		return [];
	}
}
export class SwitchStrategy extends NodeStrategy {
	getChildren(node: Switch) {
		return [node.test, node.body];
	}
}
export class ThrowStrategy extends NodeStrategy {
	getChildren(node: Throw) {
		return [node.what];
	}
}
export class TraitStrategy extends NodeStrategy {
	getChildren(node: Trait) {
		return node.body;
	}
}
export class TraitAliasStrategy extends NodeStrategy {
	getChildren(node: TraitAlias) {
		return [node.trait];
	}
}
// TraitPrecedence
export class TraitUseStrategy extends NodeStrategy {
	getChildren(node: TraitUse) {
		const children = [...node.traits];
		if (node.adaptations) {
			children.push(...node.adaptations);
		}
		return children;
	}
}
export class TryStrategy extends NodeStrategy {
	getChildren(node: Try) {
		return [node.body, ...node.catches];
	}
}
export class TypeReferenceStrategy extends NodeStrategy {
	getChildren(node: TypeReference) {
		return [];
	}
}
export class UnaryStrategy extends NodeStrategy {
	getChildren(node: Unary) {
		return [node.what];
	}
}
export class UnionTypeStrategy extends NodeStrategy {
	getChildren(node: UnionType) {
		return node.types;
	}
}
export class UnsetStrategy extends NodeStrategy {
	getChildren(node: Unset) {
		return node.variables;
	}
}
export class UseGroupStrategy extends NodeStrategy {
	getChildren(node: UseGroup) {
		return node.items;
	}
}
export class UseItemStrategy extends NodeStrategy {
	getChildren(node: UseItem) {
		return [];
	}
}
export class VariableStrategy extends NodeStrategy {
	getChildren(node: Variable) {
		return [];
	}
}
// Variadic
// VariadicPlaceholder
export class WhileStrategy extends NodeStrategy {
	getChildren(node: While) {
		return [node.test, node.body];
	}
}
export class YieldStrategy extends NodeStrategy {
	getChildren(node: Yield) {
		return [node.value];
	}
}
export class YieldFromStrategy extends NodeStrategy {
	getChildren(node: YieldFrom) {
		return [node.value];
	}
}
