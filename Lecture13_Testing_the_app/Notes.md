# Writing text cases

(we are only concerned about developer testing here)

- (Developer testing)
  - **Manual Testing**
    - Manually testing whatever we have developed
    - Not good for large scale application as a change in single line may-effect another another , which in term affect another and so on.

  - **Writing the test cases**
    -

## Three types of testing that we can do as an developer

- Unit testing
  - Testing a react components in isolation
  - Example might include testing only the header component whether it renders properly or not?

- Integration testing
  - Testing the intergration of the components
  - i.e. in a big scale application, the components talk to each other

- End-to-end testing (e2e testing)
  - testing the application from the time user lands on the webpage till the time user leaves the web-site
  - Tools like cybrus, puppetier

(As an developer we are only concerned about the first two types of testing)

## But why do we even need test-cases?

- Because small change in code(i.e. evenm a change in single line) may introduce bug through out the application.
- 


## Libraries going to be used

- **React testing library**
  - One of the most standard libraries to write test cases
  - Built on a DOM testing library
  - It automatically comes along with Create React App, but since we have implemented everything from scratch, we do require to install it.
  - Uses **Jest** (it is a standard JavaScript testing framework when it comes to writing test cases)
    - Jest Installation
      - `npm install -D jest`
    - But using it with Babel (our JS compiler) requires some additional dependencies
      - `npm install --save-dev babel-jest @babel/core @babel/preset-env`
    - Also, a configuration is required
      - Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:
        ```js
        module.exports = {
          presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };
        ```
      - However, an issue arises as Parcel also sets some configuration for Babel, and Jest also does. Now, they both conflict with each other. So, we have to change the Parcel behavior.
        - [Link To Parcel-jest](https://parceljs.org/languages/javascript/#usage-with-other-tools)
        - Usage with other tools
        - **Parcel Usage with other tools**
        - While Parcel includes transpilation by default, you may still need to use Babel with other tools such as test runners like Jest, and linters like ESLint. If this is the case, you may not be able to completely remove your Babel config. You can make Parcel ignore your Babel config instead, which will have performance benefits and prevent the other issues described above.

        - To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.
        - create a file namely `..parcelrc`
        ```.parcelrc
        {
          "extends": "@parcel/config-default",
          "transformers": {
            "*.{js,mjs,jsx,cjs,ts,tsx}": [
              "@parcel/transformer-js",
              "@parcel/transformer-react-refresh-wrap"
            ]
          }
        }
        ```
        - This will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.

  - Installation
    - `npm i -D @testing-library/react`

- To do the testing , we will run : `npm run test` (If we get `no test cases found`, that means we have successfully set up the jest, babel , parcel)

- **Writing jest configuration**
  - `npx jest --init`
    - Typesctript : n
    - test-env : jsdom
      - The test cases we have written do not run on browsers, they will need a run-time/env to get executed, therefore jsdom is used
      - `jsdom` is a JavaScript implementation of the DOM (Document Object Model). It allows you to create a DOM environment in Node.js, making it possible to work with the DOM in a server-side environment.
    - Coverage report : y
    - provider : babel
    - clear mock calls : y
  - **jsdom installation**
    - `npm install -D jest-environment-jsdom`


## Writing test cases

- written in components > `__tests__` folder.
  - FunFact : `__` is known as `dunderMethod`
- Have an extension of `js` or `jsx`
- Or can have end with `.test.js`, for example in case of header i will write `Header.test.js` or `Header.test.ts` or `Header.spec.js` or `Header.spec.ts`

- Example, suppose i have written a sum function 
```js
export const sum = (a, b){
  return a+b;
}
```

Now, i will make a `sum.test.js` as follow
```js
import {sum} from "../sum";

//function name should be test
// take an string , which is basically tells what is the purpose of writing this function
// secondly an callback function.

test("Sum function should calc the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
})

```

Now, do :`npm run test`

## Writing test cases for react (unit testing)

- Lets check if the contact-us page is loading or not?
- so i will try to render it and see if it renders or not.
`ContactUsComponent`
- to use `ToBeInDocument`, we are required to install `npm install -D @testing-library/jest-dom`

```js
import { render, screen } from "@testing-library/react"
import ContactUsComponent from "../Contact"
import "@testing-library/jest-dom"

//May also write "it" in place of "test"
test("should load contact-us component", ()=>{
    // ideally the contact-us hould be rendered to jsdom
    render(<ContactUsComponent/>);

    //But what to check? Lets say we want to check for heading

    //screen is also an object that comes from the testing-library
    // will find all the heading inside the contact-component and return
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

})
```

But we have not enables jsx inside jest, so we will do
`npm install -D @babel/preset-react`

- iNclude the babel config

  ```babel.config.js
  module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
  ```

  - This will help our babel to conver the jsx code into an html code so that it can read properly

-getByRole => used to find button , heading or any html element
-getByTest ==> used to find text on the page

- getAllByplaceholderText

- **All  get queries return us some react elements**
- **Whenever we want to deal with multiple elements we are required to use`getAll`**

```js
test("should load two input boxes", ()=>{
   
    render(<ContactUsComponent/>)

    const InputBoxes = screen.getAllByRole("textbox")
    console.log(InputBoxes) //=>this is basically react-element
    expect(InputBoxes.length).toBe(2);
    //or can also use a not
    expect(InputBoxes.length).not.toBe(3)

})
```

## Grouping test cases together

```js
describe("Contact-us Page test cases", ()=>{
    //All the test cases here
})
```

