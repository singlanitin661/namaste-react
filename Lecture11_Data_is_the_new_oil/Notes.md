
  const toggleSection2 = () => {
    setSection2Open(!section2Open);
    setSection1Open(false); // Close other sections when this is opened
  };

  return (
    <div>
      <AccordionSection
        title="Section 1"
        content="Content for section 1."
        isOpen={section1Open}
        onToggle={toggleSection1}
      />
      <AccordionSection
        title="Section 2"
        content="Content for section 2."
        isOpen={section2Open}
        onToggle={toggleSection2}
      />
    </div>
  );
};

export default Accordion;
```

In this example:

- The `Accordion` component manages the state (`section1Open` and `section2Open`) and passes it down to the `AccordionSection` components as props.
- Each `AccordionSection` component receives the state and callbacks as props, allowing them to update the state in the parent component.

This pattern makes it easy to add more sections to the accordion without duplicating state management logic in each section. The state is lifted up to the common ancestor, promoting a more maintainable and scalable code structure.

# Props Drilling /React-context

**Problem** : Props Drilling
**Solution** : React context `createContext`


- data flows in one dirn in react i.e. from parents to children
- when app is big, a lot of nesting will be there.
- **Problem** we can't directly pass the data from level 1 to 3 or 3+.
- To make global data, `react-context is used`. The example of global-data can include :
    - Logged-in info
    - Theme

## React-context
```js
import {createContext} from "react"
```

- Stored in utils as a name of `UserContext.js`

### Creation

```js
import { createContext } from "react";
//accepts the data in form of an json
const userContext = createContext({
    loggedInUser : "default User"
})

export default userContext;
```

### Accesing in functional Component (`.Provider`)

- With the help of a react-hook (`useContext`)

```js
import {useContext} from "react"
import UserContext from "../utils/UserContext"
const data = useContext(UserContext) 
```

### Accessing inside the class-based-component

```js
import UserContext from "./utils/UserContext"

<div>
    <userContext.Consumer> 
        {
            (data) => console.log(data)
        }
    </userContext.Consumer>
</div>
```

### Updating the value

```js
import userContext from "./utils/userContext"

// Hooks for updating the val
const [userName, setUserName] = useState("");

useEffect(() => {
  const data = {
    name : "Aryan Jindal"
  };
  setUserName(data.name);
})

//Now, whichever component i want to send the new values, i will wrap them insside the Provider.

<div>
  //Suppose i just wanna to modify the header
  <UserContext.Provider value={{loggedInUser : userName}}>
    <Header/>
  </UserContext.Provider>

  <Outlet>
</div>
```

Import point to note is that all the `Outlets` will still have name set as `DefaultUser` while in `header` it will be `Aryan Jindal;`

### How does nesting of provider works/ performs

```js
<div>
  <UserContext.Provider value={{loggedInUser : "Aryan"}}>
    <Component_A/> 
    <div>
      <UserContext.Provider value={{loggedInUser : "Akshay"}}>
        <Component_b/>
      </UserContext.Provider>
    </div>

  </UserContext.Provider>

  <Component_C>
</div>
```

- **Component_A** ==> Aryan
- **Component_B** ==> Akshay
- **Component_C** ==> DefaultName
