import {useState, useEffect} from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
const styleCard = {
    backgroundColor : "#f0f0f0"
}
const resList = []
const Swiggy_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantComponent = (props) => {
    // console.log(props)
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;
    console.log(cuisines);
    console.log(typeof cuisines);

    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL + cloudinaryImageId} style={{"border-radius" :"10px"}} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + "/5⭐"} </h4>
            <h4>{deliveryTime} </h4>
        </div>
    )
}


const BodyComponent = () => {

    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const fetchData = async () =>{
        const data = await fetch(Swiggy_API);
        const dataInJSON = await data.json();
        // console.log( dataInJSON.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.length);
        console.log("Hey")
        setListofRestaurants(dataInJSON.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    
    useEffect(()=>{
        fetchData();
    }, [])
    if(listOfRestaurants.length === 0){
        return <ShimmerComponent/>
    }
    // return <h1>HJello</h1>
    return (
        <div className="body">
            
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("button clicked")
                }}
                >Top Rated Rest</button>
            </div>
            <div className="restaurant-container">
               {
                listOfRestaurants.map((restaurant) => 
                    
                   
                        <Link to={"/restaurants/"+restaurant.info.id  } key={restaurant.info.id} > <RestaurantComponent resData={restaurant.info} /></Link>
                    
                )
               }                
            </div>
        </div>
    )
}



export default BodyComponent