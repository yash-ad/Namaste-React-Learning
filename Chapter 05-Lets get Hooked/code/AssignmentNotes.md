# Namaste React 🚀

## Chapter - 5

### Lets get Hooked.


# 1.what is DOM?

DOM stands for Document Object Model. document as a tree of objects.the Document Object Model is a crucial concept in web development , The DOM represents each element in an HTML or XML document as an object.and these objects can be manipulated through scripting languages for example JavaScript to change and move the content of an HTML element.

# 2.What is the differenece between Named Export,default export and * as export?

So in javascript modules, you can use differernt export methods to make functions,objects,or values available for use in other modules,There are three common export methods are Named Export , Default Export , `* as`  Export.

>
* Named Exports allows you to export multiple values from a module.
  
* Default Exports allows you to export a single value as the default for a module.

* `* as` Exports allows you to import all exports from a module and use a namespaces to access them.


# 3.What is the importance of config.js file?

When using a `config.js` file , its essential to follow best practices for handling sensitive information,such as using environment variables for secret values and avoiding the inclusion of sensitive data and additionally documentation of configuration parameters is valuable for developers working on the project.


# 4.What are React Hooks?

React Hooks are functions that allow functional components in React to have state,lifecyle methods and side effects.
Hooks were introduced in React 16.8 to provide a more direct way to use state and other react features in functional components.

The most commonly udes React hooks are:-
 1.useState: Allows functional components to manage state. it returns an array with two elements or parameters,the current state value and a function that lets you update it.

 2.useEffect:Enables performing side effects in functional components.

 These hooks allow functional components to manage state and handle side effects.They make it easier to write code and maintain to it.


 # 5.Why do we need a useState Hook?

 The 'useState' hook is an essential for adding state management capabilities to function components in React, enabling them to handle dynamic data, user interactions and component re-rendering.it makes more powerful and versatile.


 # 6.Why React is faster?

 Because it can do faster DOM manipulations it can do effecient DOM manipulation,there is something known as Virtual-Dom there is something known as diff, reconciliation and React fiber.


 * React hooks which is known as states.

# 7.filter() method?

The filter method or a function is used to filter the value inside an array and it iterates over an array,and to create a new array from a given array consisting of only those elements from the given array which satisfy the condition.

* * Whenever a state variables updates , React will Re-renders the components.

* * React is only good at DOM operations / DOM manipulations.

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


 