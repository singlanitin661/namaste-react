import React from "react";
import ReactDOM from "react-dom/client";

// import logo from "../images/logo.png"

import HeaderComponent from "./components/Header"

import BodyComponent from "./components/Body"

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />

            <BodyComponent />

            {/* <FooterComponent/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent/>)
