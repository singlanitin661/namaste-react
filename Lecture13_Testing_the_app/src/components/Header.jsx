import { useState } from "react"
import { logo } from "../utils/constants";
import { Link } from "react-router-dom"

export const SearchComponent = ({listOfRestaurants, setListofRestaurants}) => {
    const list2 = [...listOfRestaurants];
    const [searchInputText, setSearchInputText] = useState("");
    const handleSearch = () => {
        const filteredRestaurants = list2.filter(restaurant =>
          restaurant.info.name.toLowerCase().includes(searchInputText.toLowerCase())
        );
        setListofRestaurants(filteredRestaurants);
        console.log(list2)
        if(searchInputText == ""){
            setListofRestaurants(list2)
            console.log("listSet")
        }
      };
    return (
        <div className="flex items-center m-4">
            <input
                type="text"
                className="border border-solid border-gray-400 px-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={searchInputText}
                onChange={(e) => {
                    setSearchInputText(e.target.value);
                }}
                placeholder="Search"
            />
            <button
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleSearch}
                >
                    Search
                </button>
                
            
        </div>
    );
};

import { useSelector } from "react-redux/es/hooks/useSelector";
const HeaderComponent = () => {
    //The below hook will give us access to the store
    //Subscribing to thestore using an selector
    const cartItems =  useSelector((store) =>{
        //I want access to only cart part therefore i will write
        return store.cart.items
    })
    return (
        <div>
            <div className="header bg-red-400 flex">
                <div className="logo-container">
                    <img src={logo} className="w-[150px] rounded-2xl" alt="logo" />
                </div>

                <div className="flex items-center justify-around  w-full">
                    <span className="text-xl font-bold text-white">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-white text-xl font-bold">
                        <Link to="/about">About Us</Link>
                    </span>
                    <span className="text-white text-xl font-bold">
                        <Link to="/contact-us">Contact</Link>
                    </span>
                    <span className="text-white text-xl font-bold">
                        <Link to="/cart">
                        Cart({cartItems.length} items)
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;

