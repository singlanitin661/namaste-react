### vs-code hack
type `rafce` and press `enter` and this will create an component for us of the same name as our file and export the same
### Hooks functions always start with an `use`
## Optional component(dependency Array) of use-Effect
1) If optinal array is not passed , the useEffecxt will be called infinitely
2) If empty optional Array `[]` is passed, the useEffect is called only once.
3) If something(`dependency`) is put inside the dependency array, then the useEffect will be called whenever the depency changes. The dependency will include the useState variables

## Addional's on useState
1) The useState and hooks can only be called inside an body component. Also , try to write them as soon as the funciton starts.
2) Never create the useState inside an condition(if, else, for, local functions of the component). syntatically, it will be all right but will later cause inconsistencies

# Routing inside js
## Library 
`React Router dom`(Version-6)
## Use-case
**Installation** : `npm install react-router-dom`
### the routing info is created inside the root level, i.e. App.js in our case

**Note** there are many routers available in the react router but the page itself recommend using createBrowserRouter
```js
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayoutComponent/>
    }, 
    {
        path:"/about",
        element: <AboutComponent/> 
    }
]) //configuration will be passed about what will happen on a specific route
//Takes an array of objects which tell what to render on a particular page


root.render(<RouterProvider router={appRouter}/>)
```

## What to do if the user enters a wrong url
 Pass, an error elemenet in the code.
 ```js
 {
        path : "/",
        element: <AppLayoutComponent/>,
        errorElement:<Error/>
    }, 
```

## To get more about the error , we might do the following 
```js
import { useRouteError } from 'react-router-dom'
const error = useRouteError(); //will get me all the erros in the path
```

## Issues in the above part
1) The whoel page is getting re-rendered and i want that only the stuff below the header will change. So, now we will use `children-routes`  
The above can be achieved using the `children` property which again accepts an list of routes.
```js
const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayoutComponent/>,
        children:[
            {
                path:"/about",
                element: <AboutComponent/> 
            }, 
            {
                path:"/contact-us",
                element: <ContactUsComponent/>
            }
        ]
        errorElement:<Error/>
    }
    
]) 
```
and the app-layout will get added with an `Outlet`
```js
import { Outlet } from "react-router-dom";
const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />

            <Outlet/>
        </div>
    )
}
```

# While working with react, never ever use an anchor tag
Because it will re-fresh/reload the whole page, but this means we are no longer using our(react's) reconcillation algo.

## In react, we can navigate to an new page , without reloading the whole page.

# Link
(Super-power of react)
## This is what makes the react applicatins single-page
`import {Link} from "react-router-dom"`
Works exactly the same as anchor tag
## Usage
```js
<li> 
    <Link to="/about">About</Link>
</li>
```

## Types of Routing in Web Apps

### 1) **Client-side Routing:**
   - **Definition:** Client-side routing refers to the process of handling navigation and rendering within the user's browser. It is commonly associated with single-page applications (SPAs) where the entire web application is loaded initially, and subsequent navigation is managed on the client side without full page reloads.

   - **Advantages:**
     - **Faster Navigation:** As only the necessary components are updated, navigation is generally faster, providing a smoother user experience.
     - **Reduced Server Load:** Since the server is not involved in every navigation, it experiences less load, leading to potential cost savings.
     - **Rich User Experience:** Enables dynamic content updates without reloading the entire page, resulting in a more seamless and interactive user experience.

   - **Disadvantages:**
     - **Initial Loading Time:** The initial loading time can be longer as the entire application needs to be loaded upfront.
     - **SEO Challenges:** Search engine optimization can be challenging as search engines may have difficulty indexing content rendered dynamically.

   - **How it Works:**
     - The initial HTML, CSS, and JavaScript are loaded.
     - Subsequent navigation triggers JavaScript to update the DOM and fetch necessary data without a full page reload.

### 2) **Server-side Routing:**
   - **Definition:** Server-side routing involves the server handling navigation requests. Each navigation typically results in a request to the server, which responds by generating a new HTML page to be loaded in the browser.

   - **Advantages:**
     - **Better SEO:** Search engines can easily index content since each page has a unique URL.
     - **Simplified Initial Load:** Only the necessary content is sent to the client, leading to faster initial load times.
     - **Compatibility:** Works well with older browsers that may not support client-side routing features.

   - **Disadvantages:**
     - **Slower Navigation:** Navigations can be slower as each request to the server involves a round trip, potentially resulting in longer load times.
     - **Increased Server Load:** The server is involved in each navigation, which may lead to higher server loads.

   - **How it Works:**
     - Each navigation triggers a request to the server.
     - The server generates a new HTML page based on the requested URL and sends it back to the client for display.
