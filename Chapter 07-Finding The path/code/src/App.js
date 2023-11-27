import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";




const AppLayout = ()=>{
    return(
<div id="App-container">
<Header/>
<Body/>
<Footer/>
</div>
    )
};

const appRouter = createBrowserRouter([
{path:"/",
element:<AppLayout/>},

{path:"/About",
element: <About/>},

{path:"/",
element: <Contact/>},
{},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)