## Accordion Toggle Feature:-
```javascript

showTheIndex={() => {
  // Toggle the accordion state
  setShowIndex((prevIndex) => (prevIndex === index ? null : index));
}}

```
# 1.showTheIndex Prop:
showTheIndex is a prop that you pass to the RestaurantCategory component. It is a function that presumably handles the toggling of the accordion's visibility.

# 2.Arrow Function:
() => { ... }: This is an arrow function expression, a concise way to define a function. In this case, it's an anonymous function.

# 3.Toggle Accordion State:
setShowIndex: This is the state-setting function provided by the useState hook. It's used to update the showIndex state.
prevIndex: This is a parameter of the arrow function, representing the current state value of showIndex.
(prevIndex === index ? null : index): This expression determines the new state value for showIndex based on the current state (prevIndex) and the index of the accordion.

# 4.Explanation of the Expression:
(prevIndex === index ? null : index): This is a conditional (ternary) expression.
If the current accordion index (prevIndex) is equal to the index of the clicked accordion (index), it means the accordion is already open, so set the state to null (close the accordion).
If they are not equal, set the state to the index of the clicked accordion (open the accordion).

## Purpose:
The purpose of this code is to toggle the state of the accordion. If the accordion is closed, it opens it; if it's open, it closes it. This ensures that clicking on an accordion toggles its visibility.

Higher Order Component - Function that takes a component as an input and returns a component. 
Example we can add Promoted Label with Normal Restaurant Card using Higher Order Function

const RestaurantDiscountedCard = withDiscountLabel(RestaurantCard);

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Discount Available</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

Controlled and Uncontrolled Component 

Controlled Component meaning the component is controlled by another component like by parent
Uncontrolled Component meaning the component isn't being fully controlled by another component

 - Can we modify parent state variable from children component
   Not directly but possible indirectly

Lifting State Up - we lift the state up to a parent component

Props Drilling - Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

React Context - It helps to keep data in central place and it can be accessed from anywhere 
which solve problem of props drilling.

Can access Context using Hooks or Context.Consumer

Wrap the whole App in User Context Provider to update context values

<UserContext.Provider value={{loggedInUsr: userName}}>
</ UserContext.Provider >

In class we can access using Component and get values in callback function inside UserContext.Consumer

<UserContext.Consumer>
{ ({loggedInUser}) => {return <h1>Default user is {loggedInUser}</h1>} }
</ UserContext.Consumer>

 - if you don't pass a value to context provider does it take default value ?
   Yes, if you don't pass a value to a context provider, it will take the default value that you specified when you created the context.


# 1.What is prop drilling?
Prop drilling refers to the process of passing down props (properties) through multiple layers of nested components in a React application.
 In a deeply nested component structure, if a prop needs to be accessed by a component deep down the hierarchy, it has to be passed through all the intermediate components, even if those intermediate components do not use the prop themselves.
 Prop drilling can lead to code that is harder to maintain and understand, especially as the application grows in complexity.


# 2.What is lifting the state up?
 Lifting the state up is a React pattern where the state of a component is moved to a higher-level component in the hierarchy so that it can be shared among multiple child components.
  This pattern is often used to manage the state in a more centralized way, avoiding prop drilling and making it easier to share state between components that are not directly connected in the component tree.
  If two sibling components need to share some state, you can lift that state up to their common parent and pass it down to them as props.


# 3.What is Context Provider and Context Consumer?
* `Context in React`: Context provides a way to pass data through the component tree without having to pass props manually at every level.


* `Context Provider`: The Context.Provider component is used to wrap a part of the component tree and make a context value available to all the components within that tree. It takes a value prop, which is the data you want to share.

* `Context Consumer`: The Context.Consumer component is used to consume the context value. It can be used in a function component or a class component to access the context value.


# 4.If you don’t pass a value to the provider does it take the default value?
`Default Value`: When using a Context.Provider, if you don't pass a value prop to it, it takes the default value specified when creating the context using `React.createContext(defaultValue)`.
If you provide a value prop to the Context.Provider, it will override the default value for the components within its scope.
