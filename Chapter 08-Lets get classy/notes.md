There is no recommended way for structuring files 

You can use the .. operator as many times as you need to navigate up multiple levels in the file directory structure. For example, if you have a file called ./../../helpers.js in three levels up from the current directory, you can import it using the following code:

import { add, subtract } from './../../helpers';

1 File can have only 1 default export
For multiple exports use Named export

Two Types of export and import 
1) Default Export and Import
2) Named Export and Import

- Default Export/Import

  export default Component
  import Component from "path"

- Named Export/Import

  export {Component}
  import {Component} from "path"

-> Can we have default export and Named export
   Yes we can have default as well as Named export

   React is effecient in DOM manipulation. React, Angular, Vue all are trying to become more and more efficient in DOM manipulation.
So that they can sync Data Layer and UI Layer.

Hooks - A normal javascript function which is given to us by react. There are multiple react hooks.
also called State Variable because it maintains the state of the variable

//Local State Variable
const [listOfRestaurants, setListOfRestaurant] = useState()

Can modify the variable using function

Render - Whenever a state variable updates React re-renders the component

Reconciliation Algorithm (React Fiber) - Below algo is called React Fiber. New way of finding the diff and updating the DOM

Virtual DOM - It is the representation of actual DOM

Diff Algorithm - Finds out difference between updated virtual DOM and old virtual DOM. It tries to find
out the difference between old and new virtual DOM and updates Actual DOM

- What is * as export
  In JavaScript, the * symbol is often used in conjunction with the export keyword in module systems to export
  multiple items from a module.

  export * from './otherModule'; // re-export everything from another module
  import * as myModule from './module';

- What is importance of config.js?
  config.js can contain you API key, Database URL or configuration files needed


 # 1.How do you create Nested Routes  react-router-dom configuration?
In React `react-router-dom` is a library for handling routing in web applications.Nested Routes allow you to define routes within other routes,creating a hierarchy of components.to set up nested routes, you need to structure your components and define routes accordingly.

# 2.createHashRouter , createMemoryRouter from react-router docs?

`HashRouter:`
HashRouter uses the hash portion of URL to keep your UI in sync with the URL.its suitable for apllications that do not have a server-side rendering and are deployed on static file hosts.

`MemoryRouter:`
MemoryRouter does not read or write the address bar.it keeps the history in memory,making it suitable for server-side rendering or testing environments.

# 3.what is the order of life cycle methods calls  in class based components?

`Mounting Phase:`
* constructor(): This is the first method called when a component is created. It is used for initializing state and binding event handlers.
  
* static getDerivedStateFromProps(): This is a static method that is called before every render, and it allows a component to update its state based on changes in props.

* render(): This is a required method that determines what gets rendered to the DOM. It should be a pure function without side effects.

* componentDidMount(): This method is called after the component is rendered to the DOM. It is often used for fetching data from an API or performing other side effects.

`Updating Phase:`
* static getDerivedStateFromProps(): Again, this method is called before every render during the update phase.

* shouldComponentUpdate(): This method is called before rendering when new props or state are being received. It can be used to control whether the component should re-render or not.

* render(): The render method is called again.

* getSnapshotBeforeUpdate(): This method is called right before the changes from the virtual DOM are to be reflected in the actual DOM. It receives the previous props and state as parameters.

* componentDidUpdate(): This method is called after the component is updated in the DOM. It is often used for side effects like making additional API calls based on the updated state.

`Unmounting Phase:`
* componentWillUnmount(): This method is called just before the component is removed from the DOM. It is used for cleanup tasks like cancelling network requests or cleaning up subscriptions.


# 4.Why do we use componentDidMount?
`componentDidMount` is a lifecycle method in React class components that is called after the component has been rendered to the DOM. It's commonly used for performing side effects that require access to the DOM, such as fetching data from an API, setting up subscriptions, or manually interacting with the DOM elements.


# 5.why do we use componentWillUnmount? show with example?
`componentWillUnmount`` is a lifecycle method in React class components that is called just before the component is unmounted and removed from the DOM. It provides an opportunity to perform cleanup tasks, such as cancelling network requests, clearing up subscriptions, or releasing resources to prevent memory leaks.

```jsx
import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);

    this.intervalId = null;
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // Start an interval when the component mounts
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default ExampleComponent;

```

# 6.Why do we use super(props) in constructor?
In a React class component, the super(props) call in the constructor is used to call the constructor of the parent class (the Component class in the case of React components) before initializing the properties of the child class. This is necessary when you define a constructor in a class that extends another class, as it ensures that the base class's constructor is executed before the derived class's constructor.


# 7.Why cant we have the callback function of useEffect async?
In React, the useEffect hook is designed to handle side effects in functional components. When using useEffect, the provided callback function cannot be declared as async directly. This is because the useEffect hook expects the callback to either return nothing (void) or return a cleanup function (if needed), and async functions always return a Promise.
The useEffect function in React is designed to handle both synchronous and asynchronous code. The key point to understand is that the callback function provided to useEffect is synchronous.








