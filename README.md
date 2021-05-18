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

## Static Type Checking 

The main fundamental difference between TypeScript & JavaScript is that TypeScript uses strict types & JavaScript does not.  

With TypeScript we can check & assign variable, parameter and function types. 

- It is completely optional 
- Helps us find & prevent bugs & stop future issues from happening 
- Make our code much more readable & descriptive

If we define a variable as a string, then in TypeScript it will always be a string and it's type cannot be changed later and the same would be true of any other type like numbers, booleans, objects, array ... 

**TypeScript Types**:
`String`, `Number`, `Boolean`, `Array`, `Any`, `Void`, `Null`, `Tuple`, `Enum`, `Generics`

Note: Whole No. and Decimal No. are not two separate types  like in other programming languages. Instead we just have a number type which covers the whole.  

TypeScript uses inference or it infers the type bases on the value we assigned it. We can also explicitly define what type of variable will be as shown in following examples.

```typescript
let name = 'Aakrit Subedi';
let age:number = 24;
let email:string = 'aakritsubedi9@gmail.com'
```

Code Example: [Types](./codes/01_types.ts)

## Compiling TypeScript

```shell
# Run the following command to compile the TypeScript Code
$ tsc codes/01_types.ts 01_types.js
# is similar to 
$ tsc codes/01_types.ts
# also, can change the filename
$ tsc codes/01_types.ts script.js
# --watch flag
$ tsc codes/01_types.ts --watch
```
