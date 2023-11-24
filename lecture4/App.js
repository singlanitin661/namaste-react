import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./images/logo.png"

const HeaderComponent = () => {
    return (
        <div className="header">
            < div className="logo-container">
                  
            </div>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}
const RestaurantComponent = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghna Foods</h3>
        </div>
    )
}
const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="restaurant-container">
                <RestaurantComponent/>
            </div>
        </div>
    )
}
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
