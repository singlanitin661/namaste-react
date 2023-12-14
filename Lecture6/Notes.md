# Monolith Architecture:
Where all services are placed inside one app.
For Example :
 App = Backend + UI + Authentication + DataBase + Notifications + Emails.

# MicroServices :
Where seperate app for every functionality and they work together.
```
App = {
    App1 = Backend,
    App2 = UI,
    App3 = Auth,
    App4 = Database
}
```
# CORS

## CORS Error:
Cross-Origin Resource Sharing (CORS) error occurs when a web page makes an XMLHttpRequest or fetch to a domain different from the one that served the web page.

## Solution:
### Temporary solution
Add the following extension to chrome
`Allow CORS: Access-Control-Allow-Origin
` and toggle the extension to on
### Permanent Solution
Enable CORS on the server by setting appropriate headers. For example, in Node.js with Express:


```javascript
const express = require('express');
const app = express();

// Enable CORS middleware for a specific origin
app.use((req, res, next) => {
  // Allow requests only from www.google.com
  res.header('Access-Control-Allow-Origin', 'http://www.google.com');
  //       OR
  // Allow requests from any origin (*)
  res.header('Access-Control-Allow-Origin', '*');
  
  
  // Allow specified headers in the actual request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  // Continue to the next middleware or route
  next();
});

// Your routes and logic here

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this code:

- `Access-Control-Allow-Origin` is set to 'http://www.google.com', restricting requests to only come from this specific origin.

- `Access-Control-Allow-Headers` specifies the headers allowed in the actual request, including 'Origin,' 'X-Requested-With,' 'Content-Type,' and 'Accept'. Adjust these according to your needs.

## Follows two things : 
1) Seperation of concerns
2) Single responsibilty principle

## Advantage 
1) Can use different tech-stacks for different things

## How these services are connnected?
All the services run on their own specific-port
ans make call to one-anothers url for the data/information sharing


# How react-app will make backend calls and fetch data from backend?

## Approach 1

Page Load ==> API-call(500ms) ==> Render the page

## Approach 2 (Better)
1) Page loads
2) Render the UI with some defult/empty data
3) API call
4) Re-render the page with new data from the API

Better because improved UX as some data is always visible to the user. The user don't see all that lag and gittery-ness.

# UseEffect Hook
```js
import {useEffect} from "react";

useEffect(callBackFn, dependencyArray)

useEffect(()=>{
    console.log("useEffect Called"), []
})
```

## UseCase of useEffect:
To implement the second approachg that is when we want to re-render the page with the api data, we will use `useEffect`
## The useEffect hook takes two arguments:

**Effect Function:** This is the function containing the code that performs the side effect. That is the changes to be done after the component renders.

**Dependency Array (optional):** This array is used to specify dependencies for the effect. If any of the dependencies change between renders, the effect function will be re-executed. If the dependency array is omitted, the effect will run after every render.
## Note : 
The callback function is called when the component gets rendered
A valid example to explain the same :
```js
const BodyComponent = () =>{
    useEffect(()=>{
        console.log("useEffect Called")
    }, [])

    console.log("Body Rendered")
}


Then the output will be :
"Body Rendered" (logged when the component is rendered)
useEffect fn will be called
"UseEffect called" will be printed now
```

A we-use case of it :
```js
const BodyComponent = () =>{
    const [listOfRestaurants, setListofRestaurants] = useState(resList);
    const fetchData = async () =>{
        const data = await fetch(Swiggy_API);
        const dataInJSON = await data.json();
        console.log(dataInJSON);
        setListofRestaurants(dataInJSON.data.cards[2].data.data.cards)
    }

    useEffect(()=>{
        fetchData();
    })

    //Conditional Rendering
    if(listOfRestaurants.length === 0){
        //default behaviour of the page. Because initally we kept the list size to be empty
        return <h1>Loading </h1>
    }
    return (
        <div>listOfRestaurants.map((rest) => (<RestaurantComponent key={restaurant.data.id} resData = {restaurant}/>)) </div>
    )
}
```

## Shimmer UI
The DummyUI which get loaded when the page gets initially loaded is called Shimmer UI. 
![Shimmer Image](https://repository-images.githubusercontent.com/253115353/8ca54b80-7730-11ea-9246-038f7c0487dc "Shimmer")