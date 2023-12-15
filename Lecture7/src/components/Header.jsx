
import { useState } from "react"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/cart">cart</Link></li>
                </ul>
            </div>
            
        </div>
        <SearchComponent/>
        </div>
    )
}

export default HeaderComponent