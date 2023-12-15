import React from "react";
import ReactDOM from "react-dom/client";
import AboutComponent from "./components/About";
import HeaderComponent from "./components/Header"
import Error from "./components/Error";
import BodyComponent from "./components/Body"
import ContactUsComponent from "./components/Contact"
import { Outlet } from "react-router-dom";
const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />

            <Outlet/>

            {/* <FooterComponent/> */}
        </div>
    )
}

import {createBrowserRouter, RouterProvider} from "react-router-dom";
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
            }
        ],
        errorElement:<Error/>
    }
    
]) //configuration will be passed about what will happen on a specific route
//Takes an array of objects


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
