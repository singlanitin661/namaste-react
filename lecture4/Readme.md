### Inline style in css
```js
const styleCard = {
    backgroundColor : "#f0f0f0"
}
const RestaurantComponent = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghna Foods</h3>
        </div>
    )
}
```

### Using Image tag in React/JSX
1) First import the image with the following way
```js
import logo from "./images/logo.png"
```

2) Now, you can use the image as an js object like as follow
```js
    <img className="logo" src={logo} alt="logo"/>
```

##### Remember :
Passing direct path to local image inside the folder do not work in jsx.

### Props(ShortHand for properties)

1) Used for dynamic components

2) Passing a prop to a component is Basically are just normal arguements to a function

3) Passed as an js object

#### Defining a component with props
```js
const RestaurantComponent = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img src={props.image} alt={props.name + " Image"} ></img>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating + "/5⭐"} </h4>
            <h4>{props.eta}</h4>
        </div>
    )
}

//Cool and easy style
const RestaurantComponent2 = (name, image, cusine, rating, eta) => {
    return (
        <div className="res-card" style={styleCard}>
            <img src={image} alt={name + " Image"} ></img>
            <h3>{name}</h3>
            <h4>{cusine}</h4>
            <h4>{rating + "/5⭐"} </h4>
            <h4>{eta}</h4>
        </div>
    )
}
```

#### Using the props
```js
<RestaurantComponent name="MeghanaFoods" cusine="" rating="4.3" eta="38" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq" />

//or for passing every restaurnt from an array can be done by the following way
restarantArray.map(restaurant => <RestaurantComponent propsKey={restaurant}>)
```

### Config Driven UI
System Design ==> front-end
Lets talk of swiggy, Suppose one offer is available in chennai but not in delhi. Now, I am not going to make seperate application for both the cities.

Controling the UI based on the data frmo the backend

1) Backend will sends an Config file to the user's computer based on some logic, 
2) which will be used to render the frontend for the user

### Optional chaining

Optional chaining is a feature in programming languages that allows you to access properties or call methods of an object without explicitly checking if each level of the property chain exists. It helps to simplify code and avoid errors when dealing with potentially undefined or null values.

In many programming languages, attempting to access a property or call a method on an undefined or null value would result in an error. Optional chaining provides a way to gracefully handle such situations.

```javascript
// Without optional chaining
if (user && user.address && user.address.city) {
    console.log(user.address.city);
} else {
    console.log("City information not available");
}

// With optional chaining
console.log(user?.address?.city ?? "City information not available");
```

In the example above, the optional chaining operator (`?.`) is used to access the `city` property of the `address` property of the `user` object. If any intermediate property (`user`, `address`, or `city`) is `null` or `undefined`, the expression short-circuits, and the result is `undefined`. The nullish coalescing operator (`??`) is then used to provide a default value if the result is `undefined`.


### React Warning
#### Warning: Each child in a list should have a unique "key" prop

for the code :
```js
<ul>
  {["Item1", "Item2", "Item3"].map(item =>
  <li>{item}</li>
  )}
</ul>
```

The warning is due to we have not provided any key which can help react to differentiate in b/w elements.
So, now whenever I want to modify a particular element react will have to re-render the whole tree, which leads to time and resource waste, therefore we pass a ```key``` (A reserved keyword and an unique identifier) to help react what exactly it requires to do.
```js
<ul>
  {["Item1", "Item2", "Item3"].map(item =>
  <li key="{item}">{item}</li>
  )}
</ul>
```
Moreover : Keys do not have to be unique globally. They just need to be unique across sibling elements.
Also, index of array is not recommended to be used as an key if the array is not static.

Not key <<< Index as an Key <<< Unique key (Best practice)

### Extra
A frontend developer should ask the backend developer that how the api is designed . What all paramenters, i will be getting from it

Images are generally put over cdn