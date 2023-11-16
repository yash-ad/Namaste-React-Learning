import React from 'react';
import ReactDOM from 'react-dom/client';



///.React-Components:-
//1.Class based components- OLD way - Uses javascript classes
//2.Functional Components- NEW way - Uses javascript functions


//.React functional component:-
//React functional component is a function that returns JSX code.
//JSX is a ReactElement.

const HeadingComponent = ()=>{
    return <h1>Namaste-React from functional component</h1>
};

//We can write like this and its valid :-
const HeadingComponentTwo = ()=> <h1>Namaste-React from functional component</h1>


const HeadingComponentThree = ()=>{
    return <h1>Namaste React from functional component🚀</h1>
};

//So how to render the function component:-

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HeadingComponentThree/>);


//Component - compisition:-

const Title = ()=> <h1>Namaste React component compsition</h1>;

const HeadingTitle = ()=>(
    <div>
<Title />
{100 + 200 } 
        <h1>Namaste-React with component composition</h1>
    </div>

)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingTitle />);
