# Javascript notes
https://javascript.info/

* Programs in JS are called "scripts"
* JS was originally intended for browsers, but can now run on a server or
a special program called the "JS Engine"
  - V8 (Chrome & Opera)
  - SpiderMonkey (Firefox)


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

