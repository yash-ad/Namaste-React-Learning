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


 








