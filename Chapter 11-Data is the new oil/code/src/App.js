import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy,Suspense } from "react";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";

// Define the layout of the entire application
const AppLayout = () => {
  return (
    <div className="App-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

//In React, the lazy function is used to dynamically import a component. 
const About = lazy(()=> import("./components/About"));

const Contact = lazy(()=> import("./components/Contact"));


// Create a router for the application using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />}, 
      { path: "/restaurants/:resId", element: <RestaurantInfo /> },
      //<Suspense> is a React component that is used for handling components with asynchronous behavior, such as lazy-loaded components or data fetching.
      { path: "/about", element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense> },
      { path: "/contact", element:<Suspense fallback={<div>Loading...</div>}><Contact/></Suspense>  },
    ],
  },
]);

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the RouterProvider
root.render(<RouterProvider router={appRouter} />);
