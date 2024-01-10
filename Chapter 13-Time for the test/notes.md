# Chapter 13th : Time for the test:-

## Developer Testing:-

  ### * Types of testing:-

1.Unit testing.
2.Integration testing.
3.End to end testing.

### * Two major testing for developers:-
   1.Unit Testing.
   2.Integration Testing.


  ```

 *  React testing library uses something known as `jest`.

  * `Jest` is javascript testing framework.

 * "React testing library for testing React applications. React testing library focus on testing components from the end-users experience". 


  ```


  ## Setting Up Testing In Our App:-
  ```javascript

1.npm install -D @testing-library/react.
2.npm install -D jest.
3.npm install Babel dependencies.
4.Configure Babel.
5.Configure parcel config file to disable default babel transpilation
6.Jest configuration npx jest --init
7.Install `jsdom` library, npm install -D jest-environment-jsdom

  ```

  * There is something known as `__Dunder__`.
  
  ### `test()` function it takes two arguments The first is string and the second is function- callback function.


  3:00:30 
 
- Developer Testing
   Manual Testing
  
   Unit Testing - Suppose if we want to do just test Header Component with isolation from app. Test just specific small unit.
  
   Integration Testing - Testing the integration of the components. 
  
   End to End Testing (e2e Testing) - Testing as soon as user lands on the website till the end of the user actibity

Testing is the part of the development

React Testing Library uses Jest 

Test cases need a runtime environment to run. Example we use jsDOM library which is like a browser

__a__ = dunder

test("Description of test case", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});

Testing UI we render the component to jsDOM

screen.getByPlaceholderText("Eg:Aditya Verma"); -> This is the react js element

For multiple items we use getAllByRole()
For single item we use getByRole()

describe("To group multiple test cases", () => {
 // Test case 1
 test("", () => {}) 

 // test case 2
 it("", () => {}) 
})

it - Alias for test

Test cases won't make API calls