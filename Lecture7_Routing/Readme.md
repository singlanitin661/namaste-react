### vs-code hack
type `rafce` and press `enter` and this will create an component for us of the same name as our file and export the same
### Hooks functions always start with an `use`
## Optional component(dependency Array) of use-Effect
1) If optional array is not passed , the useEffecxt will be called infinitely
2) If empty optional Array `[]` is passed, the useEffect is called only once.
3) If something(`dependency`) is put inside the dependency array, then the useEffect will be called whenever the depency changes. The dependency will include the useState variables

## Addional's on useState
1) The useState and hooks can only be called inside an component. Also , try to write them as soon as the funciton starts.
2) Never create the useState inside an condition(if, else, for, local functions of the component). syntatically, it will be all right but will later cause inconsistencies

# Routing inside js
## Library 
`React Router dom`(Version-6)
## Use-case
**Installation** : `npm install react-router-dom`
### The routing info is created inside the root level, i.e. App.js in our case

**Note** there are many routers available in the react router but the page itself recommend using `createBrowserRouter`
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

//RouteProvioder is an component provided by react-router-dom.
root.render(<RouterProvider router={appRouter}/>)
```

## What to do if the user enters a wrong url
**use** `errorElement`
 Pass, an error element(That is the component which should be rendered when the url gets wrong) in the code.
 ```js
 {
        path : "/",
        element: <AppLayoutComponent/>,
        errorElement:<Error/>
    }, 
```

## To get more about the error , we might do the following 
`useRouteError`
```js
import { useRouteError } from 'react-router-dom'
const error = useRouteError(); //will get me all the erros in the path
```

## Issues in the above part
1) The whole page is getting re-rendered and i want that only the stuff below the header will change. So, now we will use `children-routes`  
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
and the app-layout will get added with an `Outlet`. That is the children components will be rendered at the place of `Outlet`
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

## passing dynamic urls:
```js
{
    path:"/restaurants/:resID", //coloun means that the resId will be dynamic
    element: <RestaurantMenu/>
}
```

# While working with react, never ever use an anchor tag
Because it will re-fresh/reload the whole page, but this means we are no longer using our(react's) reconcillation algo.

## In react, we can navigate to an new page , without reloading the whole page.

# `Link`
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

# useParams
`useParams` is a hook provided by the React Router library in React that allows you to access parameters from the current route in a functional component. It is commonly used in the context of client-side routing to extract dynamic segments from the URL.

Here's a brief explanation of how `useParams` works:

1. **Installation:**
   Make sure you have React Router installed in your project. If not, you can install it using:

   ```bash
   npm install react-router-dom
   ```

2. **Usage:**
   Import the `useParams` hook in your React component:

   ```javascript
   import { useParams } from 'react-router-dom';
   ```

3. **Accessing Parameters:**
   Use the `useParams` hook in your component function. It returns an object with the key-value pairs of the URL parameters:

   ```javascript
   import React from 'react';
   import { useParams } from 'react-router-dom';

   const MyComponent = () => {
     const { id } = useParams();

     // Now, 'id' contains the value of the 'id' parameter from the URL
     // For example, if the URL is "/users/123", then 'id' will be "123"
     
     // Rest of your component logic...
   };

   export default MyComponent;
   ```

   In this example, if the route that rendered `MyComponent` looks like "/users/123," the `id` variable will be equal to "123."

4. **Dynamic Routing:**
   The `useParams` hook is especially useful in scenarios where you have dynamic routes with parameters. For instance, in a route like "/users/:id," the `:id` part represents a dynamic parameter that can be accessed using `useParams`.

   ```javascript
   import { BrowserRouter as Router, Route } from 'react-router-dom';

   const App = () => {
     return (
       <Router>
         <Route path="/users/:id" component={MyComponent} />
       </Router>
     );
   };
   ```

   Here, `MyComponent` will receive the `id` parameter from the URL.

Using `useParams` allows you to create more flexible and dynamic React components that can respond to changes in the URL, making it a powerful tool for building applications with dynamic routing.

### Link uses anchor tag in the background.

# Suppose my website has 3 pages, say /x, /y, /z. Each page has an header, body, footer inside the main body. They all have same header and footer. I want react to only re-render the center part when i press buttons to redirect me to next page. How can i do so?
**`Swiches` comes into picture here**
To achieve the desired behavior of only re-rendering the center part of your website when navigating between pages, you can use React Router along with a layout structure. The layout structure includes a common header and footer shared across all pages, while the central content changes based on the current route.

Here's a simple example using React Router and a layout structure:

```jsx
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PageX from './pages/PageX';
import PageY from './pages/PageY';
import PageZ from './pages/PageZ';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/x" component={PageX} />
          <Route path="/y" component={PageY} />
          <Route path="/z" component={PageZ} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

In this example:

- The `Header` and `Footer` components are common across all pages.
- The `Switch` component from React Router renders only the first `Route` that matches the current location.
- Each `Route` renders a specific page component (`PageX`, `PageY`, `PageZ`) based on the path.

