<!-- 1) Bundler : A bundler is a tool or software that is used in web development to bundle or package together various assets, such as JavaScript, CSS, images, and other files, into a single or multiple optimized files. The goal of a bundler is to improve the efficiency of web applications by reducing the number of HTTP requests required to load a page and by minimizing the size of the transferred data.

2) Examples of Bundler : parel , weed ,webpack



3) NPM is not Node package manager 

4) npm init  //It will ask many things which all will be stored in package.json
5) npm install -d parcel ==> -d means it is required only for development not for production
//install parcel as well their depencenies 

6) package-lock.json ==> basically takes away the excuse of "It works on my machine but not on server . I dont know why". Stores all the depencies in the file. maintains integrity using sha512 , versions , if it is only for dev or not , and that depencies's dependencies.
//transitive depencies

7) node modules : folder stores all the modules , their depencies and their depencies and so on 

8) '^' this sign in package versions means that please install minor updates if possible. But only minor not major.

9) .gitignore : node modules are not puched on github. therefore we will store it in gitignore. 
but why we dont push them? Because we can simply regenrate them from our package and package-lock. 

10) we always puch package.json and package-lock.json on the git because they maintain a note of all out project and its depencies need

11) if node_modules is missing , we can reinstall it using "npm install"

## igniting the app 
Command : npx parcel index.html 
explanation : npx bundler source

NPX is for execution 

CDN links is not a good way to bring react into out project. 
Reasons : fetching(network call to unpkg) is costly

Therefore, we will use "npm install react", "npm install react-dom"

//npm i is a short form of npm install

At this time we will we getting error , tp deal with them we have to import react and reactDOM from their files(in the node modules). Therefore we will write :
""
    import React from "react";
    import ReactDOM from "react-dom/client"
""
but this will throw an error that browser scripts cant have import and export  because normal javascript can not have import/export statement.

Therefore in the linking of 
<script src = "./app.js"></script>
we will have to define its type to be module
<script type = "module" src = "./app.js"></script>

# Parcel
 - Dev Builds
 - Local Server
 - HMR : Hot Module Replacement //AUtomatically refreshs the page when we save some changes in the code
 - File watching algo written in C++
 - Builds app faster as uses caching in the backend
 - Image Optimization
 - Minification
 - Consistent Hashing
 - Tree Shaking : Removing unused code(including functions) from the code to make it light weight

## Building the app
 WHile building(npx parcwl build index.html) the app, make sure to remove "main : App.js" line from package.json ele wise you will get error of conflict between index.html and app.js

 ## Browser's List
 To add which browsers should my app must-support , we will add 
 "browserlist" : [Name off all the broswers in this array] 
 into out package.json file. Now the app will surely work on them , and might ot n=might not work on the other browsers  
 for example write :
 "browserlist" : [
    "last 2 Chrome version",
    "last 2 FireFox version"
 ] -->



# Web Development Tools and Concepts

## 1) Bundler

A bundler is a tool used in web development to package various assets (JavaScript, CSS, images, etc.) into single or multiple optimized files. Its goal is to enhance the efficiency of web applications by reducing the number of HTTP requests and minimizing data transfer size.

## 2) Examples of Bundlers

- Parcel
- Webpack
- Weed
- Rollup

## 3) NPM (Node Package Manager)

NPM is not an acronym for Node Package Manager.

## 4) Initializing a Project with npm

Run the following command to initialize a project, and it will prompt for various configurations stored in `package.json`:

```bash
npm init
```

## 5) Installing Dependencies with npm

Use the following command to install Parcel as a development dependency:

```bash
npm install -D parcel
```
-D is for dev dependency. Other type is production dependency that is used for production and testing phase

## 6) Package-lock.json

`package-lock.json` maintains dependency information, ensuring consistency across different environments. It includes sha512, versions, and information about dependencies' dependencies.

## 7) Node Modules

The `node_modules` folder stores all modules and their dependencies.

## 8) Versioning in npm

The '^' symbol in package versions indicates installing minor updates if possible.

## 9) .gitignore

`node_modules` are not pushed to GitHub and are listed in `.gitignore`. Regenerate them using `npm install`.

## 10) Version Control with Git

Always push `package.json` and `package-lock.json` to Git to track project dependencies.

## 11) Reinstalling Node Modules

If `node_modules` is missing, reinstall using:

```bash
npm install
```

## Igniting the App

Execute the following command to start the app with Parcel:

```bash
npx parcel index.html
```

Explanation: `npx` executes the bundler (`parcel`), and `index.html` is the source file.

### Importing React into the Project

Avoid using CDN links for React. Instead, use the following commands:

```bash
npm install react
npm install react-dom
```

While importing in your script, note that browser scripts can't have import/export statements. Update the script tag in HTML:

```html
<script type="module" src="./app.js"></script>
```

# Parcel

- Dev Builds
- Local Server
- HMR (Hot Module Replacement)
- Caching for faster builds
- Image Optimization
- Minification
- Consistent Hashing
- Tree Shaking (Removing unused code)

## Building the App

During the build process (`npx parcel build index.html`), ensure to remove the "main: App.js" line from `package.json` to avoid conflicts.

## Browser's List

Specify which browsers your app must support by adding a "browserslist" entry in `package.json`:

```json
"browserslist": [
  "last 2 Chrome versions",
  "last 2 Firefox versions"
]
```
```
