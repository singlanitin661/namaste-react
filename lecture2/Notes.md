1) Bundler : A bundler is a tool or software that is used in web development to bundle or package together various assets, such as JavaScript, CSS, images, and other files, into a single or multiple optimized files. The goal of a bundler is to improve the efficiency of web applications by reducing the number of HTTP requests required to load a page and by minimizing the size of the transferred data.

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
 ]