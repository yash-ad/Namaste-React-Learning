# Namaste React 🚀

## Chapter - 6

### Exploring the world.


  * * 1.React-Algorithm:-
  * Reconciliation Algorithm is something known as React-fiber.
  * DOM -> DOM is like a tree.

# 1.What is Virtual-Dom?
Virtual-Dom is a representation of an actual DOM.
Virtual Dom is a concept used in react to optimize the process of updating the user interface(UI).React uses a virtual presentation in the DOM in memory. which is a lightweight copy of an actual DOM,The virtual represenation is known as Virtual-Dom.The virtual Dom is a key optimization strategy in React.


* React element its an object.
* An attribute `onClick{()=>{}}` takes a callback function.

# 2.How to modify a state variable - useState hook?
Using by the function and the function comes with the second parameter of an array.


* const [] = Array destructuring.
* const {} = Object destructuring.

# 3.Diff Algorithm:-
Finds out the difference between two virtual doms the updated new virtual dom and the previous virtual dom.


* [In React 16] -> React-fiber Algorithm


# Why React is fast or faster?
* Because of the reconciliation,React-fiber,diff algorithm , it has virtual-dom that is very effecient it can do DOM manipulation , it can find out the diff and update the UI.

# 4.What is Monolith architecture?
Monolith architecture refers to a traditional approach in software design where the entire application is built as single, indivisible unit. in a monolithic application,all the components (such as the user interface,business logic and data access layer) are run as single process.

# 5.What is a Microservice architecture?
A microservice is a software architectural style where an application is composed of small,independent and loosely coupled services.Each microservice specific function can be developed , deployed and scaled indepenedently.These services communicate with each other well defined APIs , HTTP or messaging queues.

# 6.What is the difference between Monolith and microservice?
Monolith architecture and microservice architecture are two different approaches to build software and designing systems.

In monolith architecture there is single,unified codebase and all components are tightly interconnected. it has single shared database and the failures can impact the entire system.monolith has single deployment unit.
In Microservices architecture composed of small, independent services and each service has its own code base and it can be developed , deployed indepenedently.


# 7.Why do we need a `useEffect` hook?
 The 'useEffect' hook in React is used to manage side effects in functional components.Side effects refer to any code that needs to interact with the outside world which means such as fetching data,subscribing to external events,modifying the DOM or setting up timers.

 * `useEffect` allows functional components to perform actions after the component has rendered. it provides a declarative way to handle side effects,making the code more readable.Its common to use `useEffect` hook for data fetching from APIs or performing other asynchronous operations.`useEffect` is suitable for handling events in a component.`useEffect` allows you to return a cleanup function that will be executed when the component unmounts or when the dependencies change

* `useEffect` accepts two arguments the first is callback function and the second is Dependancy array.
  
* `Empty Dependency Array` it means  it runs once after the intial render.


# 8.What is optional chaining?

Optional chaining is a feature in javascript that provides it can be used with both properties and methods making the code more concise less prone to errors when dealing with undefined or null values.its particularly useful when working with the data from APIs.It is denoted by the question mark (?) and the dot (.) syntax.


# 9.What is Shimmer UI?

Shimmer UI is a design pattern used in User Interfaces to indicate that content is loading or fetched.Instead of displaying a static loading spinner or placeholder, a shimmer effect creates an animation to give impression of the movement.The shimmer UI technique is often used in scenarios where the loading time for content may be variable, and it provides a more engaging and user-friendly experience compared to traditional loading indicators.

# 10.What is the difference between js expression and js statement?

  * Javascript Expression :- 
Produces a value and can be used wherever a value is expected, such as in assignments, function arguments, or within other expressions.

  ```javascript

5 + 3       // Adds two numbers (expression that evaluates to 8)
x           // Variable reference (expression that evaluates to the value of x)
"Hello"     // String literal (expression that evaluates to the string "Hello")
function() { return 42; }()   // Function call (expression that evaluates to the return value)

```

* Javascript Statement:-
Performs an action and does not necessarily produce a value. Statements are often used to control the flow of the program, declare variables, or execute code repeatedly.

```Javascript
let x = 5;                    // Variable declaration and assignment (statement)
if (x > 0) {                   // Conditional statement (if statement)
  console.log("Positive");    // Function call (statement)
}
for (let i = 0; i < 3; i++) {  // Loop statement (for loop)
  console.log(i);
}
```

# 11.What is conditional rendering,explain with a code example?

A rendering on the basis of condition its known as conditional rendering.In javascript frameworks like React, conditional rendering is often used to show or hide elements,components or content based on the state of the application.
```javascript
import React, { useState } from 'react';

function MyComponent() {
  // State to track whether to show a message or not
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      
      {/* Conditional rendering using a ternary operator */}
      {showMessage ? (
        <p>This message is shown because the condition is true.</p>
      ) : (
        <p>This message is shown when the condition is false.</p>
      )}

      {/* Button to toggle the condition */}
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
    </div>
  );
}

export default MyComponent;

```
* solution :-
We have a component (MyComponent) that has a piece of state (showMessage) to determine whether a message should be displayed.

The JSX inside the component uses a ternary operator (condition ? trueBlock : falseBlock) to conditionally render different content based on the value of showMessage.

There's a button with an onClick handler that toggles the value of showMessage when clicked. This demonstrates how conditional rendering can respond to user interactions.

The showMessage state controls whether the message is displayed or not. When the button is clicked, the state changes, triggering a re-render with the updated condition, and the content is rendered accordingly.


# 12.What is CORS?
CORS, which stands for Cross-Origin Resource Sharing is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain.Its a security method to prevent data access between different origins.


# 13.What is async and await?

`async` and `await` are keywords in javascript that are used in conjuction with Promises to simplify asynchronous code,making it more readable and easier to work with.they were introduced in ECMAScript 2017 (ES8) and provide a more concise syntax for dealing with asychronous operations.

 1.`async` Function:
 * The `async` keyword is used to define an asynchronous function. an asynchronous function always return a Promise .Inside an asynchronous function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected.

```javascript
async function myAsyncFunction() {
  // Asynchronous code here
  return result;
}
```

2.`await` Operator:
* The `await` keyword is used inside an asynchronous function to wait for a Promise to settle  ( resolve or reject ).It can only be used within an `async` function.and it pauses the execution of the function until the Promise is resolved.

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

```
In this example, fetchData is an asynchronous function that uses await to pause execution until the fetch operation completes and the response is received. Subsequently, it uses await again to pause until the JSON parsing is done.

It's important to note that the use of await only makes sense within an async function. If you try to use await outside of an async function, it will result in a syntax error.


# 14.What is the use of 'const json = await data.json;?

```javascript
const json = await data.json();
```

* 1.`data` is the result of the`fetch` function.which is a Promise representing the response to the request made,The `fetch` function is used to make an HTTP request.
  
* 2.`await data.json()` is used to aynchronously wait for the JSON content of the response to be parsed.the `json()` method is an in-built method of the `Response` interface in the Fetch API that returns a Promise resolving to a Javascript object.The `await` keyword is used to wait for this Promise to resolve

* 3.The result is assigned to the variable `json` after this line executes , `json` contains the parsed JSON data retrieved from the API endpoint.


## Whenever state variable updates,react triggers a reconciliation cycle or process to (re-render the components).


### Why React is faster?
Reacts react-fiber the new reconciliation algorithm,which finds out the difference between the two virtual doms the new and previous one and updates the actual Dom which something needs to be changed and the specific  portion is required.

Monolith Architecture - API, UI, Authentication, DB, SMS Code was written in a single big project. Because of this whenever there was
something changed the whole project has to be build up which used to take a lot of time.

Microservices Architecture - Different services for different jobs. Example - Backend Service, UI Service, DB Service. These are
small/micro services which forms a big app. Example Uber followed Microservice architecture. This is known as Seperation of Concern
and follows Single Responsibility. The React app we are making is an example of UI service.

Different services could run on different ports which can later be maped to different domain names like /api.
These services are connected by making calls to urls

Approach to Make API Calls
1) Page Load -> API Call -> Render UI
2) Page Load -> Render UI -> API Call

In React we will always be using 2nd Approach. Gives better UX

useEffect() takes 2 arguements Callback Function and Dependency array.
It will render the Component then Callback function of useEffect will be called 

Shimmer UI used to better UX

  //Conditional Rendering - Rendering on basis of some conditions
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

Whole React Component is re-rendered when there is a change in Local State Variable. After rendered it creates a instance.
Whenever state variable update, react triggers a reconciliation cyle(re-renders the component)

- What is difference between statement and expression?
  Expression - returns a value
  Example - 123, 1 + 1, "hello", true
	
  Statements - complete task instruction
  Example - let x = function() {} // Here function is just a statement
  But x(); this will give me undefined which is an expression