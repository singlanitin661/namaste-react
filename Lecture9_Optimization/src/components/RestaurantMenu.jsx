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
    console.log("Hey")
    const {name,cuisines,  costForTwo} = resInfo?.cards[0]?.card?.card?.info

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
