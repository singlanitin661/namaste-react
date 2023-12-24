import React from "react";
import ReactDOM from "react-dom/client";
import AboutComponent from "./components/About";
import HeaderComponent from "./components/Header"
import Error from "./components/Error";
import BodyComponent from "./components/Body"
import ContactUsComponent from "./components/Contact"

import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const AppLayoutComponent = () => {
    return (
        <Provider store={appStore}> 
        {/* Provider takes the store as an props*/}
            <div className="app">
                <HeaderComponent />

                <Outlet/>

                {/* <FooterComponent/> */}
            </div>
        </Provider>
    )
}

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayoutComponent/>,
        children:[
            {
                path:"/",
                element:<BodyComponent />
            },
            {
                path:"/about",
                element: <AboutComponent/> 
            }, 
            {
                path:"/contact-us",
                element: <ContactUsComponent/>
            }, 
            {
                path:"/restaurants/:resID", //coloun means that the resId will be dynamic
                element: <RestaurantMenu/>
            }, {
                path:"/cart",
                element: <Cart/>
            }
        ],
        errorElement:<Error/>
    }
    
]) //configuration will be passed about what will happen on a specific route
//Takes an array of objects

import Counter from "./components/TemporaryComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
// root.render(<Counter/>)
