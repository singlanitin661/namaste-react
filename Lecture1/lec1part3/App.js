// const root = document.getElementById("root") ;
// const heading = document.createElement("h1") ;
// heading.innerHTML = "Hello from JS" ;
// root.appendChild(heading) ;

const root = ReactDOM.createRoot(document.getElementById("root")) ;
const heading = React.createElement("h1" , {} , "Hello from React!") ;
root.render(heading) ;