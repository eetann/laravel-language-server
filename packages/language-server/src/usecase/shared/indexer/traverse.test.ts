import { traverse } from "./Traverse";
import { createParser, targetName } from "./test/helper";

describe("traverse Class", () => {
	const parser = createParser();
	const rootNode = parser.parseCode(
		`<?php
namespace ExampleNamespace;

// Array
$array = [1, 2, 3];

// ArrowFunc
$arrowFunc = fn($x) => $x * 2;

// Assign
$var = 42;

// AssignRef
$refVar = &$var;

// AttrGroup and Attribute
#[ExampleAttribute]
class ExampleClass {}

// Bin
$result = 1 + 2 + 3;

// Block
{
    echo "This is a block.";
}
// Boolean
$bool = true;

// Break
for ($i = 0; $i < 10; $i++) {
    if ($i === 5) {
        break;
    }
}

// Call
$result = max(1, 2, 3);

// Case
switch ($value) {
    case 1:
        echo "Case 1";
        break;
    default:
        echo "Default case";
}

// Cast
$intValue = (int) "42";

// Catch
try {
    throw new \\Exception("Error!");
} catch (\\Exception $e) {
    echo $e->getMessage();
}

// Class and ClassConstant
class MyClass {
    const MY_CONSTANT = 100;
}

// Clone
$object = new stdClass();
$clone = clone $object;

// Closure
$closure = function ($param) {
    return $param * 2;
};

// Comment
// This is a comment

/* CommentBlock */
/**
 * Multiline comment
 */

// Constant
define('MY_CONSTANT', 42);

// Continue
for ($i = 0; $i < 10; $i++) {
    if ($i % 2 === 0) {
        continue;
    }
    echo $i;
}

// Declare
declare(strict_types=1);

// Do
do {
    echo "Hello";
} while (false);

// Echo
echo "Echo example";

// Empty
if (empty($var)) {
    echo "Variable is empty";
}

// Encapsed
$string = "This is a string with {$variable}";

// Enum and EnumCase
enum Status {
    case Active;
    case Inactive;
}

// Error
$error = function() {
    throw new \\Error("An error occurred");
};

// Eval
eval('$dynamicVar = 123;');

// Exit
exit("Goodbye");

// Expression and ExpressionStatement
$result = 1 + 1;

// For
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Foreach
foreach ([1, 2, 3] as $value) {
    echo $value;
}

// Function
function exampleFunction($param) {
    return $param * 2;
}

// Global
global $globalVar;

// Goto
goto label;
label:
echo "This is a label";

// Identifier and Variable
$varName = "example";

// If
if ($bool) {
    echo "True";
} else {
    echo "False";
}

// Include
include 'file.php';


		// // Inline
		// // Inline is usually used internally, not directly in PHP code
		//
		// // Interface
		// interface ExampleInterface {}
		//
		// // IntersectionType
		// class IntersectionExample implements ExampleInterface, Countable {}
		//
		// // Isset
		// if (isset($var)) {
		//     echo "Variable is set";
		// }
		//
		// // Label
		// myLabel:
		// echo "Label example";
		//
		// // List
		// list($a, $b) = [1, 2];
		//
		// // Literal
		// $literal = "This is a string";
		//
		// // Match and MatchArm
		// $result = match($value) {
		//     1 => 'one',
		//     2 => 'two',
		//     default => 'other',
		// };
		//
		// // Method
		// class MyClassWithMethod {
		//     public function myMethod() {
		//         return "Hello";
		//     }
		// }
		//
		// // New
		// $instance = new MyClass();
		//
		// // Node
		// class CustomNode {}
		//
		// // Noop
		// // Empty statement;
		//
		// // NowDoc
		// $nowdoc = <<<'EOD'
		// NowDoc example
		// EOD;
		//
		// // NullKeyword
		// $nullValue = null;
		//
		// // NullSafePropertyLookup
		// $result = $object?->property;
		//
		// // Number
		// $number = 123;
		//
		// // OffsetLookup
		// $value = $array[0];
		//
		// // Operation
		// $result = $a + $b;
		//
		// // Parameter
		// function withParameter($param) {}
		//
		// // ParentReference
		// class ParentExample {
		//     public function example() {
		//         parent::example();
		//     }
		// }
		//
		// // Position
		// // Position is internal to AST
		//
		// // Post and Pre
		// $i++;
		// ++$i;
		//
		// // Print
		// print "Print example";
		//
		// // Program
		// // Entire PHP script is a Program
		//
		// // Property
		// class ExampleWithProperty {
		//     public $property;
		// }
		//
		// // PropertyLookup
		// $value = $object->property;
		//
		// // Reference
		// $ref = &$var;
		//
		// // RetIf
		// $result = $bool ? 'True' : 'False';
		//
		// // Return
		// return $value;
		//
		// // SelfReference
		// class SelfExample {
		//     public function example() {
		//         return self::class;
		//     }
		// }
		//
		// // Silent
		// @unlink('nonexistent_file.txt');
		//
		// // Static
		// static $staticVar = 42;
		//
		// // StaticLookup
		// $value = MyClass::MY_CONSTANT;
		//
		// // StaticReference
		// class StaticExample {
		//     public static function example() {}
		// }
		//
		// // StaticVariable
		// static $counter = 0;
		//
		// // String
		// $string = "This is a string";
		//
		// // Switch
		// switch ($value) {
		//     case 1:
		//         echo "One";
		//         break;
		//     default:
		//         echo "Other";
		// }
		//
		// // Throw
		// throw new \\Exception("Error");
		//
		// // Trait and TraitUse
		// trait ExampleTrait {}
		// class UsesTrait {
		//     use ExampleTrait;
		// }
		//
		// // Try
		// try {
		//     // Something
		// } catch (\\Exception $e) {}
		//
		// // TypeReference
		// function typeReferenceExample(int $param) {}
		//
		// // Unary
		// $result = -$a;
		//
		// // UnionType
		// function unionExample(int|string $param) {}
		//
		// // Unset
		// unset($var);
		//
		// // UseGroup and UseItem
		// use ExampleNamespace\\{ClassA, ClassB as AliasB};
		//
		// // Variable
		// $variable = "value";
		//
		// // Variadic and VariadicPlaceholder
		// function variadicExample(...$args) {}
		//
		// // While
		// while ($condition) {
		//     echo "Loop";
		// }
		//
		// // Yield
		// function generatorExample() {
		//     yield 1;
		// }
		//
		// // YieldFrom
		// function generatorFrom() {
		//     yield from [1, 2, 3];
		// }
		// `,
		targetName,
	);

	it("visitClass", () => {
		expect(() =>
			traverse(rootNode, (node) => console.log(node.kind)),
		).not.toThrow();
	});
});
