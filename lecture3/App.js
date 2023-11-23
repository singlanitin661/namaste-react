import React from "react";
import ReactDOM from "react-dom/client";

//These are react element not html elements(Object)
const heading = React.createElement("h1", {id : "heading"}, "Namaste React");

//these react elements  ,when renseed becomes an dom element

const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx 
const jsxHeading = <h1 id="aabraKaDaabra"> Namaste react using JSX</h1>

//jsx multilined
const jsxClass2 = (
    <h1 className="ajeeb">
        Hey there
    </h1>
    )

root.render(jsxHeading);
const jsxClass = <h1 className="ajeeb">Hey there</h1>

//React Components

//Functional
const HeadingComponent =() => {
    return <p>This is a functional react Components</p>
}
const HeadingComponent2 =() => <p>This is a functional react Components</p>;

//way to render
root.render(<HeadingComponent/>);
const ReturnTrue = () => true;
const ReturnTrue2 = () => {true};
const ReturnTrue3 = () => {return true};


//using js inside the jsx
const text = "Hello"
//component composition ': 
//using one component inside the another one
//for example : 

const Title = () => {
    return <h1 className="head" tabIndex="5">Heading 1 from the title </h1>
}
const HeadingComponent4 =() => {
    return (<div id="container">
        < Title />
        <p>This is a {text} from the javascript</p>
    </div>) 
}
root.render(<HeadingComponent4/>)
