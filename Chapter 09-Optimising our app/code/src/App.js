import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
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

// Create a router for the application using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantInfo /> },
    ],
  },
]);

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the RouterProvider
root.render(<RouterProvider router={appRouter} />);
