# Javascript notes
https://javascript.info/

* Programs in JS are called "scripts"
* JS was originally intended for browsers, but can now run on a server or
a special program called the "JS Engine"
  - V8 (Chrome & Opera)
  - SpiderMonkey (Firefox)
* Undefined => value is not assigned yet
* Null => "empty" or "unknown" value


## What can JS do?
* Add new HTML, change content, modify styles
* React to user actions, mouse clicks, pointer movements, key presses
* Send requests over the network to remote servers, dl and ul files (AJAX/COMET)
* Get/set cookies, ask questions to visitors, show messages
* Remember data on client-side (`local storage`)

## What CANT it do?
* Read/Write files on the hdd, copy them or execute programs
* Generally, different tabs/windows do not know about each other. They can if one window uses JS to open another one. However, in this case, JS from one page cannot access the other if they come from different sites (from a diff domain, protocol or port).
This is called `Same Origin Policy`. IF they want to communicate, both pages must agree to data exchange and contain special code to allow it.
* JS can easily comm over the net to the server where the current page is from. However, other sites/domains 

## Languages over JS
* CoffeeScript - Syntactic sugar for JS. Shorter syntax, Ruby devs like it
* TypeScript - Strict data typing. Developed by Microsoft
* Flow - Adds data typing. Developed by FB
* Dart - Standalone lang that has its own engine that runs in non-browser env (like mobile)
* Brython - Python transpiler to JS that enables writing in pure Python w/o JS
* Kotlin - modern, concise, sand safe programming lang that can be in browser or node.


## "use strict"
Keeps the old code (pre ES5) working. Anything below it will be in `strict` mode. 
(Generally its placed at the very top)
Once it is used, it cannot be undone
- Modern JS enables "use strict" automatically.


## Variable naming
2 restrictions in naming:
1. Name must contain only letters, digits, or the symbols $ or _
2. First char must not be a digit
* Non-latin letters are allowed, but not recommended
* Reserved words cannot be used (let, class, return, function)

## Browser specific functions
* `alert(msg)` - shows a popup msg
* `prompt(title, [default])` - shows a popup msg with an input field for the user to fill out
* `confirm(question)` - shows a popup msg with a question and two btns: OK and cancel

## Data types
1. Numbers - ints or floats, limited by 2^53-1
2. Bigint - int #s of arbitraty length
3. Strings
4. Boolean
5. Null - Unkown values
6. Undefined - unassigned values
7. Object
8. Symbols
Can check types with `typeof()`

## Type conversions
* `String(value)` - converts value to String
* `Number(value)` - converts value to Number // Can also use `+` before a string
  Numeric conversion rules:
    * undefined ==> NaN
    * null ==> 0
    * true & false ==> 1 & 0
    * String ==> whitespaces from start and end are removed. If empty, 0 else, NaN

    +true ==> 1
    +"" ==> 0
* `Boolean(value)` - converts value to Boolean
  Boolean rules:
    * Anything "empty": 0, "", null, uyndefined, Nan ==> false
    * All else ==> true
    * Note: "0"==> true, its a non-empty string


# Math operators

## Unary, Binary, Operand
* Operand - what operators are applied to.
  eg: 5 * 2 ==> 5 and 2 are operands, * is operator
* Unary - Operator is `unary` if operand is single
  eg: let x = 1;
      x = -x; ==> -1, unary negation was applied
* Binary - Operator has 2 operands
  eg: let x = 1, y = 4;
      y - x ==> 2, binary minus

## String concatenation with binary +
string + string = stringstring
"my" + "string" = "mystring"

* If any operand is a string, the other one converts to a string
Order does not matter
"1" + 2 = "12"
2 + "1" = "21"

* Operators work one after another
2 + 2 + "1" ==> "41"
"1" + 2 + 2 ==> "122"

NOTE: this only applies to `+` operators
anything else converts other operands to numbers
6 - '2' ==> 4
"6" / "2" ==> 3

## Order of operations
Unary +
Unary -
PEMDAS
Assignment ("=")

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


### Chain assignments
Evalute from right to left

### Increment / Decrement

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 1;
let a = ++counter; // (*)
alert(a); // 2

VS

If we’d like to increment a value but use its previous value, we need the postfix form:
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++
alert(a); // 1

## Comma operator
Used to evaluate several expression. Each are evaluated but only the last result is returned
