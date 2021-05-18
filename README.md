# TypeScript

TypeScript is a superset of JavaScript developed by Microsoft & that means that it can do everything that javascript can do but adds more features. The main feature that it adds as its name implies is static typing in regular javascript. 

```javascript
let myName = 'Aakrit Subedi'; //you can assign a string to it
myName = 24; //and than later on you can reassign a no. value to that same variable
```

The above example shows, javascript uses `dynamic typing` which basically means that you can assign anything to anything. 

So, we need some rules to keep ourselves from making silly mistakes. Adding static typing helps us to catch bugs before we've even run our code & amazing type checking that's built into the VS Code.  

By using typescript, we force ourselves to write cleaner code from the start. Typescript cannot be read by the browser and so we will need to compile it to regular javascript before testing or deploying.   

Typescript can easily be integrated in JavaScript projects & designed for development of large applications.  

## What Does TypeScript Offers ? 

- it gives us  `Static Type Checking`  
by default JavaScript is un-typed language, meaning that we do not have to specify variable or function type. Static Typing in TypeScript is completely optional.
- Class Based Objects
- Makes JavaScript more `modular`
- ES6 features (arrow function, let, const ...)
- Syntax closer to Java & other high level languages
- Extra features (generics, interfaces, tuples ...)

## Installation

You need to have Node.js installed on your machine. So, we can use Node Package Manager(NPM) to install packages and install TypeScript.  

Now, install the TypeScript compiler that compiles our TypeScript code into regular JavaScript code. (...because remember browsers do not understand TypeScript)  

`TypeScript is just a language that makes things cleaner & easier for us during development`  

Run the following command to install TypeScript in your machine.  

```shell
$ npm install -g typescript
```  

It is going to install TypeScript on your machine. 
