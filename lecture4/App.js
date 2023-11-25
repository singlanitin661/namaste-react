import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./images/logo.png"

const HeaderComponent = () => {
    return (
        <div className="header">
            < div className="logo-container">
                 <img src={logo} alt="logo"></img>
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
const RestaurantComponent = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img src={props.image.search("example") == -1 ? props.image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq"} alt={props.name + " Image"} ></img>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating + "/5⭐"} </h4>
            <h4>{props.eta + " mins away"}</h4>
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
                <RestaurantComponent name="MeghanaFoods" cusine="" rating="4.3" eta="38" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq" />
                <RestaurantComponent name="DeliciousDelights" cusine="Mediterranean" rating="4.8" eta="25" image="https://example.com/delicious-delights.jpg" />
                <RestaurantComponent name="TastyTreats" cusine="Asian Fusion" rating="4.5" eta="30" image="https://example.com/tasty-treats.jpg" />
                <RestaurantComponent name="SizzlingSpices" cusine="Mexican" rating="4.2" eta="40" image="https://example.com/sizzling-spices.jpg" />
                <RestaurantComponent name="FusionFlavors" cusine="International" rating="4.6" eta="22" image="https://example.com/fusion-flavors.jpg" />
                <RestaurantComponent name="UrbanEats" cusine="American" rating="4.4" eta="35" image="https://example.com/urban-eats.jpg" />
                <RestaurantComponent name="SpiceHub" cusine="Indian" rating="4.1" eta="45" image="https://example.com/spice-hub.jpg" />
                <RestaurantComponent name="SeafoodSensation" cusine="Seafood" rating="4.7" eta="20" image="https://example.com/seafood-sensation.jpg" />
                <RestaurantComponent name="VeggieVibes" cusine="Vegetarian" rating="4.9" eta="15" image="https://example.com/veggie-vibes.jpg" />
                <RestaurantComponent name="SweetTreatHouse" cusine="Desserts" rating="4.0" eta="50" image="https://example.com/sweet-treat-house.jpg" />
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
