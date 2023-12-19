# Jo dikhta hai wo bikta hai

**Various CSS methods **
- Normal css
  - Material UI
  - Chakra UI
  - Bootstrap
  - Ant design(Second most popular react UI library)
- sass and scss (Do not recommended)
- `StyledComponent`
- Tailwind CSS

# Tailwind CSS
- Rapidly build modern websites without ever leaving you HTML/JSX/Angular/React

## Configuring Tailwind CSS

**Way for installation**
1) Go to https://tailwindcss.com/docs/installation/framework-guides
2) Choose the method you are going to use. `parcel` in our case
3) Installation 
```bash
npm install -D tailwindcss postcss
npx tailwindcss init #creates an  tailwind.config.js file inside our project
```
`postcss` is tool for transforming css with js. parcel needs postcssrc to read tailwind
4) Configuring Post css
  - Create a `.postcssrc` file in your project root, and enable the tailwindcss plugin.
  - paste this inside that. This will tell parcel that we are using tailwind in our project. Whereever you find tailwind classes , understand them
  ```js
  {
    "plugins": {
      "tailwindcss": {}
    }
  }
```
5) Configuring tailwind css file
  - Modify content of tailwind css  to ` ["./src/**/*.{html,js,ts,jsx,tsx}"],`
  - The above is the list of all the files where i can use tailwind

6) Modify index.css file and write this
```index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
This is basically importing tailind inside index.css

## Working with tailwind
(Better to install `Tailwind Css IntelliSense` extension from vscode) 
Tailwind is basically writing some className, and that classname will be rendered as css for that component/div/p/span/img or whatever.

## Advantages
- Not have to move between files (component and css file)
- Lightweight (Suppose i am using `m-4` 100times in my code , then this doent mean that taiolwind will write 100x m-4, it will declare the m4 class only once)

## Disadvantages
- to many classes sometimes which makes the code less readable
- Sometimes, seperatly apply to every element like points of a list
