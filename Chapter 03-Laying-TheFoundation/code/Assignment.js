import React from 'react';
import ReactDom from 'react-dom/client';


//1.
//Create a nested header element using React.createElement(h1,h2,h3 inside a div with class "title")
//There are 3 Arguments which React.createElement which takes (Type of the element to create,Props for the div element, child of the element)


// const element = React.createElement(
//     'div',               // Type of element to create
//     { className: 'title' },  // Props for the div element (class)
//     React.createElement('h1', null, 'Heading 1'),  // Child element 1
//     React.createElement('h2', null, 'Heading 2'),  // Child element 2
//     React.createElement('h3', null, 'Heading 3')   // Child element 3
//   );
  
// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(element);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Create the same element using JSX:-

// const element = <div class='title'>
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
// </div>;

// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(element);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Create a functional component smae with JSX:-

// const ElementFunctionalComp = ()=>{
//     return <div class='title'>
// <h1>Heading 1</h1>
// <h2>Heading 2</h2>
// <h3>Heading 3</h3>
//     </div>
// };

// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(<ElementFunctionalComp/>);

// const ElementFunctionalComp = ()=>{
//     return <div class='title'>
// <h1>Heading 1</h1>
// <h2>Heading 2</h2>
// <h3>Heading 3</h3>
//     </div>
// };


//Using parentheses:-
// const FunctionalComponent = ()=>(
//      <div class='title'>
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
// </div>
// );

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<FunctionalComponent/>)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4.Composition of component (Add a component inside another)

const Title = () => <h1>Namaste from composition of component</h1>;

const HeadingComponent = () => (

<div id="title-name">

    <Title/>

    {100+200+300}

<h1>Namaste from composition of component</h1>

</div>

);

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent/>)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5.Create a Header Component from scratch using Functional components with JSX:-
//Add a logo on left.
//Add a search bar in middle.
//Add user icon on right.
//Add Css to make it look nice.


const HeaderComponent = () =>(
<div className='header-container'>
<div className='logo-container'>
    <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='Logo' className='logo'/>
</div>
<div className='search-bar-container'>
    <input type='text' placeholder='Search...' className='search-bar'></input>
</div>
<div className='user-icon-container'>
<i class="fa-solid fa-user"></i>
</div>
</div>
);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<HeaderComponent/>)





