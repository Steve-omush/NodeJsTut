## Chapter 3 (NPM Modules) :raised_hands:

0 . Node Packet Manager (npm). These are modules that are created by 3rd Parties (developers).

1 . package.json is node js file that contains metadata of the project as well as the dependencies used in the project as well.

2 . node_modules folder is not usually pushed to github. So incase you clone a repo with a package.json file without the node_modules folder, kindly run "npm install " and it(npm) will read all the modules in the package.json file and install them to avoid all the erros. Very Helpful.

3 . To install dev dependencies you use the flag -D for example "npm install nodemon -D"

4 . Nodemon is used to restart the node terminal every time you save a change on your js file. That is helpful :handshake:

5 . Use Scripts to start your node app. (Thats what server use).  Scripts is in your package.json file. use start the inde file and also delare nodemon as dev. To run app using scripts run command "npm run dev" in the terminal.