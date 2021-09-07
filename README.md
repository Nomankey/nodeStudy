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

## Web basics, HTTP

### What is HTTP?
It stands for Hypertext Transfer Protocol
* hyper text is a text sent back in the days so for now it **Hypermedia** seems like better explanation, since now not only texts, videos and pictures are sent as well
* it's a protocol consists of **request and response**
    * client requests to the server and the server responses to it

### And then HTTPS came out
* It is Hypertext Transfer Protocol Secure
    * came out in 1994, 57.1% of websites uses HTTPS
* It has TLS(Transport Layer Security) and SSL(Secure Socket Layer) so the 3rd party can not see the data during request and response

### Difference by versions
* HTTP v1: text-based, uncompressed headers, on file at a time
* HTTP v2: binary based protocol(efficent/secure), header compression, multiplexing(get multiple files), stream prioritization
</br>

when the client and the server are communicating **TCP connection** appears between them. client sends requests and server sends response.
<br>
After they all received and sent what they want, TCP connection terminates.

### Status Code
* 1XX: Information
    * 100: continue
    * 102: Processing
* 2XX: Successful
    * 200: OK
    * 201: Created
    * 204: No Content
* 3XX: Redirection
    * 301: Moved Permanently
    * 302: Found
    * 303: See Other
    * 307: Temporary Redirect(Only on POST)
    * 308: Permanent Redirect
* 4XX: Client error
    * 400: Bad Request
    * 401: Unauthorized
    * 403: Forbidden
    * 404: Not Found
    * 405: Method Not Allowed
    * 409: Conflict
* 5XX: Server error
    * 500: Internal Server Error
    * 502: Bad Gateway
    * 503: Service Unavailable

### Request Method
#### what is url
it's a uniform resource locator
* ex) https://www.server.com/courses/backend/search?q=love
    * protocol: https
    * hostname: www.server.com
    * port name: (this can be ignored) 404
    * path: courses/backend/search
    * query: q=love
### kinds of request mothods
* GET
* POST
* PUT
* DELETE
* PATCH: replace partially
* HEAD: get without body
* OPTIONS: all surported methods for URL
* TRACE: echoes received requests

### HTTP Headers
It let's the client an the server pass information with an HTTP request or response
#### Sateless Protocol
each requests are not related, which means each requests must have their own entire data
#### Sessions & Cookies
* cookie: a storage where the browser is storing data
* session: allows client's request until the browser is open


## REST API

### RESTful API?
REST: Representation State Transfer</br>
API: Application Programming Interface

REST is a software architecture style, it is in the web service guideline</br>
RESTful system is Architectural Style and Design of Network-based Software and Architecture</br>
### 6 guiding constrains to make RESTful System
* Client-server architecture: relationship between UI and data
* Statelessness
* Cacheability
* Layered System
* Code on demand
* **Uniform Interface**: fundamental to the design of any RESTful System

### Uniform Interface
* Resource identification in requests
* Resource manipulation through representations
* Self-descriptive messages
* Hypermedia as the engine of application state(HATEOAS)

##  Designing Web APIs
The basic structure that controls data is called **CRUD(Create[POST], Read[GET], Update[PUT], Delete[DELETE])**</br>
POST, GET, PUT, DELETE works as a verb</br>
Item(domain) works as a noun</br>
```
GET /posts
POST /posts
GET /posts/1
PUT /posts/1
DELTE /posts/1

GET /tags/?query=cool
```
for more info: https://docs.github.com/en/rest

## Express.js
### How to use it?
```
const express = require('express');
const app = express();

app.get('/posts', function (req, res, next) {
    res.send(...);
})

app.post('/posts', function (req, res, next) {
    res.send(...);
})

//app.get(URL/Path, callback)
```
express is a chain of middlewares after a response(like res.send()) next middleware can not be runned

