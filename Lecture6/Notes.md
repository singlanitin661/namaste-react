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
2) Render the UI with some defult data
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
## The useEffect hook takes two arguments:

**Effect Function:** This is the function containing the code that performs the side effect.

**Dependency Array (optional):** This array is used to specify dependencies for the effect. If any of the dependencies change between renders, the effect function will be re-executed. If the dependency array is omitted, the effect will run after every render.
## Note : 
The callback function is called when the component gets rendered