# NODE JS

## Intro
This is my personal project to study the back-end side with using Node.JS
After doing my research on what and how nodeJs is I am going to start an twitter clone project

## What is Node JS?
* Node js is a Javascript runtime built on Chrome's V8 Javascript Engine
    * runtime is the final phase of a computer program's life cycle
    * runtime is the running phase of a program

* It's a software platform used in server side application development

* It has high performace in processing requests by **non-blocking I/O**, **single thread** and **event loop**

* When expressing huge amount of data from a data base to a web page, normaly it takes time to show all of them because blocking happens when processing those database.
* Every APIs in Node works asynchronously, so non-blocking I/O is possible and high performace in request management is possible by single threaded event loop model
* Node.js is appropriate in SPA(Single Page Application) which alot of real-time data needs to be dealed with and lots of I/O
* Do not recommend in applications requires high usage in CPU

# NPM

## What is NPM
Npm is node package manager, it is usful when doing a team based project
```
// by typing 
npm init
```
you can get package.json file which gives you information about libraries and versions you use.

by sharing package.json file 
```
npm install
```
will make you able to have the same libraries and versions with the project owner

### Version control
version has 3 numbers like 1.0.0 each of them means
* major number: dynamic update
* minor number: more functions and more update
* patch number: bug fix and little update

### Install

the way to install packages from npm
```
npm intall <package>
npm i <package>
```

the way to install packages globally
```
npm i -g <package>
```
to see every packages i have installed
```
npm list -h

npm ll
```

to see only the package I downloaded
```
npm ll -g --depth=0
```

how to uninstall packages?
```
npm uninstall
npm un
```

how to update library??
```
npm view // look up version
npm outdate // shows libraires need to be updated
npm update // update
npm update <package>
```
