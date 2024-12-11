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
	visitPhpArray(node: PhpArray, parentSymbol: string): void;
	visitArrowFunc(node: ArrowFunc, parentSymbol: string): void;
	visitAssign(node: Assign, parentSymbol: string): void;
	visitAssignRef(node: AssignRef, parentSymbol: string): void;
	visitAttrGroup(node: AttrGroup, parentSymbol: string): void;
	visitAttribute(node: Attribute, parentSymbol: string): void;
	visitBin(node: Bin, parentSymbol: string): void;
	visitBlock(node: Block, parentSymbol: string): void;
	visitPhpBoolean(node: PhpBoolean, parentSymbol: string): void;
	visitBreak(node: Break, parentSymbol: string): void;
	visitByRef(node: ByRef, parentSymbol: string): void;
	visitCall(node: Call, parentSymbol: string): void;
	visitCase(node: Case, parentSymbol: string): void;
	visitCast(node: Cast, parentSymbol: string): void;
	visitCatch(node: Catch, parentSymbol: string): void;
	visitClass(node: Class, parentSymbol: string): void;
	visitClassConstant(node: ClassConstant, parentSymbol: string): void;
	visitClone(node: Clone, parentSymbol: string): void;
	visitClosure(node: Closure, parentSymbol: string): void;
	visitComment(node: Comment, parentSymbol: string): void;
	visitCommentBlock(node: CommentBlock, parentSymbol: string): void;
	visitCommentLine(node: CommentLine, parentSymbol: string): void;
	visitConstant(node: Constant, parentSymbol: string): void;
	visitConstantStatement(node: ConstantStatement, parentSymbol: string): void;
	visitContinue(node: Continue, parentSymbol: string): void;
	visitDeclaration(node: Declaration, parentSymbol: string): void;
	visitDeclare(node: Declare, parentSymbol: string): void;
	visitDeclareDirective(node: DeclareDirective, parentSymbol: string): void;
	visitDo(node: Do, parentSymbol: string): void;
	visitEcho(node: Echo, parentSymbol: string): void;
	visitEmpty(node: Empty, parentSymbol: string): void;
	visitEncapsed(node: Encapsed, parentSymbol: string): void;
	visitEncapsedPart(node: EncapsedPart, parentSymbol: string): void;
	visitEntry(node: Entry, parentSymbol: string): void;
	visitEnum(node: Enum, parentSymbol: string): void;
	visitEnumCase(node: EnumCase, parentSymbol: string): void;
	visitPhpError(node: PhpError, parentSymbol: string): void;
	visitEval(node: Eval, parentSymbol: string): void;
	visitExit(node: Exit, parentSymbol: string): void;
	visitExpression(node: Expression, parentSymbol: string): void;
	visitExpressionStatement(
		node: ExpressionStatement,
		parentSymbol: string,
	): void;
	visitFor(node: For, parentSymbol: string): void;
	visitForeach(node: Foreach, parentSymbol: string): void;
	visitPhpFunction(node: PhpFunction, parentSymbol: string): void;
	visitGlobal(node: Global, parentSymbol: string): void;
	visitGoto(node: Goto, parentSymbol: string): void;
	visitHalt(node: Halt, parentSymbol: string): void;
	visitIdentifier(node: Identifier, parentSymbol: string): void;
	visitIf(node: If, parentSymbol: string): void;
	visitInclude(node: Include, parentSymbol: string): void;
	visitInline(node: Inline, parentSymbol: string): void;
	visitInterface(node: Interface, parentSymbol: string): void;
	visitIntersectionType(node: IntersectionType, parentSymbol: string): void;
	visitIsset(node: Isset, parentSymbol: string): void;
	visitLabel(node: Label, parentSymbol: string): void;
	visitList(node: List, parentSymbol: string): void;
	visitLiteral(node: Literal, parentSymbol: string): void;
	visitLocation(node: Location, parentSymbol: string): void;
	visitLookup(node: Lookup, parentSymbol: string): void;
	visitMagic(node: Magic, parentSymbol: string): void;
	visitMatch(node: Match, parentSymbol: string): void;
	visitMatchArm(node: MatchArm, parentSymbol: string): void;
	visitMethod(node: Method, parentSymbol: string): void;
	visitName(node: Name, parentSymbol: string): void;
	visitNamedargument(node: namedargument, parentSymbol: string): void;
	visitNamespace(node: Namespace, parentSymbol: string): void;
	visitNew(node: New, parentSymbol: string): void;
	visitNode(node: Node, parentSymbol: string): void;
	visitNoop(node: Noop, parentSymbol: string): void;
	visitNowDoc(node: NowDoc, parentSymbol: string): void;
	visitNullKeyword(node: NullKeyword, parentSymbol: string): void;
	visitNullSafePropertyLookup(
		node: NullSafePropertyLookup,
		parentSymbol: string,
	): void;
	visitPhpNumber(node: PhpNumber, parentSymbol: string): void;
	visitOffsetLookup(node: OffsetLookup, parentSymbol: string): void;
	visitOperation(node: Operation, parentSymbol: string): void;
	visitParameter(node: Parameter, parentSymbol: string): void;
	visitParentReference(node: ParentReference, parentSymbol: string): void;
	visitPosition(node: Position, parentSymbol: string): void;
	visitPost(node: Post, parentSymbol: string): void;
	visitPre(node: Pre, parentSymbol: string): void;
	visitPrint(node: Print, parentSymbol: string): void;
	visitProgram(node: Program, parentSymbol: string): void;
	visitProperty(node: Property, parentSymbol: string): void;
	visitPropertyLookup(node: PropertyLookup, parentSymbol: string): void;
	visitPropertyStatement(node: PropertyStatement, parentSymbol: string): void;
	visitReference(node: Reference, parentSymbol: string): void;
	visitRetIf(node: RetIf, parentSymbol: string): void;
	visitReturn(node: Return, parentSymbol: string): void;
	visitSelfReference(node: SelfReference, parentSymbol: string): void;
	visitSilent(node: Silent, parentSymbol: string): void;
	visitStatement(node: Statement, parentSymbol: string): void;
	visitStatic(node: Static, parentSymbol: string): void;
	visitStaticLookup(node: StaticLookup, parentSymbol: string): void;
	visitStaticReference(node: StaticReference, parentSymbol: string): void;
	visitStaticVariable(node: StaticVariable, parentSymbol: string): void;
	visitPhpString(node: PhpString, parentSymbol: string): void;
	visitSwitch(node: Switch, parentSymbol: string): void;
	visitThrow(node: Throw, parentSymbol: string): void;
	visitTrait(node: Trait, parentSymbol: string): void;
	visitTraitAlias(node: TraitAlias, parentSymbol: string): void;
	visitTraitPrecedence(node: TraitPrecedence, parentSymbol: string): void;
	visitTraitUse(node: TraitUse, parentSymbol: string): void;
	visitTry(node: Try, parentSymbol: string): void;
	visitTypeReference(node: TypeReference, parentSymbol: string): void;
	visitUnary(node: Unary, parentSymbol: string): void;
	visitUnionType(node: UnionType, parentSymbol: string): void;
	visitUnset(node: Unset, parentSymbol: string): void;
	visitUseGroup(node: UseGroup, parentSymbol: string): void;
	visitUseItem(node: UseItem, parentSymbol: string): void;
	visitVariable(node: Variable, parentSymbol: string): void;
	visitVariadic(node: Variadic, parentSymbol: string): void;
	visitVariadicPlaceholder(
		node: VariadicPlaceholder,
		parentSymbol: string,
	): void;
	visitWhile(node: While, parentSymbol: string): void;
	visitYield(node: Yield, parentSymbol: string): void;
	visitYieldFrom(node: YieldFrom, parentSymbol: string): void;
}

declare module "php-parser" {
	interface Node {
		accept(visitor: AbstractVisitor, parentSymbol: string): void;
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
	visitor.visitPhpArray(this, parentSymbol);
};
ArrowFunc.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitArrowFunc(this, parentSymbol);
};
Assign.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitAssign(this, parentSymbol);
};
AssignRef.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitAssignRef(this, parentSymbol);
};
AttrGroup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitAttrGroup(this, parentSymbol);
};
Attribute.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitAttribute(this, parentSymbol);
};
Bin.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitBin(this, parentSymbol);
};
Block.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitBlock(this, parentSymbol);
};
PhpBoolean.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPhpBoolean(this, parentSymbol);
};
Break.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitBreak(this, parentSymbol);
};
ByRef.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitByRef(this, parentSymbol);
};
Call.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCall(this, parentSymbol);
};
Case.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCase(this, parentSymbol);
};
Cast.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCast(this, parentSymbol);
};
Catch.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCatch(this, parentSymbol);
};
Class.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitClass(this, parentSymbol);
};
ClassConstant.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitClassConstant(this, parentSymbol);
};
Clone.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitClone(this, parentSymbol);
};
Closure.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitClosure(this, parentSymbol);
};
Comment.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitComment(this, parentSymbol);
};
CommentBlock.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCommentBlock(this, parentSymbol);
};
CommentLine.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitCommentLine(this, parentSymbol);
};
Constant.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitConstant(this, parentSymbol);
};
ConstantStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitConstantStatement(this, parentSymbol);
};
Continue.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitContinue(this, parentSymbol);
};
Declaration.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitDeclaration(this, parentSymbol);
};
Declare.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitDeclare(this, parentSymbol);
};
DeclareDirective.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitDeclareDirective(this, parentSymbol);
};
Do.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitDo(this, parentSymbol);
};
Echo.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEcho(this, parentSymbol);
};
Empty.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEmpty(this, parentSymbol);
};
Encapsed.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEncapsed(this, parentSymbol);
};
EncapsedPart.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEncapsedPart(this, parentSymbol);
};
Entry.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEntry(this, parentSymbol);
};
Enum.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEnum(this, parentSymbol);
};
EnumCase.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEnumCase(this, parentSymbol);
};
PhpError.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPhpError(this, parentSymbol);
};
Eval.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitEval(this, parentSymbol);
};
Exit.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitExit(this, parentSymbol);
};
Expression.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitExpression(this, parentSymbol);
};
ExpressionStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitExpressionStatement(this, parentSymbol);
};
For.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitFor(this, parentSymbol);
};
Foreach.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitForeach(this, parentSymbol);
};
PhpFunction.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPhpFunction(this, parentSymbol);
};
Global.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitGlobal(this, parentSymbol);
};
Goto.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitGoto(this, parentSymbol);
};
Halt.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitHalt(this, parentSymbol);
};
Identifier.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitIdentifier(this, parentSymbol);
};
If.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitIf(this, parentSymbol);
};
Include.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitInclude(this, parentSymbol);
};
Inline.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitInline(this, parentSymbol);
};
Interface.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitInterface(this, parentSymbol);
};
IntersectionType.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitIntersectionType(this, parentSymbol);
};
Isset.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitIsset(this, parentSymbol);
};
Label.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitLabel(this, parentSymbol);
};
List.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitList(this, parentSymbol);
};
Literal.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitLiteral(this, parentSymbol);
};
Location.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitLocation(this, parentSymbol);
};
Lookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitLookup(this, parentSymbol);
};
Magic.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitMagic(this, parentSymbol);
};
Match.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitMatch(this, parentSymbol);
};
MatchArm.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitMatchArm(this, parentSymbol);
};
Method.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitMethod(this, parentSymbol);
};
Name.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitName(this, parentSymbol);
};
namedargument.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNamedargument(this, parentSymbol);
};
Namespace.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNamespace(this, parentSymbol);
};
New.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNew(this, parentSymbol);
};
Node.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNode(this, parentSymbol);
};
Noop.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNoop(this, parentSymbol);
};
NowDoc.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNowDoc(this, parentSymbol);
};
NullKeyword.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNullKeyword(this, parentSymbol);
};
NullSafePropertyLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitNullSafePropertyLookup(this, parentSymbol);
};
PhpNumber.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPhpNumber(this, parentSymbol);
};
OffsetLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitOffsetLookup(this, parentSymbol);
};
Operation.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitOperation(this, parentSymbol);
};
Parameter.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitParameter(this, parentSymbol);
};
ParentReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitParentReference(this, parentSymbol);
};
Position.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPosition(this, parentSymbol);
};
Post.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPost(this, parentSymbol);
};
Pre.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPre(this, parentSymbol);
};
Print.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPrint(this, parentSymbol);
};
Program.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitProgram(this, parentSymbol);
};
Property.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitProperty(this, parentSymbol);
};
PropertyLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPropertyLookup(this, parentSymbol);
};
PropertyStatement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPropertyStatement(this, parentSymbol);
};
Reference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitReference(this, parentSymbol);
};
RetIf.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitRetIf(this, parentSymbol);
};
Return.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitReturn(this, parentSymbol);
};
SelfReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitSelfReference(this, parentSymbol);
};
Silent.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitSilent(this, parentSymbol);
};
Statement.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitStatement(this, parentSymbol);
};
Static.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitStatic(this, parentSymbol);
};
StaticLookup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitStaticLookup(this, parentSymbol);
};
StaticReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitStaticReference(this, parentSymbol);
};
StaticVariable.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitStaticVariable(this, parentSymbol);
};
PhpString.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitPhpString(this, parentSymbol);
};
Switch.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitSwitch(this, parentSymbol);
};
Throw.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitThrow(this, parentSymbol);
};
Trait.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTrait(this, parentSymbol);
};
TraitAlias.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTraitAlias(this, parentSymbol);
};
TraitPrecedence.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTraitPrecedence(this, parentSymbol);
};
TraitUse.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTraitUse(this, parentSymbol);
};
Try.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTry(this, parentSymbol);
};
TypeReference.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitTypeReference(this, parentSymbol);
};
Unary.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitUnary(this, parentSymbol);
};
UnionType.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitUnionType(this, parentSymbol);
};
Unset.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitUnset(this, parentSymbol);
};
UseGroup.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitUseGroup(this, parentSymbol);
};
UseItem.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitUseItem(this, parentSymbol);
};
Variable.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitVariable(this, parentSymbol);
};
Variadic.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitVariadic(this, parentSymbol);
};
VariadicPlaceholder.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitVariadicPlaceholder(this, parentSymbol);
};
While.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitWhile(this, parentSymbol);
};
Yield.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitYield(this, parentSymbol);
};
YieldFrom.prototype.accept = function (
	visitor: AbstractVisitor,
	parentSymbol: string,
) {
	visitor.visitYieldFrom(this, parentSymbol);
};
