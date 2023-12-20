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

## Tailwind Documentation

[Tailwind CSS documentation](https://tailwindcss.com/docs).

Go to the web-site.
Press (`Ctrl + K`), and start typing whatever you wanna find



## Some examples of Tailwind

1) **Layout and Box Model:**
   - `container`
     ```html
     <div class="container">
       <!-- Your content here -->
     </div>
     ```
   - `mx-auto` (margin auto)
     ```html
     <div class="mx-auto">
       <!-- Your content here -->
     </div>
     ```
   - `mx-4` (margin in x-axis for 4 units)
     ```html
     <div class="mx-4">
       <!-- Your content here -->
     </div>
     ```
   - `p-4` (padding in all directions)
     ```html
     <div class="p-4">
       <!-- Your content here -->
     </div>
     ```
   - `w-1/2` (width half of the parent container)
     ```html
     <div class="w-1/2">
       <!-- Your content here -->
     </div>
     ```
   - `h-64` (height 64 pixels)
     ```html
     <div class="h-64">
       <!-- Your content here -->
     </div>
     ```

2) **Typography:**
   - `text-2xl` (text size extra-large)
     ```html
     <p class="text-2xl">Your text here</p>
     ```
   - `font-serif` (font family serif)
     ```html
     <p class="font-serif">Your text here</p>
     ```
   - `leading-6` (line height 6)
     ```html
     <p class="leading-6">Your text here</p>
     ```
   - `tracking-wider` (letter spacing wider)
     ```html
     <p class="tracking-wider">Your text here</p>
     ```

3) **Colors:**
   - `text-blue-500` (text color blue)
     ```html
     <p class="text-blue-500">Your text here</p>
     ```
   - `bg-gray-200` (background color gray)
     ```html
     <div class="bg-gray-200">
       <!-- Your content here -->
     </div>
     ```
   - `border-red-700` (border color red)
     ```html
     <div class="border border-red-700">
       <!-- Your content here -->
     </div>
     ```

4) **Flexbox:**
   - `flex`
     ```html
     <div class="flex">
       <!-- Your flex items here -->
     </div>
     ```
   - `justify-center` (justify content center)
     ```html
     <div class="flex justify-center">
       <!-- Your flex items here -->
     </div>
     ```
   - `items-center` (align items center)
     ```html
     <div class="flex items-center">
       <!-- Your flex items here -->
     </div>
     ```
   - `flex-1` (flex property with a flex value of 1)
     ```html
     <div class="flex-1">
       <!-- Your content here -->
     </div>
     ```

5) **Spacing:**
   - `p-2` (padding of 2 units)
     ```html
     <div class="p-2">
       <!-- Your content here -->
     </div>
     ```
   - `m-6` (margin of 6 units)
     ```html
     <div class="m-6">
       <!-- Your content here -->
     </div>
     ```
   - `space-x-4` (horizontal spacing of 4 units between child elements)
     ```html
     <div class="space-x-4">
       <!-- Your flex items here -->
     </div>
     ```

6) **Responsive Design:**
   - `sm:w-1/2` (width half on small screens)
     ```html
     <div class="sm:w-1/2">
       <!-- Your content here -->
     </div>
     ```
   - `md:hidden` (hidden on medium screens)
     ```html
     <div class="md:hidden">
       <!-- Your content here -->
     </div>
     ```

7) **Hover, Focus, and Active States:**
   - `hover:bg-gray-300` (background color changes on hover)
     ```html
     <div class="hover:bg-gray-300">
       <!-- Your content here -->
     </div>
     ```
   - `focus:outline-none` (removes outline on focus)
     ```html
     <button class="focus:outline-none">Click me</button>
     ```
   - `active:text-red-500` (text color changes on active/click)
     ```html
     <button class="active:text-red-500">Click me</button>
     ```

8) **Positioning:**
   - `absolute`
     ```html
     <div class="absolute">
       <!-- Your absolutely positioned content here -->
     </div>
     ```
   - `relative`
     ```html
     <div class="relative">
       <!-- Your relatively positioned content here -->
     </div>
     ```
   - `fixed`
     ```html
     <div class="fixed">
       <!-- Your fixed position content here -->
     </div>
     ```
   - `static`
     ```html
     <div class="static">
       <!-- Your statically positioned content here -->
     </div>
     ```

9) **Border and Rounded Corners:**
   - `border` (default border)
     ```html
     <div class="border">
       <!-- Your content here -->
     </div>
     ```
   - `rounded-lg` (large rounded corners)
     ```html
     <div class="rounded-lg">
       <!-- Your content here -->
     </div>
     ```
   - `rounded-t-md` (medium rounded top corners)
     ```html
     <div class="rounded-t-md">
       <!-- Your content here -->
     </div>
     ```
   - `rounded-b-2xl` (extra-large rounded bottom corners)
     ```html
     <div class="rounded-b-2xl">
       <!-- Your content here -->
     </div>
     ```

10) **Shadows and Opacity:**
    - `shadow-md` (medium box shadow)
      ```html
      <div class="shadow-md">
        <!-- Your content here -->
      </div>
      ```
    - `opacity-75` (75% opacity)
      ```html
      <div class="opacity-75">
        <!-- Your content here -->
      </div>
      ```

11) **Display:**
    - `hidden` (hidden element)
      ```html
      <div class="hidden">
        <!-- Your hidden content here -->
      </div>
      ```
    - `block` (block-level element)
      ```html
      <div class="block">
        <!-- Your block-level content here -->
      </div>
      ```
    - `inline` (inline-level element)
      ```html
      <span class="inline">
        <!-- Your inline-level content here -->
      </span>
      ```
    - `flex` (flex container)
      ```html
      <div class="flex">
        <!-- Your flex items here -->
      </div>
      ```


12) **Text Alignment:**
    - `text-left` (left-align text)
      ```html
      <p class="text-left">Left-aligned text</p>
      ```
    - `text-center` (center-align text)
      ```html
      <p class="text-center">Center-aligned text</p>
      ```
    - `text-right` (right-align text)
      ```html
      <p class="text-right">Right-aligned text</p>
      ```

13) **Lists:**
    - `list-none` (remove list styling)
      ```html
      <ul class="list-none">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      ```
    - `list-disc` (use disc bullets)
      ```html
      <ul class="list-disc">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      ```

14) **Tables:**
    - `table` (basic table styling)
      ```html
      <table class="table">
        <!-- Table content here -->
      </table>
      ```
    - `border-collapse` (collapse table borders)
      ```html
      <table class="border-collapse">
        <!-- Table content here -->
      </table>
      ```

15) **Buttons:**
    - `bg-blue-500` (background color blue)
      ```html
      <button class="bg-blue-500 text-white">Click me</button>
      ```
    - `hover:bg-green-400` (background color changes on hover)
      ```html
      <button class="hover:bg-green-400">Hover me</button>
      ```

16) **Alerts:**
    - `bg-yellow-200` (yellow background for a warning)
      ```html
      <div class="bg-yellow-200 p-4">
        Warning: Something went wrong!
      </div>
      ```

17) **Images:**
    - `object-cover` (maintain aspect ratio when resizing)
      ```html
      <img src="image.jpg" alt="Image" class="object-cover w-full h-64">
      ```

18) **Forms:**
    - `form-input` (basic form input styling)
      ```html
      <input type="text" class="form-input">
      ```
    - `focus:outline-none` (remove outline on input focus)
      ```html
      <input type="text" class="focus:outline-none">
      ```

19) **Utilities:**
    - `transition` (apply default transition)
      ```html
      <div class="transition">
        <!-- Your content here -->
      </div>
      ```
    - `ease-in-out` (apply ease-in-out timing function to transitions)
      ```html
      <div class="transition ease-in-out">
        <!-- Your content here -->
      </div>
      ```

20) **Rounded Corners (Individual):**
    - `rounded-tl-lg` (large rounded top-left corner)
      ```html
      <div class="rounded-tl-lg">
        <!-- Your content here -->
      </div>
      ```
    - `rounded-br-sm` (small rounded bottom-right corner)
      ```html
      <div class="rounded-br-sm">
        <!-- Your content here -->
      </div>
      ```

