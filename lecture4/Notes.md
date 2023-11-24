### Inline style in css
```
jsx
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
```
import logo from "./images/logo.png"
```

2) Now, you can use the image as an js object like as follow
```
    <img className="logo" src={logo} alt="logo"/>
```

##### Remember :
Passing direct path to local image inside the folder do not work in jsx.