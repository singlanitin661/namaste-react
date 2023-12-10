### Industry convention of folders
1) All js files in ```src``` folder
2) Seperate file for every component

project
    - src
        - components (keep files containing the componenets a capital letter)
        - images

#### General trends/approaches(not rules) as per react documentation
1) Grouping by features or routes
2) Grouping by file type
3) Avoid too much nesting
4) Don’t overthink it
    -  don’t spend more than five minutes 
    - You can always restructure

As projects grow larger, they often use a mix of both of the above approaches in practice. So choosing the “right” one in the beginning isn’t very important.


### How to import an component from its jsx or js file

1) make your component inside the file

2) Export the component like this 
```js

export default HeaderComponentName
```

TO import inside app.js write  
```js

import HeaderComponent from "./components/Header"
//or (for jsx file)
import HeaderComponent from "./components/Header.jsx"
//or (for js file)
import HeaderComponent from "./components/Header.js"
```
#### But.....
The above method can't be used to export more than one variable/components at the same time.

To export multiple variables, we are required to use `named export`.For example : 
```js
export const COMMON_URL = "Something something"

export aabraKaDaabra = "Something something again.."
```
To import it use : 
```js
import {COMMON_URL} from "file name and its url"
```

## Hooks 

current Situation :
```js

const listOfRestaurants = [An array of list of restaurants] 
{listOfRestaurants.map((resautant) => {
    <RestaurantCard key={restaurant.data.id} redData = {restaurant.data}/>
})}
```
The above code will show me all the restutants. But suppose i want to see only those who have a rating greater than 4.
So, i call function to modify the  `listOfRestautrants` as follow:

```js
listOfRestautrants  = listOfRestautrants.filter(restaurant => restaurant.data.rating > 4);

```

But now the react won't re-render the page. Therefore, i have to tell the react to re-render the page whenever my list gets updated.

### what are state variable?
`State variable are variable , which whenever gets updated, react re-renders the components`
These maintain the state of an component.
A local state variable have its scope inside the function
#### Import of State variable 
```js
import {useState} from "react"
```
So, i will use the following 
1) `useState()`

```js
const [NameOfStateVariable, ModificationFunctions(NewValue)] = useState(DefaultValue)

const [ListOfRestaurants, setlistOfRestaurants([New Dataset])] = useState([Default value Dataset])
```
Can be used as a normal variable

#### Note : Hooks/state Variables can't be directly modified using '=' sign.

## Reconcilation Algo of React
Also known as `ReactFibre`

## Virtual Dom
It is an representation of the actual dom
React objets are basically Virtual-DOM.

## DIff Algo
Finds difference b/w old-virtual-dom and the update-virtual-dom. And will update the dom on every update cycle. 

## Hooks Rule:
There are 3 rules for hooks:

1) Hooks can only be called inside React function components.
2) Hooks can only be called at the top level of a component.
3) Hooks cannot be conditional 