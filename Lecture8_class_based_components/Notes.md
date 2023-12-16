# Class Based Components
(`Experimented on About us page`)

A normal js class

**Declaration**
```js
//as we want to use React.component therefore we are required to import the react.
import React from "react";

//extend ==> inherited from react.component, Also tells the react to keep track of this
class UserClass extends React.Component{
    //render returns some peice of jsx that will be shoen on the UI
    render(){
        return (
            <div className="user-card">
                <h2>Name : Aryan</h2>
                <h3>Location : Kurukshetra</h3>
                <h4>Contact : XYZ </h4>
            </div>
        )
    }
}


export default UserClass;
```

**Usage**
Same as simple functional component 
```js
import UserClass from "./UserClass";
const AboutComponent = () => {
   return (
      <UserClass name={"Aryan Jindal from class"}/>
   )
}
```

### Passing props inside the class based component

**Passing** same as functional component
**recieve** declare the `constructor, super(props)` and acess as `{this.props.propertyName}`. Read the comments below for better understanding
```js
//constructor should be explicitly declared when we are required to pass the parameters
    constructor(props){
        //must use super(props)
        //Because, in JavaScript, a child class constructor must call super() before accessing this. In the context of a React component, it's also common to pass props to the super constructor.
        //this also enables us to use "this.props.property"
        super(props)

        console.log(props)
    }

//To access the passed variable :
<h2>Name : {this.props.name}</h2>
// or we may even extract them using tehe follwoing method 
const {name, location} = this.props;


```


### Creating State variables in the class

`Loading a class based component ` means `creating an instance of the class`.
we initalize an `this.state` inside the constructor
like
**initialisation**
```js
constructor(){
  //state is an big object that will contain all the state variables
  this.state = {
    count : 0 //0 is the initaial value of the state
    count2 : 2
  }
}
```

**usage**
```js
//class based component state usage
<h1>Count value is {this.state.count}</h1>
<h1>Count2 value is {this.state.count2}</h1>
```

**updation of state variables**
```jsx
<button onClick={()=>{
    //bellow one is a wrong way. This will create inconsistencies in the code.
    // this.state.count+=1;

    this.setState(
        //pass an object containing the updated value of the state variables.
        //only values passewd inside it willbe updated, others wont be touched. i.e count2 won't be affected in this updation.
        {
            count : this.state.count+1
        }
    )
}}>IncreaseCount</button>
```

## How the class based components are loaded/mounted/putted on the we page
1) class is called
2) class-constructor is called
3) render is called
4) React updates the DOM
5) componentDidmount is called

**Conculusion** 
if two classes are there say `parent` and `child1` and `child2`, where parent uses the child class an as component

- Parent-constructor ==> parent-render  ==> child1-constructor ==> child1-render ==> child2-constructor ==> child2-render ==> child1-componentDidMount==> child2-componentDidMount ==> parent-componentDidMount
- React batches the render process for these two childs so that DOm manupulation happens only once since dom manipulation is the most costliest operation. and similary react batches the componentDidMount.

## `componentDidMount`
0) Code :
```js
class UserClass extend Component{
  constructor(props){
  }
  componentDidMount(){
    console.log("done")
  }
  render(){

  }
}
```
1) Called when the class-based-component gets mounted on the DOM.
**Note** : not used inside the functional component
2) 
  - **Usecase** to make `API call` 
  - **why** 
    - Earlier we used to use `useEffect` because for better shimmer-effect and react doent have to wait fot the API call to return and then render the component
    - to do the same in class-based-component we will use `componentDidMount`
3) **Fetching data:**
```js
async componentDidMount(){
      const data = await fetch("https://api.github.com/users/AryanJindal")
      const json = await data.json();

      console.log(json)

      this.setState({
          userInfo : json
      })
}
```

## `componentDidUpdate`
### [Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

```markdown
1) Mounting-Life cycle
  Constructor(dummyData)
  render(dummyData)
  <html dummmy>
  ComponentDidMount ==> API call ==> this.setState
2) Updation
  render(API data)
  html is loaded with new API data
  componentDidUpdate
3) Unmounting
  componentWillUnmount (called just before component is unmounted i.e. component is about to disappear)
```