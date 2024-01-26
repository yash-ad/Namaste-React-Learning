

# Namaste React 🚀

## Chapter - 4

### Talk is cheap , Show me the code.


# 1.what is a component in react?
In React, a component is a reusable, self-contained piece of code that encapsulates a specific functionality or piece of the user interface (UI). Components are the building blocks of React applications, and they allow developers to structure the UI into modular, manageable pieces.

There are two main types of components in React:

1.Functional Components:
Also known as stateless components or presentational components.
Defined as JavaScript functions.
Typically used for simple components that don't have internal state or lifecycle methods.
Introduced in React 16.8, functional components can now use state and lifecycle methods through React Hooks.

2.Class Components:
Also known as stateful components or container components.
Defined as ES6 classes and extend the React.Component class.
Used for components that require state, lifecycle methods, or more complex logic.
Prior to React 16.8, class components were the primary way to work with state and lifecycle methods.

Components can also accept inputs called "props" (short for properties) to customize their behavior or appearance.


# 2.What is optional chaining?
Optional chaining is a feature introduced in ECMAScript 2020 (ES11) that simplifies the process of accessing nested properties or calling methods on objects when the path to those properties or methods might be undefined or null.

making the code less error-prone and more maintainable. 


# 3.What is destructuring?
Destructuring is a powerful and widely used feature in modern JavaScript that simplifies the process of working with arrays and objects, especially in scenarios where you need to extract specific values or properties. It's commonly used in React components, Node.js applications, and other JavaScript projects.


# 4.What is a config driven UI?
A "config-driven UI" refers to an approach in software development where the user interface (UI) components and their behavior are defined and configured through external configuration files or data rather than being hard-coded in the application's source code. The idea is to make the UI more dynamic, customizable, and adaptable without requiring code changes.


# 5.What is props in React?
In React, "props" is short for "properties," and it is a mechanism for passing data from a parent component to a child component. Props are used to communicate and share information between React components in a unidirectional (parent to child) manner.It's important to note that props in React are read-only. The child component cannot modify the props it receives from the parent. Props are considered immutable.



# 6.Can we use index as keys in React?
While it is technically possible to use the array index as keys in React, it's generally not recommended.
Instead of using array indexes as keys, it's recommended to use unique and stable identifiers, such as item IDs, whenever possible. If the data doesn't have a natural unique identifier, you may need to generate unique keys


# 7.Why we need keys in React? Why do we need keys in React?
In React, keys are used to uniquely identify and track components or elements in a collection (e.g., an array of components or elements) during the process of reconciliation. Reconciliation is the algorithm React uses to efficiently update the user interface (UI) based on changes to the component tree.
When updating a list of elements or components, React needs a way to efficiently identify which elements have been added, removed, or modified.
Keys provide a hint to React about the identity of each element in a list, making it faster to determine how to update the DOM.


# 8.What is React fiber?
React Fiber is a reimplementation of the React reconciliation algorithm, which is the core algorithm that React uses to update the user interface in response to changes in application state. It was introduced to improve the performance and responsiveness of React applications, especially in scenarios where large and complex UIs need to be efficiently updated.


# 9.What is Reconciliation in React?
Reconciliation in React refers to the process of updating the actual Document Object Model (DOM) to reflect changes in a virtual representation of the DOM. The virtual representation is created by React during the rendering phase, and it is known as the Virtual DOM. Reconciliation is the step where React calculates the differences (diffing) between the new virtual DOM and the previous one and updates the actual DOM efficiently.


# 10.What is virtual DOM?
The Virtual DOM (Document Object Model) is a concept used in React to optimize the process of updating the user interface (UI). React uses a virtual representation of the DOM in memory, which is a lightweight copy of the actual DOM. This virtual representation is known as the Virtual DOM.Virtual DOM is a key optimization strategy in React.


# 11.What is <React.fragment></React.fragment> and <></>?
In React, a <React.Fragment> or the shorthand <>...</> is a way to group multiple elements without introducing an additional parent element to the DOM. This is useful when you want to return multiple elements.JSX clean without introducing unnecessary parent elements to the DOM. 


# 12.how can i write comments in jsx?
In JSX, you can write comments using curly braces {/* */}.
The comments in JSX are similar to JavaScript comments, but they need to be enclosed within the curly braces to be considered part of the JSX expression.


# 13.is ES6 mandatory for react?
ES6 (ECMAScript 2015) is not mandatory for writing React code, but it is highly recommended and widely used. React itself doesn't require ES6, but many of the features and syntax improvements introduced in ES6 make React code more concise, readable, and maintainable.

Some ES6 features commonly used in React development include:

Arrow Functions: Provides a more concise syntax for defining functions.
Destructuring Assignment: Simplifies the extraction of values from objects and arrays.
Template Literals: Provides a cleaner way to concatenate strings.
Classes: Introduces a more convenient syntax for creating constructor functions and inheritance.


# 14.is JSX mandatory for react?
No, JSX (JavaScript XML) is not mandatory for React, but it is a popular and widely used syntax for defining React elements. JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like. It allows you to write HTML-like code in your JavaScript files, making it more readable and expressive.

Planning is required before making an app

Low level planning

Header
 - Logo
 - Nav Items
Body
  - Search 
  - Restaurant Container
    - Restaurant Card 
Footer
  - Copyright
  - Links
  - Address
  - Contact 


We give inline-css as object
const styleCard = {
  backgroundColor: "pink",
};

Passing a prop to a component is same as passing arguement to a function

Config Driven UI - Our website is driven by data or configs. Controlling UI using data/config which comes from backend.
This is used in many big companys like Amazon

join() - The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");

Here we passed "and" as a sperator

?. (Optional Chaining) - The ?. is called Elvis Operator (optional chaining) in JavaScript. It is basically used while accessing some property on an object to avoid null or undefined errors.

suppose you have one object emp whose value you are getting from the server. But there may be chance when you are accessing the object values the response from server might not has come yet.

So in that case it will throw error saying can not find .property_name of null.

So if you use ?. then what it does is, it first check whether the object is null/undefined/ has value, if object is null/undefined then it doesn’t perform the .property_name on it.

map() - Give unique key in list

-> Why we need keys ?
   Let us suppose one Restaurant Card comes at first place without id React won't know where it came from , so React will re-render 
   all cards. Performance takes hit if we don't write key. React doesn't recommend index as keys

-> Why ES6 mandatory for React?
   ES6 is the standardization of javascript for making code more readable and more accessible

-> What is <React.Fragment> and <></> ?
   React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group
   a list of children without adding extra nodes to the DOM.

-> What is a Virtual DOM?
   The virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets
   updated instead of Real DOM.

-> How is Virtual DOM faster?
   When new elements are added to the UI, a virtual DOM, which is represented as a tree is created. Each element is a node on this 
   tree. The state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or “diffed” with the 
   previous virtual DOM tree.

   Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM. This ensures that there   
   are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.
                                                                                     
-> What is React Reconciliation ?
   React Reconciliation is the process through which React updates the Browser DOM. The process mentioned just above

-> What is React Fiber ?
   Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React. The term Fiber refers to React's data  
   structure (or) architecture, and originates from 'fiber' - a representation of a node of the DOM tree.




