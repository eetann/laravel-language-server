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

declare module "php-parser" {
	interface Node {
		getChildren(): Node[];
	}
	interface UseGroup {
		// typo?
		items: UseItem[];
	}
}

PhpArray.prototype.getChildren = function () {
	return this.items;
};
ArrowFunc.prototype.getChildren = function () {
	// TODO: typeが必要？
	return this.arguments.concat(this.body);
};
Assign.prototype.getChildren = function () {
	return [];
};
AssignRef.prototype.getChildren = function () {
	return [];
};
AttrGroup.prototype.getChildren = function () {
	return [];
};
Attribute.prototype.getChildren = function () {
	return [];
};
Bin.prototype.getChildren = function () {
	return [];
};
Block.prototype.getChildren = function () {
	return this.children;
};
PhpBoolean.prototype.getChildren = function () {
	return [];
};
Break.prototype.getChildren = function () {
	return [];
};
ByRef.prototype.getChildren = function () {
	return [];
};
Call.prototype.getChildren = function () {
	return [];
};
Case.prototype.getChildren = function () {
	return [];
};
Cast.prototype.getChildren = function () {
	return [];
};
Catch.prototype.getChildren = function () {
	return [];
};
Class.prototype.getChildren = function () {
	// TODO: extends, implements, attrGroupsも？
	return this.body;
};
ClassConstant.prototype.getChildren = function () {
	return [];
};
Clone.prototype.getChildren = function () {
	return [];
};
Closure.prototype.getChildren = function () {
	return [];
};
Comment.prototype.getChildren = function () {
	return [];
};
CommentBlock.prototype.getChildren = function () {
	return [];
};
CommentLine.prototype.getChildren = function () {
	return [];
};
Constant.prototype.getChildren = function () {
	return [];
};
ConstantStatement.prototype.getChildren = function () {
	return [];
};
Continue.prototype.getChildren = function () {
	return [];
};
Declaration.prototype.getChildren = function () {
	return [];
};
Declare.prototype.getChildren = function () {
	return [];
};
DeclareDirective.prototype.getChildren = function () {
	return [];
};
Do.prototype.getChildren = function () {
	return [];
};
Echo.prototype.getChildren = function () {
	return [];
};
Empty.prototype.getChildren = function () {
	return [];
};
Encapsed.prototype.getChildren = function () {
	return [];
};
EncapsedPart.prototype.getChildren = function () {
	return [];
};
Entry.prototype.getChildren = function () {
	return [];
};
Enum.prototype.getChildren = function () {
	return [];
};
EnumCase.prototype.getChildren = function () {
	return [];
};
PhpError.prototype.getChildren = function () {
	return [];
};
Eval.prototype.getChildren = function () {
	return [];
};
Exit.prototype.getChildren = function () {
	return [];
};
Expression.prototype.getChildren = function () {
	return [];
};
ExpressionStatement.prototype.getChildren = function () {
	return [];
};
For.prototype.getChildren = function () {
	return [];
};
Foreach.prototype.getChildren = function () {
	return [];
};
PhpFunction.prototype.getChildren = function () {
	return [];
};
Global.prototype.getChildren = function () {
	return [];
};
Goto.prototype.getChildren = function () {
	return [];
};
Halt.prototype.getChildren = function () {
	return [];
};
Identifier.prototype.getChildren = function () {
	return [];
};
If.prototype.getChildren = function () {
	return [];
};
Include.prototype.getChildren = function () {
	return [];
};
Inline.prototype.getChildren = function () {
	return [];
};
Interface.prototype.getChildren = function () {
	return [];
};
IntersectionType.prototype.getChildren = function () {
	return [];
};
Isset.prototype.getChildren = function () {
	return [];
};
Label.prototype.getChildren = function () {
	return [];
};
List.prototype.getChildren = function () {
	return [];
};
Literal.prototype.getChildren = function () {
	return [];
};
Location.prototype.getChildren = function () {
	return [];
};
Lookup.prototype.getChildren = function () {
	return [];
};
Magic.prototype.getChildren = function () {
	return [];
};
Match.prototype.getChildren = function () {
	return [];
};
MatchArm.prototype.getChildren = function () {
	return [];
};
Method.prototype.getChildren = function () {
	return [this.body];
};
Name.prototype.getChildren = function () {
	return [];
};
namedargument.prototype.getChildren = function () {
	return [];
};
Namespace.prototype.getChildren = function () {
	return this.children;
};
New.prototype.getChildren = function () {
	return [];
};
Node.prototype.getChildren = function () {
	return [];
};
Noop.prototype.getChildren = function () {
	return [];
};
NowDoc.prototype.getChildren = function () {
	return [];
};
NullKeyword.prototype.getChildren = function () {
	return [];
};
NullSafePropertyLookup.prototype.getChildren = function () {
	return [];
};
PhpNumber.prototype.getChildren = function () {
	return [];
};
OffsetLookup.prototype.getChildren = function () {
	return [];
};
Operation.prototype.getChildren = function () {
	return [];
};
Parameter.prototype.getChildren = function () {
	return [];
};
ParentReference.prototype.getChildren = function () {
	return [];
};
Position.prototype.getChildren = function () {
	return [];
};
Post.prototype.getChildren = function () {
	return [];
};
Pre.prototype.getChildren = function () {
	return [];
};
Print.prototype.getChildren = function () {
	return [];
};
Program.prototype.getChildren = function () {
	return this.children;
};
Property.prototype.getChildren = function () {
	return [];
};
PropertyLookup.prototype.getChildren = function () {
	return [];
};
PropertyStatement.prototype.getChildren = function () {
	return [];
};
Reference.prototype.getChildren = function () {
	return [];
};
RetIf.prototype.getChildren = function () {
	return [];
};
Return.prototype.getChildren = function () {
	return [];
};
SelfReference.prototype.getChildren = function () {
	return [];
};
Silent.prototype.getChildren = function () {
	return [];
};
Statement.prototype.getChildren = function () {
	return [];
};
Static.prototype.getChildren = function () {
	return [];
};
StaticLookup.prototype.getChildren = function () {
	return [];
};
StaticReference.prototype.getChildren = function () {
	return [];
};
StaticVariable.prototype.getChildren = function () {
	return [];
};
PhpString.prototype.getChildren = function () {
	return [];
};
Switch.prototype.getChildren = function () {
	return [];
};
Throw.prototype.getChildren = function () {
	return [];
};
Trait.prototype.getChildren = function () {
	return [];
};
TraitAlias.prototype.getChildren = function () {
	return [];
};
TraitPrecedence.prototype.getChildren = function () {
	return [];
};
TraitUse.prototype.getChildren = function () {
	return [];
};
Try.prototype.getChildren = function () {
	return [];
};
TypeReference.prototype.getChildren = function () {
	return [];
};
Unary.prototype.getChildren = function () {
	return [];
};
UnionType.prototype.getChildren = function () {
	return [];
};
Unset.prototype.getChildren = function () {
	return [];
};
UseGroup.prototype.getChildren = function () {
	return [];
};
UseItem.prototype.getChildren = function () {
	return [];
};
Variable.prototype.getChildren = function () {
	return [];
};
Variadic.prototype.getChildren = function () {
	return [];
};
VariadicPlaceholder.prototype.getChildren = function () {
	return [];
};
While.prototype.getChildren = function () {
	return [];
};
Yield.prototype.getChildren = function () {
	return [];
};
YieldFrom.prototype.getChildren = function () {
	return [];
};
