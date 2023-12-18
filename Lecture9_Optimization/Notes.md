# Optimization of the App
<hr>

Single responsibility function ==> modularity ==> testing gets easy

# Custom Hooks 
Hooks are like utility function.
Majorly used to abstract code.

## Why to create custom Hooks?
It is not manadatory but code looks more readable, modular, re-usable.

## creation rule
- stored in `utils` folder
- seprate file for every hook
- name is recommended to start with `use` so that react can get to know it is an hook. Elsewise linter(Eslint) might throw an error

## Example :
**Old code:**
```js
import React from 'react'
import { useEffect, useState } from 'react'
import ShimmerComponent from './Shimmer'
import { useParams } from 'react-router-dom';
let i =0;
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const params = useParams();
    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{
        
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ params.resID +"&submitAction=ENTER");
        const json = await data.json();
        // console.log(json)
        setResInfo(json.data)
    }
    
    if(resInfo === null){
        return <ShimmerComponent/>
    }
    const {name,cuisines,  costForTwo} = resInfo?.cards[0].card.card.info
    console.log(i);
    i++;
    console.log(resInfo)
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards
    console.log(itemCards)
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <p>{"Cost for Two: Rupees "+  costForTwo/100}</p>

      <ul>
        {
            itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}, Price= {itemCards[0].card.info.price/100}</li>)
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu

```
**NewCode of Hook**
Here the hook will fetch the data for me.
```js
import { useEffect, useState } from "react";
//want this hook to accept restaurantId as input and output restaurantInfo
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const Link = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId/" + resId.resID;
        const data = fetch(Link);
        const json = await data.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu
```

**New Restaurant-card**
where the restaurant-card has only one single responsibility to show the menu
```js
import React from 'react'
import ShimmerComponent from './Shimmer'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

   const resId = useParams();
   resInfo = useRestaurantMenu(resId);
    if(resInfo === null){
        return <ShimmerComponent/>
    }
    const {name,cuisines,  costForTwo} = resInfo?.cards[0].card.card.info

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Hey</h2>
      <h2>{cuisines.join(", ")}</h2>
      <p>{"Cost for Two: Rupees "+  costForTwo/100}</p>

      <ul>
        {
            itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}, Price= {itemCards[0].card.info.price/100}</li>)
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu

```

# Optmization Part
Bundler merges all files into one . So those small file alltogther get converted into one `index.js` file of same `MB` size. So , now a lot of time will be required to download(get) that file to local servers.
But also it is not the case that we dont do bundling as then browsers will have to make 1000's of calls to get all those files.

So now, bundling is req, but also smaller size bindlews are req.
So here comes out here `chunking` or `Code-splitting` or `dynamic-bundling` or `on-demand-loading`

## Chunking
The logical sepration should be such that every bundle should have enough code for a feature.

Like uber can have different bundles for each
- UberEats
- UberCabs
- UberDelievers

Suppose our app has a very big component namely `Grocery.js` and url for it i.e. `/grocery`

```js
//do not directly import the grocery component instead do this

import {lazy} from "react"

const Grocery = lazy(
  () => {
    //this import is not same as upper wale imports.
    import("./components/Grocery") 
    //takes the path of the component
  }
)

appRoute = [{
  path :"/grocery"
  element = <Grocery/>
}]
```
but the above code doen't fully work and we get the following error
`a component suspended while responding to synchronous input`
because as soon as i try to go to grocery page,
0) A call will be made to get `grocery` component, but ofc it will take some  milli seconds and js and react do not wait
1) react want to render the `grocery` component which is not present as of now in index.html
2) So , react suspends the rendering and throws an error


Therefore , now we will use `suspense` and wrap our `grocery` inside it
So, now the above code gets modified to 

```js
import {lazy, Suspense} from "react"

const Grocery = lazy(
  () => {
    //this import is not same as upper wale imports.
    import("./components/Grocery") 
    //takes the path of the component
  }
)

appRoute = [{
  path :"/grocery"
  element = <Suspense fallback=> {<h1> Loading...........</h1>}><Grocery/> </Suspense>
}]
```

The `fallback` takes either jsx or any other component that should get rendered while `grocery` file do not reaches us.