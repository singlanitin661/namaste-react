import {useState, useEffect} from "react";
import ShimmerComponent from "./Shimmer";
const styleCard = {
    backgroundColor : "#f0f0f0"
}
const resList = []
const Swiggy_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"


const RestaurantComponent = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img src={props.image.search("example") == -1 ? props.image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq"} alt={props.name + " Image"} ></img>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating + "/5⭐"} </h4>
            <h4>{props.eta + " mins away"}</h4>
        </div>
    )
}

const BodyComponent = () => {

    const [listOfRestaurants, setListofRestaurants] = useState(resList);
    const fetchData = async () =>{
        const data = await fetch(Swiggy_API);
        const dataInJSON = await data.json();
        console.log(dataInJSON);
        // setListofRestaurants(dataInJSON.data.cards[2].data.data.cards)
    }

    useEffect(()=>{
        fetchData();
    })
    if(listOfRestaurants.length === 0){
        return <ShimmerComponent/>
    }
    return (
        <div className="body">
            {/* <div className="search">
                Search
            </div> */}
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("button clicked")
                }}
                >Top Rated Rest</button>
            </div>
            <div className="restaurant-container">
                {/* listOfRestaurants.map((rest) => (<RestaurantComponent key={restaurant.data.id} resData = {restaurant}/>)) */}
            </div>
        </div>
    )
}

export default BodyComponent