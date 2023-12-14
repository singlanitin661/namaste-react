
import logo from "../../images/logo.png"


const HeaderComponent = () => {
    return (


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
    )
}

export default HeaderComponent