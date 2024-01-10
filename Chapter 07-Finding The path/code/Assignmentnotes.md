# Namaste React 🚀

## Chapter - 7

#### Finding The Path.


 # Q.1 What are various ways to add images into our App? Explain with code examples?

In React, you can use the `<img>` tag for static images or the import statement for dynamic images. Additionally, you can use popular libraries like react-images or react-bootstrap for more advanced features. Here are examples for both static and dynamic images:

Static Images:
```javascript

import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Your React App</h1>
            <img src="/path/to/your/image.jpg" alt="Description of the image" />
        </div>
    );
};

export default App;
```

Dynamic Images:
```javascript

For dynamic images, you can use the `import` statement. This assumes that your build system supports ES6 `module` syntax.

import React from 'react';
import dynamicImage from './path/to/your/image.jpg'; // Import the image

const App = () => {
    return (
        <div>
            <h1>Your React App</h1>
            <img src={dynamicImage} alt="Description of the image" />
        </div>
    );
};

export default App;

```
Using a Library (e.g., react-bootstrap):
If you're using a UI library like react-bootstrap, you can leverage their components for a more stylized approach:

```javascript
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const imageUrl = '/path/to/your/image.jpg';

    return (
        <Container>
            <h1>Your React App</h1>
            <Image src={imageUrl} alt="Description of the image" fluid />
        </Container>
    );
};

export default App;

```
1.Using the full URL of the image for the web (cdn) or any public images.

  OR

2.Adding the image into the project Drag your image into the project and Import it into the desired component.

OR

3.The correct way to structure images in your project is to add them in an images folder.Or create constants or config folder and add them or create an assets folder.


 # Q.2 What would happen if we do console.log( useState() )?

 if we use `console.log(useState())`, it will log an array with two elements to the console.The `useState` function in returns an array where the first element is current state value and the second element is a function that allows you to update the state.
 ```JSX

import React, { useState } from 'react';

const ExampleComponent = () => {
  console.log(useState());

  // The rest of your component logic...
};
 ```
 In the browser when we logged into the console we get an array [undefined,function].The first item in an element state is undefined and the second item in an array is  setState function is `bound dispatchSetState`.


  # Q.3 How will useEffect behave if we don't add a dependency array ?


`syntax of useEffect()`:-

 * useEffect(()=>{},[])

1.When the dependency array is not included in the arguments of `useEffect(()=>{})`,the call back function will be executed everytime the component is rendered and re-rendered

2.When the dependency array is an empty in the arguments of `useState(()=>{},[])` hook,the call back function will be executed only one time during the intial render of the component.

3.When the dependency array contains a condition `useState(()=>{},[condition])` hook,the callback function will be executed one time during the intial render of component and also re-render if there is a change in the condition.


 # Q.4 What is SPA?

 `SPA stands for Single Page Application` Its a web application that dynamically updates the webpage with data from server without reloading/refreshing an entire page. and SPA is sometimes referred to as a Single-page-interface.


 # Q.4 What is the difference between client-side roting and server-side routing?

 * In server-side routing or rendering every change in URL,http request is made to server to fetch the webpage and replace the current webpage with the older one.

* In client-side routing or rendering during the first load,the webapp is loaded from server to client,after which whenever there is a change in URL,the router library navigates the user to the newpage without sending any requests to backend.All `single page applications` uses `Client side routing or rendering`


✅ How useState and useEffect work - detailed explanation!

✅ Creating Routes in React with React Router DOM.

✅ Route configuration and handling errors with custom components.

✅ Children Routes and the use of Outlet Component.

✅ Understanding why React is called a Single Page Application (SPA).

✅ Importance of using Link `<Link>` Component instead of anchor `<a>` tags.

✅ Dynamic Routing and defining routes for each RestaurantMenu component.

✅ Leveraging `useParams()` hook to extract parameter values from the URL.

useEffect - useEffect will be called after every time component is rendered

if no dependency array => useEffect is called on every render
if dependency array is empty = [] => useEffect is called only once at initial render
if you have something as dependency = [btnNameReact] => useEffect is called every time dependency(btnNameReact) changes

React Router DOM

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

React Router gives a special Hook called useRouteError 

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

//In place of outlet children component will be rendered come as path changes

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

Never use anchor tag to route from one page to another. Because it reloads the whole page. While using <Link /> only component
gets refreshed

React helps us create single page application

There can be 2 types of routing in web applications:-
1) Client Side Routing - Now it doesn't make network call for fetching another page.
2) Server Side Routing - Earlier we used to make network call to server to get another html page.


For Dynamic Routing
{
path: "/restaurant/:resId",

}

₹{price / 100 || defaultPrice / 100} 
It evaluates on basis of truthy and falsy

useParams() hook is used to give what is passed thorugh