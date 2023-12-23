
import User from "./User";
import UserClass from "./UserClass";

const AboutComponent = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <h2 className="text-lg text-gray-600 mb-6">
        Welcome to the about page of the dummy swiggy clone
      </h2>
      <User />
      <UserClass name={"Aryan Jindal from class"} />
    </div>
  );
};

export default AboutComponent;
