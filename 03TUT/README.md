# Day 3 02/10/2023

## Chapter 3 (NPM Modules) :raised_hands:

0 . Node Packet Manager (npm). These are modules that are created by 3rd Parties (developers).

1 . package.json is node js file that contains metadata of the project as well as the dependencies used in the project as well.

2 . node_modules folder is not usually pushed to github. So incase you clone a repo with a package.json file without the node_modules folder, kindly run "npm install " and it(npm) will read all the modules in the package.json file and install them to avoid all the erros. Very Helpful.

3 . To install dev dependencies you use the flag -D for example "npm install nodemon -D"

4 . Nodemon is used to restart the node terminal every time you save a change on your js file. That is helpful :handshake:

5 . Use Scripts to start your node app. (Thats what server use).  Scripts is in your package.json file. use start the inde file and also delare nodemon as dev. To run app using scripts run command "npm run dev" in the terminal.

6 . To remove a devdependency you use the flag -D

6 . If you unintsall a package, it doesnt remove it from the scripts object. You have to check it


# Day 4 10/18/2023


## Chapter 4 (Event Emitter)

0 . Events common core modules in Nodejs

1 . Import  `EventEmitter` class from the 'events' module in Node.js. The EventEmitter is a core part of Node.js that provides an implementation of the observer pattern, allowing you to create and manage custom event-driven systems. You can use it to define, emit, and handle events in Node.js applications.

2 . Can export a function from one file to another as a module using "modules.export function_Name". On the other file you import using the require "keyword".

