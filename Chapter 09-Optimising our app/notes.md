Single Responsibility Principle - Each component should have single responsibility
Modularity - Meaning Dividing big code into multiple small piece of code or module. 

To make our code -
1) Maintainable
2) Reusable
3) Testable

We Create custom hooks to follow Single Responsibility Principle

Here this useRestaurantBody() is created to fetch data from API
<!-- const useRestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_PAGE_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants;
}; -->

Chunking | Code Splitting | Lazy Loading | Dynamic Bundling | On Demand Loading - Break down apps into smaller logical chunks

Lazy Loading the Grocery Page or Dynamic Loading
const Grocery = lazy(() => import("./components/Grocery"));

<!-- {
 path: "/grocery",
 element: (
 <Suspense fallback={<h1>Loading....</h1>}>
 <Grocery />
 </Suspense>
 ),
}, -->

 - What are the advantages and disadvantages of this type of code splitting?
   Advantages - Faster Loading Process, Reduced Server Load, Better UX(User Expereience)
   Disadvantages - Additional Code to be processed by browser, Additional Communication with server





 # 1.When and why do we need lazy()?
 In React, the lazy function is used for code-splitting, a technique that allows you to split your code into smaller chunks and load them on demand. This can significantly improve the initial loading time of your application, as it avoids loading unnecessary code upfront and only loads the specific parts of the application when they are needed.

 The lazy function is typically used with dynamic imports to create a dynamic module that can be loaded asynchronously. 


# 2.What is Suspense?
 In React, the Suspense is a component is used to specify a fallback UI while the asynchronously loaded component is being fetched. This is required because the component might not be available immediately.


# 3.Advantages and disadvantages of using this code-splitting pattern?

Code splitting is a powerful technique that comes with both advantages and disadvantages.
code splitting is a valuable optimization technique, particularly for larger or more complex applications.

`Advantages:`
 * Faster Initial Load Time: 
Advantage: Code splitting reduces the size of the initial JavaScript bundle, leading to faster loading times for the main application.
Use Case: Users can access the core functionality of your application more quickly.

 * Improved Performance:
Advantage: Smaller bundles result in faster parsing and execution by the browser, leading to improved overall performance.
Use Case: Applications with complex UIs or large dependencies benefit from better performance.

* Optimized Network Usage:
Advantage: Loading only the code needed for the current view reduces the amount of data transferred over the network.
Use Case: Users on slower networks or mobile devices experience improved load times.

* Better Caching:
Advantage: Smaller, split bundles can be cached more effectively by browsers.
Use Case: Returning users benefit from quicker loads due to cached resources.

* Lazy Loading:
Advantage: Components or features can be loaded on-demand, improving the user experience by loading only what is necessary.
Use Case: Users may not need all features immediately, and lazy loading can reduce the initial load time.

`DisAdvantages:`
 * Complexity:
Disadvantage: Implementing and managing code splitting can add complexity to the development process.
Use Case: Small projects or applications with simple structures may not benefit as much from code splitting.

* Tooling and Configuration:
Disadvantage: Setting up code splitting requires appropriate tooling and configuration.
Use Case: Developers need to be familiar with build tools like Webpack or tools provided by bundlers.

* Potential for Overhead:
Disadvantage: The overhead of dynamically loading modules may negate some performance gains.
Use Case: In some scenarios, the cost of fetching and parsing additional chunks may offset the benefits.

* Learning Curve:
Disadvantage: Teams unfamiliar with code splitting may face a learning curve when adopting this technique.
Use Case: Newer or smaller teams may require time to adapt to the complexities of code splitting.

* Initial Render Delay:
Disadvantage: The first render may be delayed as the necessary code is fetched.
Use Case: Users with fast connections and high-end devices might not notice significant benefits.

# 4.When do we and why do we need suspense?
`<Suspense>` is a React component that plays a crucial role when working with asynchronous operations, such as data fetching or code splitting.

1. Lazy Loading with React.lazy:
When using React.lazy for code splitting and dynamically importing components, you need to use <Suspense> to specify a fallback UI while the asynchronously loaded component is being fetched.


2. Data Fetching with useEffect and fetch:
When fetching data asynchronously inside a component using useEffect, 
`<Suspense>` can be used to handle the loading state until the data is fetched.

3. Server-Side Rendering (SSR) with react-dom/server:
In server-side rendering scenarios, <Suspense> can be used to ensure that the server waits for all asynchronous operations to complete before sending the fully rendered HTML to the client.


`Why Use <Suspense>:`

 * Improved User Experience:
Benefit: Provides a better user experience by showing a loading indicator while asynchronous operations are in progress.
Use Case: Reduces the perception of a slow application by communicating that something is happening in the background.

* Consistent Error Handling:
Benefit: Allows you to handle errors in a consistent way for asynchronously loaded components or data.
Use Case: You can use an ErrorBoundary component to catch errors within the <Suspense> boundary.

* Code Organization:
Benefit: Helps organize your code by clearly defining where asynchronous operations take place and where loading states should be handled.
Use Case: Makes the code more readable and maintainable.