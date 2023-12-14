
import { useState } from "react"
import logo from "../../images/logo.png"

const SearchComponent = () => {
    console.log("SearchComponent")
    const [searchInputText, setSearchInputText] = useState("")
    return(
        <div className= "Search" >
            <input type="text" className="search-box" value={searchInputText} onChange={(e) => {
                setSearchInputText(e.target.value)
            }} />
            
            <button onClick={(e)=>{ //e is event
                //search/filter logic here
                console.log(searchInputText);
            }}>Search </button>
        </div>
    )
}

const HeaderComponent = () => {
    console.log("headerComponent")
    return (
        <div>
            <div className="header">
            < div className="logo-container">
                 <img src={logo} alt="logo"></img>
            </div>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
        <SearchComponent/>
        </div>
    )
}

export default HeaderComponent