// @ts-nocheck
import PhpArray from "php-parser/src/ast/array.js";
import ArrowFunc from "php-parser/src/ast/arrowfunc.js";
import Assign from "php-parser/src/ast/assign.js";
import AssignRef from "php-parser/src/ast/assignref.js";
import AttrGroup from "php-parser/src/ast/attrgroup.js";
import Attribute from "php-parser/src/ast/attribute.js";
import Bin from "php-parser/src/ast/bin.js";
import Block from "php-parser/src/ast/block.js";
import PhpBoolean from "php-parser/src/ast/boolean.js";
import Break from "php-parser/src/ast/break.js";
import ByRef from "php-parser/src/ast/byref.js";
import Call from "php-parser/src/ast/call.js";
import Case from "php-parser/src/ast/case.js";
import Cast from "php-parser/src/ast/cast.js";
import Catch from "php-parser/src/ast/catch.js";
import Class from "php-parser/src/ast/class.js";
import ClassConstant from "php-parser/src/ast/classconstant.js";
import Clone from "php-parser/src/ast/clone.js";
import Closure from "php-parser/src/ast/closure.js";
import Comment from "php-parser/src/ast/comment.js";
import CommentBlock from "php-parser/src/ast/commentblock.js";
import CommentLine from "php-parser/src/ast/commentline.js";
import Constant from "php-parser/src/ast/constant.js";
import ConstantStatement from "php-parser/src/ast/constantstatement.js";
import Continue from "php-parser/src/ast/continue.js";
import Declaration from "php-parser/src/ast/declaration.js";
import Declare from "php-parser/src/ast/declare.js";
import DeclareDirective from "php-parser/src/ast/declaredirective.js";
import Do from "php-parser/src/ast/do.js";
import Echo from "php-parser/src/ast/echo.js";
import Empty from "php-parser/src/ast/empty.js";
import Encapsed from "php-parser/src/ast/encapsed.js";
import EncapsedPart from "php-parser/src/ast/encapsedpart.js";
import Entry from "php-parser/src/ast/entry.js";
import Enum from "php-parser/src/ast/enum.js";
import EnumCase from "php-parser/src/ast/enumcase.js";
import PhpError from "php-parser/src/ast/error.js";
import Eval from "php-parser/src/ast/eval.js";
import Exit from "php-parser/src/ast/exit.js";
import Expression from "php-parser/src/ast/expression.js";
import ExpressionStatement from "php-parser/src/ast/expressionstatement.js";
import For from "php-parser/src/ast/for.js";
import Foreach from "php-parser/src/ast/foreach.js";
import PhpFunction from "php-parser/src/ast/function.js";
import Global from "php-parser/src/ast/global.js";
import Goto from "php-parser/src/ast/goto.js";
import Halt from "php-parser/src/ast/halt.js";
import Identifier from "php-parser/src/ast/identifier.js";
import If from "php-parser/src/ast/if.js";
import Include from "php-parser/src/ast/include.js";
import Inline from "php-parser/src/ast/inline.js";
import Interface from "php-parser/src/ast/interface.js";
import IntersectionType from "php-parser/src/ast/intersectiontype.js";
import Isset from "php-parser/src/ast/isset.js";
import Label from "php-parser/src/ast/label.js";
import List from "php-parser/src/ast/list.js";
import Literal from "php-parser/src/ast/literal.js";
import Location from "php-parser/src/ast/location.js";
import Lookup from "php-parser/src/ast/lookup.js";
import Magic from "php-parser/src/ast/magic.js";
import Match from "php-parser/src/ast/match.js";
import MatchArm from "php-parser/src/ast/matcharm.js";
import Method from "php-parser/src/ast/method.js";
import Name from "php-parser/src/ast/name.js";
import namedargument from "php-parser/src/ast/namedargument.js";
import Namespace from "php-parser/src/ast/namespace.js";
import New from "php-parser/src/ast/new.js";
import Node from "php-parser/src/ast/node.js";
import Noop from "php-parser/src/ast/noop.js";
import NowDoc from "php-parser/src/ast/nowdoc.js";
import NullKeyword from "php-parser/src/ast/nullkeyword.js";
import NullSafePropertyLookup from "php-parser/src/ast/nullsafepropertylookup.js";
import PhpNumber from "php-parser/src/ast/number.js";
import OffsetLookup from "php-parser/src/ast/offsetlookup.js";
import Operation from "php-parser/src/ast/operation.js";
import Parameter from "php-parser/src/ast/parameter.js";
import ParentReference from "php-parser/src/ast/parentreference.js";
import Position from "php-parser/src/ast/position.js";
import Post from "php-parser/src/ast/post.js";
import Pre from "php-parser/src/ast/pre.js";
import Print from "php-parser/src/ast/print.js";
import Program from "php-parser/src/ast/program.js";
import Property from "php-parser/src/ast/property.js";
import PropertyLookup from "php-parser/src/ast/propertylookup.js";
import PropertyStatement from "php-parser/src/ast/propertystatement.js";
import Reference from "php-parser/src/ast/reference.js";
import RetIf from "php-parser/src/ast/retif.js";
import Return from "php-parser/src/ast/return.js";
import SelfReference from "php-parser/src/ast/selfreference.js";
import Silent from "php-parser/src/ast/silent.js";
import Statement from "php-parser/src/ast/statement.js";
import Static from "php-parser/src/ast/static.js";
import StaticLookup from "php-parser/src/ast/staticlookup.js";
import StaticReference from "php-parser/src/ast/staticreference.js";
import StaticVariable from "php-parser/src/ast/staticvariable.js";
import PhpString from "php-parser/src/ast/string.js";
import Switch from "php-parser/src/ast/switch.js";
import Throw from "php-parser/src/ast/throw.js";
import Trait from "php-parser/src/ast/trait.js";
import TraitAlias from "php-parser/src/ast/traitalias.js";
import TraitPrecedence from "php-parser/src/ast/traitprecedence.js";
import TraitUse from "php-parser/src/ast/traituse.js";
import Try from "php-parser/src/ast/try.js";
import TypeReference from "php-parser/src/ast/typereference.js";
import Unary from "php-parser/src/ast/unary.js";
import UnionType from "php-parser/src/ast/uniontype.js";
import Unset from "php-parser/src/ast/unset.js";
import UseGroup from "php-parser/src/ast/usegroup.js";
import UseItem from "php-parser/src/ast/useitem.js";
import Variable from "php-parser/src/ast/variable.js";
import Variadic from "php-parser/src/ast/variadic.js";
import VariadicPlaceholder from "php-parser/src/ast/variadicplaceholder.js";
import While from "php-parser/src/ast/while.js";
import Yield from "php-parser/src/ast/yield.js";
import YieldFrom from "php-parser/src/ast/yieldfrom.js";

export interface AbstractVisitor {
	visitPhpArray(node: PhpArray, parentSymbol: string): string;
	visitArrowFunc(node: ArrowFunc, parentSymbol: string): string;
	visitAssign(node: Assign, parentSymbol: string): string;
	visitAssignRef(node: AssignRef, parentSymbol: string): string;
	visitAttrGroup(node: AttrGroup, parentSymbol: string): string;
	visitAttribute(node: Attribute, parentSymbol: string): string;
	visitBin(node: Bin, parentSymbol: string): string;
	visitBlock(node: Block, parentSymbol: string): string;
	visitPhpBoolean(node: PhpBoolean, parentSymbol: string): string;
	visitBreak(node: Break, parentSymbol: string): string;
	visitByRef(node: ByRef, parentSymbol: string): string;
	visitCall(node: Call, parentSymbol: string): string;
	visitCase(node: Case, parentSymbol: string): string;
	visitCast(node: Cast, parentSymbol: string): string;
	visitCatch(node: Catch, parentSymbol: string): string;
	visitClass(node: Class, parentSymbol: string): string;
	visitClassConstant(node: ClassConstant, parentSymbol: string): string;
	visitClone(node: Clone, parentSymbol: string): string;
	visitClosure(node: Closure, parentSymbol: string): string;
	visitComment(node: Comment, parentSymbol: string): string;
	visitCommentBlock(node: CommentBlock, parentSymbol: string): string;
	visitCommentLine(node: CommentLine, parentSymbol: string): string;
	visitConstant(node: Constant, parentSymbol: string): string;
	visitConstantStatement(node: ConstantStatement, parentSymbol: string): string;
	visitContinue(node: Continue, parentSymbol: string): string;
	visitDeclaration(node: Declaration, parentSymbol: string): string;
	visitDeclare(node: Declare, parentSymbol: string): string;
	visitDeclareDirective(node: DeclareDirective, parentSymbol: string): string;
	visitDo(node: Do, parentSymbol: string): string;
	visitEcho(node: Echo, parentSymbol: string): string;
	visitEmpty(node: Empty, parentSymbol: string): string;
	visitEncapsed(node: Encapsed, parentSymbol: string): string;
	visitEncapsedPart(node: EncapsedPart, parentSymbol: string): string;
	visitEntry(node: Entry, parentSymbol: string): string;
	visitEnum(node: Enum, parentSymbol: string): string;
	visitEnumCase(node: EnumCase, parentSymbol: string): string;
	visitPhpError(node: PhpError, parentSymbol: string): string;
	visitEval(node: Eval, parentSymbol: string): string;
	visitExit(node: Exit, parentSymbol: string): string;
	visitExpression(node: Expression, parentSymbol: string): string;
	visitExpressionStatement(
		node: ExpressionStatement,
		parentSymbol: string,
	): string;
	visitFor(node: For, parentSymbol: string): string;
	visitForeach(node: Foreach, parentSymbol: string): string;
	visitPhpFunction(node: PhpFunction, parentSymbol: string): string;
	visitGlobal(node: Global, parentSymbol: string): string;
	visitGoto(node: Goto, parentSymbol: string): string;
	visitHalt(node: Halt, parentSymbol: string): string;
	visitIdentifier(node: Identifier, parentSymbol: string): string;
	visitIf(node: If, parentSymbol: string): string;
	visitInclude(node: Include, parentSymbol: string): string;
	visitInline(node: Inline, parentSymbol: string): string;
	visitInterface(node: Interface, parentSymbol: string): string;
	visitIntersectionType(node: IntersectionType, parentSymbol: string): string;
	visitIsset(node: Isset, parentSymbol: string): string;
	visitLabel(node: Label, parentSymbol: string): string;
	visitList(node: List, parentSymbol: string): string;
	visitLiteral(node: Literal, parentSymbol: string): string;
	visitLocation(node: Location, parentSymbol: string): string;
	visitLookup(node: Lookup, parentSymbol: string): string;
	visitMagic(node: Magic, parentSymbol: string): string;
	visitMatch(node: Match, parentSymbol: string): string;
	visitMatchArm(node: MatchArm, parentSymbol: string): string;
	visitMethod(node: Method, parentSymbol: string): string;
	visitName(node: Name, parentSymbol: string): string;
	visitNamedargument(node: namedargument, parentSymbol: string): string;
	visitNamespace(node: Namespace, parentSymbol: string): string;
	visitNew(node: New, parentSymbol: string): string;
	visitNode(node: Node, parentSymbol: string): string;
	visitNoop(node: Noop, parentSymbol: string): string;
	visitNowDoc(node: NowDoc, parentSymbol: string): string;
	visitNullKeyword(node: NullKeyword, parentSymbol: string): string;
	visitNullSafePropertyLookup(
		node: NullSafePropertyLookup,
		parentSymbol: string,
	): string;
	visitPhpNumber(node: PhpNumber, parentSymbol: string): string;
	visitOffsetLookup(node: OffsetLookup, parentSymbol: string): string;
	visitOperation(node: Operation, parentSymbol: string): string;
	visitParameter(node: Parameter, parentSymbol: string): string;
	visitParentReference(node: ParentReference, parentSymbol: string): string;
	visitPosition(node: Position, parentSymbol: string): string;
	visitPost(node: Post, parentSymbol: string): string;
	visitPre(node: Pre, parentSymbol: string): string;
	visitPrint(node: Print, parentSymbol: string): string;
	visitProgram(node: Program, parentSymbol: string): string;
	visitProperty(node: Property, parentSymbol: string): string;
	visitPropertyLookup(node: PropertyLookup, parentSymbol: string): string;
	visitPropertyStatement(node: PropertyStatement, parentSymbol: string): string;
	visitReference(node: Reference, parentSymbol: string): string;
	visitRetIf(node: RetIf, parentSymbol: string): string;
	visitReturn(node: Return, parentSymbol: string): string;
	visitSelfReference(node: SelfReference, parentSymbol: string): string;
	visitSilent(node: Silent, parentSymbol: string): string;
	visitStatement(node: Statement, parentSymbol: string): string;
	visitStatic(node: Static, parentSymbol: string): string;
	visitStaticLookup(node: StaticLookup, parentSymbol: string): string;
	visitStaticReference(node: StaticReference, parentSymbol: string): string;
	visitStaticVariable(node: StaticVariable, parentSymbol: string): string;
	visitPhpString(node: PhpString, parentSymbol: string): string;
	visitSwitch(node: Switch, parentSymbol: string): string;
	visitThrow(node: Throw, parentSymbol: string): string;
	visitTrait(node: Trait, parentSymbol: string): string;
	visitTraitAlias(node: TraitAlias, parentSymbol: string): string;
	visitTraitPrecedence(node: TraitPrecedence, parentSymbol: string): string;
	visitTraitUse(node: TraitUse, parentSymbol: string): string;
	visitTry(node: Try, parentSymbol: string): string;
	visitTypeReference(node: TypeReference, parentSymbol: string): string;
	visitUnary(node: Unary, parentSymbol: string): string;
	visitUnionType(node: UnionType, parentSymbol: string): string;
	visitUnset(node: Unset, parentSymbol: string): string;
	visitUseGroup(node: UseGroup, parentSymbol: string): string;
	visitUseItem(node: UseItem, parentSymbol: string): string;
	visitVariable(node: Variable, parentSymbol: string): string;
	visitVariadic(node: Variadic, parentSymbol: string): string;
	visitVariadicPlaceholder(
		node: VariadicPlaceholder,
		parentSymbol: string,
	): string;
	visitWhile(node: While, parentSymbol: string): string;
	visitYield(node: Yield, parentSymbol: string): string;
	visitYieldFrom(node: YieldFrom, parentSymbol: string): string;
}

declare module "php-parser" {
	interface Node {
		accept(visitor: AbstractVisitor, parentSymbol: string): string;
	}
	interface UseGroup {
		// typo?
		items: UseItem[];
	}
}

PhpArray.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpArray(this, parentSymbol);
};
ArrowFunc.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitArrowFunc(this, parentSymbol);
};
Assign.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitAssign(this, parentSymbol);
};
AssignRef.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitAssignRef(this, parentSymbol);
};
AttrGroup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitAttrGroup(this, parentSymbol);
};
Attribute.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitAttribute(this, parentSymbol);
};
Bin.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitBin(this, parentSymbol);
};
Block.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitBlock(this, parentSymbol);
};
PhpBoolean.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpBoolean(this, parentSymbol);
};
Break.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitBreak(this, parentSymbol);
};
ByRef.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitByRef(this, parentSymbol);
};
Call.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCall(this, parentSymbol);
};
Case.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCase(this, parentSymbol);
};
Cast.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCast(this, parentSymbol);
};
Catch.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCatch(this, parentSymbol);
};
Class.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitClass(this, parentSymbol);
};
ClassConstant.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitClassConstant(this, parentSymbol);
};
Clone.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitClone(this, parentSymbol);
};
Closure.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitClosure(this, parentSymbol);
};
Comment.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitComment(this, parentSymbol);
};
CommentBlock.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCommentBlock(this, parentSymbol);
};
CommentLine.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitCommentLine(this, parentSymbol);
};
Constant.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitConstant(this, parentSymbol);
};
ConstantStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitConstantStatement(this, parentSymbol);
};
Continue.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitContinue(this, parentSymbol);
};
Declaration.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitDeclaration(this, parentSymbol);
};
Declare.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitDeclare(this, parentSymbol);
};
DeclareDirective.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitDeclareDirective(this, parentSymbol);
};
Do.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitDo(this, parentSymbol);
};
Echo.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEcho(this, parentSymbol);
};
Empty.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEmpty(this, parentSymbol);
};
Encapsed.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEncapsed(this, parentSymbol);
};
EncapsedPart.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEncapsedPart(this, parentSymbol);
};
Entry.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEntry(this, parentSymbol);
};
Enum.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEnum(this, parentSymbol);
};
EnumCase.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEnumCase(this, parentSymbol);
};
PhpError.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpError(this, parentSymbol);
};
Eval.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitEval(this, parentSymbol);
};
Exit.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitExit(this, parentSymbol);
};
Expression.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitExpression(this, parentSymbol);
};
ExpressionStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitExpressionStatement(this, parentSymbol);
};
For.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitFor(this, parentSymbol);
};
Foreach.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitForeach(this, parentSymbol);
};
PhpFunction.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpFunction(this, parentSymbol);
};
Global.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitGlobal(this, parentSymbol);
};
Goto.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitGoto(this, parentSymbol);
};
Halt.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitHalt(this, parentSymbol);
};
Identifier.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitIdentifier(this, parentSymbol);
};
If.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitIf(this, parentSymbol);
};
Include.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitInclude(this, parentSymbol);
};
Inline.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitInline(this, parentSymbol);
};
Interface.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitInterface(this, parentSymbol);
};
IntersectionType.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitIntersectionType(this, parentSymbol);
};
Isset.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitIsset(this, parentSymbol);
};
Label.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitLabel(this, parentSymbol);
};
List.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitList(this, parentSymbol);
};
Literal.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitLiteral(this, parentSymbol);
};
Location.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitLocation(this, parentSymbol);
};
Lookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitLookup(this, parentSymbol);
};
Magic.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitMagic(this, parentSymbol);
};
Match.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitMatch(this, parentSymbol);
};
MatchArm.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitMatchArm(this, parentSymbol);
};
Method.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitMethod(this, parentSymbol);
};
Name.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitName(this, parentSymbol);
};
namedargument.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNamedargument(this, parentSymbol);
};
Namespace.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNamespace(this, parentSymbol);
};
New.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNew(this, parentSymbol);
};
Node.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNode(this, parentSymbol);
};
Noop.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNoop(this, parentSymbol);
};
NowDoc.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNowDoc(this, parentSymbol);
};
NullKeyword.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNullKeyword(this, parentSymbol);
};
NullSafePropertyLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitNullSafePropertyLookup(this, parentSymbol);
};
PhpNumber.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpNumber(this, parentSymbol);
};
OffsetLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitOffsetLookup(this, parentSymbol);
};
Operation.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitOperation(this, parentSymbol);
};
Parameter.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitParameter(this, parentSymbol);
};
ParentReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitParentReference(this, parentSymbol);
};
Position.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPosition(this, parentSymbol);
};
Post.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPost(this, parentSymbol);
};
Pre.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPre(this, parentSymbol);
};
Print.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPrint(this, parentSymbol);
};
Program.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitProgram(this, parentSymbol);
};
Property.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitProperty(this, parentSymbol);
};
PropertyLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPropertyLookup(this, parentSymbol);
};
PropertyStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPropertyStatement(this, parentSymbol);
};
Reference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitReference(this, parentSymbol);
};
RetIf.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitRetIf(this, parentSymbol);
};
Return.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitReturn(this, parentSymbol);
};
SelfReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitSelfReference(this, parentSymbol);
};
Silent.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitSilent(this, parentSymbol);
};
Statement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitStatement(this, parentSymbol);
};
Static.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitStatic(this, parentSymbol);
};
StaticLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitStaticLookup(this, parentSymbol);
};
StaticReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitStaticReference(this, parentSymbol);
};
StaticVariable.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitStaticVariable(this, parentSymbol);
};
PhpString.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitPhpString(this, parentSymbol);
};
Switch.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitSwitch(this, parentSymbol);
};
Throw.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitThrow(this, parentSymbol);
};
Trait.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTrait(this, parentSymbol);
};
TraitAlias.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTraitAlias(this, parentSymbol);
};
TraitPrecedence.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTraitPrecedence(this, parentSymbol);
};
TraitUse.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTraitUse(this, parentSymbol);
};
Try.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTry(this, parentSymbol);
};
TypeReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitTypeReference(this, parentSymbol);
};
Unary.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitUnary(this, parentSymbol);
};
UnionType.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitUnionType(this, parentSymbol);
};
Unset.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitUnset(this, parentSymbol);
};
UseGroup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitUseGroup(this, parentSymbol);
};
UseItem.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitUseItem(this, parentSymbol);
};
Variable.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitVariable(this, parentSymbol);
};
Variadic.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitVariadic(this, parentSymbol);
};
VariadicPlaceholder.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitVariadicPlaceholder(this, parentSymbol);
};
While.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitWhile(this, parentSymbol);
};
Yield.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitYield(this, parentSymbol);
};
YieldFrom.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	return visitor.visitYieldFrom(this, parentSymbol);
};
