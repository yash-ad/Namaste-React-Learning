//Lets create a test case for `Search` input:-
import { render,screen,act } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/Restaurantlistmockdata.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



//Lets create a mock fetch for testing:-
//The `global.fetch` is mocked using ` jest.fn` to simulate the behavior of a real fetch call.
global.fetch = jest.fn(()=>{
//The mock `returns a Promise.resolve()` with the expected data structure.
return Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA)
    },
});
});

test("Should `Search` in the list of restaurants ,Only search for `Desserts` text input", async ()=>{

  
 //The `act()` function is used to make sure that all updates to the state and props of your components are applied and processed before your test assertions.
  // `act()` function returns a promise , here we are using `await`.
 await act(async () => render(
<BrowserRouter>
 <Body/>
 </BrowserRouter>
 ));
      
 //Lets test for `Search` button in to the body component

//Querying
 const searchButton = screen.getByRole("button",{name:"searchBtn"});

 //Assertion
 expect(searchButton).toBeInTheDocument();
});


