# To create a custom npm command 
Lets say i have to build a "start" command for npm , therefore , i will open package.json ==> in the scripts part ==> i will add 
"start" : parcel index.html,

The command will now be : npm run start 

The scripts part is industry standard to start the projects.

## JSX 
### Why JSX was introduced?
React.creatElement() was neither developer friendly as it is much easier to write direct html than this react code , and also tougher to read the code witten through createElement. Therefore, JSX was introduced

### Note :
1) React is different from jscx, jsx is not a part of react.
2) JSX is not html/xml in javascript.
3) The browsers don't understand jsx ,  parcel renders/transpiles(with the help of babel(package, javascript compiler)) the jsx 
4) Camelcase is used in jSX
5) to write multiline in jsx , we have to wrap the html type code in curly brackets ().

### Creating an element using jsx
#### id
const jsxHeading = <h1 id="heading"> Namaste react using JSX</h1>
#### class
const jsxClass = <h1 className="ajeeb">Hey there</h1>

### 

### transpiling of the jsx
jsx =>(babel) React.createElement => javascript object => rendered as an html element
