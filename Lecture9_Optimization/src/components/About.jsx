import User from "./User";
import UserClass from "./UserClass";
const AboutComponent = () => {
   return (
    <div>
        <h1>About</h1>
        <h2>Welcome to the about page of the dummy swiggy clone</h2>
        <User/>
        <UserClass  name={"Aryan Jindal from class"}/>
    </div>
   )
}

export default AboutComponent;