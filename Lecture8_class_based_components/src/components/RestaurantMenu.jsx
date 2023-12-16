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
