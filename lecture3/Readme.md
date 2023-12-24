<!-- # To create a custom npm command 
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

### jsx multilined

const jsxClass2 = (
    <h1 className="ajeeb">
        Hey there
    </h1>
    )




### transpiling of the jsx
jsx =>(babel) React.createElement => javascript object => rendered as an html element


### React Components
Everything is a component in React from button to header to footer to card to heading to title, search bar, list.

#### What is a component?

There are two types of react based components :
##### 1) Class Based(Old) ==> uses js classes to create components

##### 2) Functional Based(New) ==> uses js functions to create components
    Always start with a capital letter
    Returns some jsx
    A js function that returns an react element 

Syntax for functional component ==> 
2.1) const HeadingComponent =() =>{
    return <p>This is a functional react Components</p>
}
2.2) const HeadingComponent2 =() => <p>This is a functional react Components</p>;

##### way to render functional component
root.render(<HeadingComponent/>)

##### component composition ': 
using one component inside the another one
for example : 
"
const Title = () => {
    return <h1 className="head" tabIndex="5">Heading 1 from the title </h1>
}
const HeadingComponent4 =() => {
    return (<div id="container">
        < Title />
        //or
        { Title() }
        <p>here ttle is an component composition</p>
    </div>) 
}
root.render(<HeadingComponent4/>)
or the same can be written as 
root.render(<HeadingComponent4> </HeadingComponent4>)"


#### To execute an Js code inside jsx , use {} curly brackets and the js code is written inside them

### IMP fact
JSX sanitizes the js code before execution so that malicious code donot get executed. -->



# JSX and React Notes

## Creating a Custom npm Command

To create a custom npm command, add the following script to the `package.json` file:

```json
"scripts": {
  "start": "parcel index.html"
}
```

The command can then be executed with `npm run start`. The `scripts` section is an industry standard for starting projects.

## JSX

### Why JSX?

JSX was introduced because `React.createElement()` was not developer-friendly. JSX provides a more straightforward and readable syntax for writing HTML-like code in React.

### Important Notes:

1. React is different from JSX; JSX is not a part of React.
2. JSX is not HTML/XML in JavaScript.
3. Browsers don't understand JSX; tools like Parcel, with the help of Babel (JavaScript compiler), transpile JSX.
4. CamelCase is used in JSX.
5. To write multiline JSX, wrap the HTML-like code in curly brackets.

### Creating an Element Using JSX

#### ID

```jsx
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
```

#### Class

```jsx
const jsxClass = <h1 className="ajeeb">Hey there</h1>;
```

### Multiline JSX

```jsx
const jsxClass2 = (
  <h1 className="ajeeb">
    Hey there
  </h1>
);
```

### Transpiling of JSX

JSX is transpiled into JavaScript using Babel, resulting in `React.createElement`. The output is a JavaScript object rendered as an HTML element.

## React Components

Everything is a component in React, from buttons and headers to footers and cards.

### What is a Component?

There are two types of React components:

1. **Class-Based (Old):** Uses JavaScript classes to create components.
2. **Functional-Based (New):** Uses JavaScript functions to create components.

    - Always start with a capital letter.
    - Returns JSX.
    - A JavaScript function that returns a React element.

#### Syntax for Functional Component

```jsx
const HeadingComponent = () => {
  return <p>This is a functional React component</p>;
}

// OR

const HeadingComponent2 = () => <p>This is a functional React component</p>;
```

#### Rendering a Functional Component

```jsx
root.render(<HeadingComponent />);
```

### Component Composition

Using one component inside another:

```jsx
const Title = () => {
  return <h1 className="head" tabIndex="5">Heading 1 from the title</h1>;
}

const HeadingComponent4 = () => {
  return (
    <div id="container">
      <Title />
      {/* or */}
      {Title()}
      <p>Here, 'Title' is a component composition</p>
    </div>
  );
}

root.render(<HeadingComponent4 />);
// OR
root.render(<HeadingComponent4></HeadingComponent4>);
```

### Executing JavaScript Code Inside JSX

To execute JavaScript code inside JSX, use curly brackets `{}`.

### Important Fact

JSX sanitizes JavaScript code before execution to prevent the execution of malicious code.
```
