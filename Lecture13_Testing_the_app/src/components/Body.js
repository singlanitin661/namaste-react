import {useState, useEffect} from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useUsersOnlineStatus from "../utils/useUsersOnlineStatus";
import { SearchComponent } from "./Header";
const styleCard = {
    backgroundColor : "#f0f0f0"
}
const resList = []
const Swiggy_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RestaurantComponent = (props) => {
    // console.log(props)
    const { resData } = props;
    console.log(resData)

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;
    // console.log(cuisines);
    // console.log(typeof cuisines);

    return (
        <div className="res-card h-[400px] w-60 m-2 p-2 rounded-2xl  bg-gray-200 hover:bg-gray-300" >
            <img className="w-56" src={CDN_URL + cloudinaryImageId} style={{"border-radius" :"10px"}} ></img>
            <h3 className="text-xl font-bold text-black my-2">{name}</h3>
            <h4 className="text-lg  text-black my-2">{cuisines.join(', ')}</h4>
            <h4 className="text-lg  text-black my-2">{avgRating + "/5⭐"} </h4>
            <h4 className="text-lg  text-black my-2">{deliveryTime} </h4>
        </div>
    )
}

const withPromotedLabel = (FunctionalComponent) => {
    //returning a component.
    //look , where the props are passed
    return (props) => {
        return(
            <div>
                <h1  className="absolute text-white bg-black rounded-xl p-2">Promoted</h1>
                <FunctionalComponent resData={props} />
            </div>
        )
    }
}

const BodyComponent = () => {
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const fetchData = async () =>{
        const data = await fetch(Swiggy_API);
        const dataInJSON = await data.json();

        setListofRestaurants(dataInJSON.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    
    
    useEffect(()=>{
        fetchData();
    }, [])
    const Online = useUsersOnlineStatus();
    if(listOfRestaurants.length === 0){
        return <ShimmerComponent/>
    }

    
    if(Online === false){
        return (
            <div className="prose"> 
                <h1> it seems like you are offline</h1>
                <h2> Please Check your internet Connectivity once again</h2>
            </div>
        )
    }
    return (
        <div className="body">
            
            <div className="filter flex  justify-center items-center">
                <SearchComponent listOfRestaurants={listOfRestaurants} setListofRestaurants={setListofRestaurants}/>
                <button className="filter-btnml-2 bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 h-[46px]" onClick={()=>{
                    // console.log("button clicked")
                    const filtered = listOfRestaurants.filter(res => res.info.avgRating >= 4.5)
                    setListofRestaurants(filtered)
                    // cons
                }}
                >Top Rated Rest</button>
            </div>
            <div className="restaurant-container flex flex-wrap justify-center">
               { 
                listOfRestaurants.map((restaurant) => 
                    

                   
                        <Link 
                            to={"/restaurants/"+restaurant.info.id} 
                            key={restaurant.info.id} > {
                                restaurant.info.avgRating >=4.4 ? withPromotedLabel(RestaurantComponent)(restaurant.info): <RestaurantComponent resData={restaurant.info} />
                            }
                        </Link>
                    
                )
               }                
            </div>
        </div>
    )
}



export default BodyComponent