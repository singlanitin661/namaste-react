import React from "react";
import ReactDOM from "react-dom/client";

//These are react element not html elements(Object)
const heading = React.createElement("h1", {id : "heading"}, "Namaste React");

//these react elements  ,when renseed becomes an dom element

const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx 
const jsxHeading = <h1 id="aabraKaDaabra"> Namaste react using JSX</h1>
root.render(jsxHeading)
const jsxClass = <h1 className="ajeeb">Hey there</h1>

  

