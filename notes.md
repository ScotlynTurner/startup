Website Info:

address - http://54.83.143.109/

ssh -i Downloads/[key] ubuntu@54.83.143.109

Notes:
to solve conflicts: open file -> resolve merge -> commit with -am -> push

![image](https://github.com/ScotlynTurner/startup/assets/144388353/1266913d-bc59-4c5b-b39d-a6666489d313)
Puts space around the content of selected elements

What is the order of the CSS box model, starting from the outside going in?
margin, border, padding, content

![image](https://github.com/ScotlynTurner/startup/assets/144388353/a231ae8b-455a-4cd7-aa9e-8aade7ed609a)
cow:rat:fish

![image](https://github.com/ScotlynTurner/startup/assets/144388353/d0237ace-3d77-4a7f-b25e-26455d836868)
Adds a mouseover event listener to a p elemen

Which of the following is NOT a valid JavaScript function?
v/ function f(x) = {}
x const f = (x) => {}
x const f = function(x) {}
x function f(x) {}

Which of the following is a valid JavaScript object?
v/ { n:1 }
x { "n"=1 }
x { n=1 }
x { "n"="1" }

What does the DOM textContent property do?
Sets the child text for the an element

Which of the following is valid JSON?
{"x":3}

The following console command makes a script executable:
chmod +x deploy.sh

To point to another DNS record, you should use the following DNS record type:
CNAME

![image](https://github.com/ScotlynTurner/startup/assets/144388353/89720f81-a137-4e56-96f0-a3fb3e95dbbd)
burger fries taco shake noodles

![image](https://github.com/ScotlynTurner/startup/assets/144388353/5211dbfb-d0b0-4ba9-b8c0-c735673b23b6)
A D B

JSON:	A lightweight data-interchange format used to share information across programs.


Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
This is a function in arrow syntax that takes no parameters and always returns 3.
() => 3;

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3


Function	Meaning	Example
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)

--------------------------------------------------
Port 80 is reserved for : http

Status Codes:
- 200 -> success
- 300 -> Content redirects or caching
- 400 -> Client errors
- 500 -> Server errors

Standard HTTP headers:
- Content-Type
- host
- cookie

Cookies allow: A server to store data on the client

Websocket - It is peer to peer instead of client to server

"npm install ws":
O Locks the version of the websocket package for your application
O Adds the websocket source code to the node_modules directory
X Adds template code for websockets to your JavaScript
O Adds a dependency to your package.json file

Linux Daemon:
O Executes independent of a user
O Starts when the computer is rebooted
O PM2 is an example of a daemon
X Cannot fork other processes
