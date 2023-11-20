import React from "react";
import ReactDOM  from "react-dom/client";


//React.createElement => Ultimately its an object, React.createElement it creates an OBJECT.
//When we render to the dom, then it becomes a Html element.
// const heading = React.createElement('h1',{id:"heading"},'Namaste-React');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// console.log(heading);

//This is not a developer-friendly.

//JSX:-Jsx is not a part of react, both are seperate thing.
//JSX is not a html in javascript.
//JSX is a Html-like syntax or Xml-like syntax..

//Using JSX:-
const heading = <h1 id="heading">Namaste-React from JSX 🚀</h1>
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

