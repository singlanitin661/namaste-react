// const heading = React.createElement("h1", {id : "heading"}, "Hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 

{/* <div id = "parent">
    <div id="child1">
        <h1> I am a h1 tag</h1>
        <h2> I am a h2 tag</h2>
    </div>
    <div id="child2">
        <h1> I am a h1 tag</h1>
        <h2> I am a h2 tag</h2>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div",{id : "child1"}, [
        React.createElement("h1", {}, "I am a h1 element"),
        React.createElement("h2", {}, "I am a h2 element")
    ]),
    React.createElement("div",{id : "child1"}, [
        React.createElement("h1", {}, "I am a h1 element"),
        React.createElement("h2", {}, "I am a h2 element")
    ])
])

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 
