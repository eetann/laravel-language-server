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
	visitPhpArray(node: PhpArray): void;
	visitArrowFunc(node: ArrowFunc): void;
	visitAssign(node: Assign): void;
	visitAssignRef(node: AssignRef): void;
	visitAttrGroup(node: AttrGroup): void;
	visitAttribute(node: Attribute): void;
	visitBin(node: Bin): void;
	visitBlock(node: Block): void;
	visitPhpBoolean(node: PhpBoolean): void;
	visitBreak(node: Break): void;
	visitByRef(node: ByRef): void;
	visitCall(node: Call): void;
	visitCase(node: Case): void;
	visitCast(node: Cast): void;
	visitCatch(node: Catch): void;
	visitClass(node: Class): void;
	visitClassConstant(node: ClassConstant): void;
	visitClone(node: Clone): void;
	visitClosure(node: Closure): void;
	visitComment(node: Comment): void;
	visitCommentBlock(node: CommentBlock): void;
	visitCommentLine(node: CommentLine): void;
	visitConstant(node: Constant): void;
	visitConstantStatement(node: ConstantStatement): void;
	visitContinue(node: Continue): void;
	visitDeclaration(node: Declaration): void;
	visitDeclare(node: Declare): void;
	visitDeclareDirective(node: DeclareDirective): void;
	visitDo(node: Do): void;
	visitEcho(node: Echo): void;
	visitEmpty(node: Empty): void;
	visitEncapsed(node: Encapsed): void;
	visitEncapsedPart(node: EncapsedPart): void;
	visitEntry(node: Entry): void;
	visitEnum(node: Enum): void;
	visitEnumCase(node: EnumCase): void;
	visitPhpError(node: PhpError): void;
	visitEval(node: Eval): void;
	visitExit(node: Exit): void;
	visitExpression(node: Expression): void;
	visitExpressionStatement(node: ExpressionStatement): void;
	visitFor(node: For): void;
	visitForeach(node: Foreach): void;
	visitPhpFunction(node: PhpFunction): void;
	visitGlobal(node: Global): void;
	visitGoto(node: Goto): void;
	visitHalt(node: Halt): void;
	visitIdentifier(node: Identifier): void;
	visitIf(node: If): void;
	visitInclude(node: Include): void;
	visitInline(node: Inline): void;
	visitInterface(node: Interface): void;
	visitIntersectionType(node: IntersectionType): void;
	visitIsset(node: Isset): void;
	visitLabel(node: Label): void;
	visitList(node: List): void;
	visitLiteral(node: Literal): void;
	visitLocation(node: Location): void;
	visitLookup(node: Lookup): void;
	visitMagic(node: Magic): void;
	visitMatch(node: Match): void;
	visitMatchArm(node: MatchArm): void;
	visitMethod(node: Method): void;
	visitName(node: Name): void;
	visitNamedargument(node: namedargument): void;
	visitNamespace(node: Namespace): void;
	visitNew(node: New): void;
	visitNode(node: Node): void;
	visitNoop(node: Noop): void;
	visitNowDoc(node: NowDoc): void;
	visitNullKeyword(node: NullKeyword): void;
	visitNullSafePropertyLookup(node: NullSafePropertyLookup): void;
	visitPhpNumber(node: PhpNumber): void;
	visitOffsetLookup(node: OffsetLookup): void;
	visitOperation(node: Operation): void;
	visitParameter(node: Parameter): void;
	visitParentReference(node: ParentReference): void;
	visitPosition(node: Position): void;
	visitPost(node: Post): void;
	visitPre(node: Pre): void;
	visitPrint(node: Print): void;
	visitProgram(node: Program): void;
	visitProperty(node: Property): void;
	visitPropertyLookup(node: PropertyLookup): void;
	visitPropertyStatement(node: PropertyStatement): void;
	visitReference(node: Reference): void;
	visitRetIf(node: RetIf): void;
	visitReturn(node: Return): void;
	visitSelfReference(node: SelfReference): void;
	visitSilent(node: Silent): void;
	visitStatement(node: Statement): void;
	visitStatic(node: Static): void;
	visitStaticLookup(node: StaticLookup): void;
	visitStaticReference(node: StaticReference): void;
	visitStaticVariable(node: StaticVariable): void;
	visitPhpString(node: PhpString): void;
	visitSwitch(node: Switch): void;
	visitThrow(node: Throw): void;
	visitTrait(node: Trait): void;
	visitTraitAlias(node: TraitAlias): void;
	visitTraitPrecedence(node: TraitPrecedence): void;
	visitTraitUse(node: TraitUse): void;
	visitTry(node: Try): void;
	visitTypeReference(node: TypeReference): void;
	visitUnary(node: Unary): void;
	visitUnionType(node: UnionType): void;
	visitUnset(node: Unset): void;
	visitUseGroup(node: UseGroup): void;
	visitUseItem(node: UseItem): void;
	visitVariable(node: Variable): void;
	visitVariadic(node: Variadic): void;
	visitVariadicPlaceholder(node: VariadicPlaceholder): void;
	visitWhile(node: While): void;
	visitYield(node: Yield): void;
	visitYieldFrom(node: YieldFrom): void;
}

declare module "php-parser" {
	interface Node {
		accept(visitor: AbstractVisitor): void;
	}
	interface UseGroup {
		// typo?
		items: UseItem[];
	}
}

PhpArray.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpArray(this);
};
ArrowFunc.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitArrowFunc(this);
};
Assign.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitAssign(this);
};
AssignRef.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitAssignRef(this);
};
AttrGroup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitAttrGroup(this);
};
Attribute.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitAttribute(this);
};
Bin.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitBin(this);
};
Block.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitBlock(this);
};
PhpBoolean.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpBoolean(this);
};
Break.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitBreak(this);
};
ByRef.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitByRef(this);
};
Call.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCall(this);
};
Case.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCase(this);
};
Cast.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCast(this);
};
Catch.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCatch(this);
};
Class.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitClass(this);
};
ClassConstant.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitClassConstant(this);
};
Clone.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitClone(this);
};
Closure.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitClosure(this);
};
Comment.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitComment(this);
};
CommentBlock.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCommentBlock(this);
};
CommentLine.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitCommentLine(this);
};
Constant.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitConstant(this);
};
ConstantStatement.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitConstantStatement(this);
};
Continue.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitContinue(this);
};
Declaration.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitDeclaration(this);
};
Declare.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitDeclare(this);
};
DeclareDirective.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitDeclareDirective(this);
};
Do.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitDo(this);
};
Echo.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEcho(this);
};
Empty.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEmpty(this);
};
Encapsed.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEncapsed(this);
};
EncapsedPart.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEncapsedPart(this);
};
Entry.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEntry(this);
};
Enum.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEnum(this);
};
EnumCase.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEnumCase(this);
};
PhpError.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpError(this);
};
Eval.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitEval(this);
};
Exit.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitExit(this);
};
Expression.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitExpression(this);
};
ExpressionStatement.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitExpressionStatement(this);
};
For.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitFor(this);
};
Foreach.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitForeach(this);
};
PhpFunction.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpFunction(this);
};
Global.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitGlobal(this);
};
Goto.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitGoto(this);
};
Halt.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitHalt(this);
};
Identifier.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitIdentifier(this);
};
If.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitIf(this);
};
Include.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitInclude(this);
};
Inline.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitInline(this);
};
Interface.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitInterface(this);
};
IntersectionType.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitIntersectionType(this);
};
Isset.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitIsset(this);
};
Label.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitLabel(this);
};
List.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitList(this);
};
Literal.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitLiteral(this);
};
Location.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitLocation(this);
};
Lookup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitLookup(this);
};
Magic.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitMagic(this);
};
Match.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitMatch(this);
};
MatchArm.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitMatchArm(this);
};
Method.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitMethod(this);
};
Name.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitName(this);
};
namedargument.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNamedargument(this);
};
Namespace.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNamespace(this);
};
New.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNew(this);
};
Node.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNode(this);
};
Noop.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNoop(this);
};
NowDoc.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNowDoc(this);
};
NullKeyword.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNullKeyword(this);
};
NullSafePropertyLookup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitNullSafePropertyLookup(this);
};
PhpNumber.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpNumber(this);
};
OffsetLookup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitOffsetLookup(this);
};
Operation.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitOperation(this);
};
Parameter.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitParameter(this);
};
ParentReference.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitParentReference(this);
};
Position.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPosition(this);
};
Post.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPost(this);
};
Pre.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPre(this);
};
Print.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPrint(this);
};
Program.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitProgram(this);
};
Property.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitProperty(this);
};
PropertyLookup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPropertyLookup(this);
};
PropertyStatement.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPropertyStatement(this);
};
Reference.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitReference(this);
};
RetIf.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitRetIf(this);
};
Return.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitReturn(this);
};
SelfReference.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitSelfReference(this);
};
Silent.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitSilent(this);
};
Statement.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitStatement(this);
};
Static.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitStatic(this);
};
StaticLookup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitStaticLookup(this);
};
StaticReference.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitStaticReference(this);
};
StaticVariable.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitStaticVariable(this);
};
PhpString.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitPhpString(this);
};
Switch.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitSwitch(this);
};
Throw.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitThrow(this);
};
Trait.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTrait(this);
};
TraitAlias.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTraitAlias(this);
};
TraitPrecedence.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTraitPrecedence(this);
};
TraitUse.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTraitUse(this);
};
Try.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTry(this);
};
TypeReference.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitTypeReference(this);
};
Unary.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitUnary(this);
};
UnionType.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitUnionType(this);
};
Unset.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitUnset(this);
};
UseGroup.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitUseGroup(this);
};
UseItem.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitUseItem(this);
};
Variable.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitVariable(this);
};
Variadic.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitVariadic(this);
};
VariadicPlaceholder.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitVariadicPlaceholder(this);
};
While.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitWhile(this);
};
Yield.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitYield(this);
};
YieldFrom.prototype.accept = function (visitor: AbstractVisitor) {
	visitor.visitYieldFrom(this);
};
