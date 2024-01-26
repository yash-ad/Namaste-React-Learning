
#React 🚀

## Chapter - 3
### Laying The foundation

# Notes

Remember that if you use curly braces, you need to include an explicit return statement to return the JSX. This is because curly braces indicate a function body, and you need to use return to specify what should be returned. In contrast, when using parentheses, the expression within them is implicitly returned.`()` And `{}`.


# 1.What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. JSX makes it easier and more intuitive to create and manipulate the structure of user interfaces, especially when using libraries like React.

# 2.Superpowers of jsx:-
JSX provides several superpowers that make it a powerful tool for building user interfaces, especially when used in conjunction with libraries like React.
Expressive Syntax: JSX allows you to write HTML-like code directly in your JavaScript files. This makes it easier to visualize and understand the structure of your UI components.

JavaScript Integration: JSX seamlessly integrates with JavaScript, allowing you to embed JavaScript expressions and logic directly within your UI components. This makes it easy to dynamically generate content, handle events, and perform other tasks based on the application's state or user interactions.

Component-Based Architecture: JSX encourages a component-based architecture, where you can create small, reusable pieces of UI (components) and compose them to build complex interfaces. This promotes code reusability, maintainability, and scalability.

Dynamic Content Rendering: JSX allows you to use JavaScript expressions to dynamically render content. This means you can easily display different data based on conditions, iterate over arrays to render lists, and perform other dynamic operations.

Declarative Syntax: JSX promotes a declarative approach to building UIs, where you describe what the UI should look like based on the current state, rather than imperatively specifying how to update the DOM in response to changes.

Virtual DOM: When used with libraries like React, JSX enables the use of a virtual DOM. This is a lightweight copy of the actual DOM that allows React to efficiently track changes and update the real DOM only where necessary, improving performance.

HTML-Like Familiarity: For developers familiar with HTML, JSX feels intuitive and easy to pick up. This reduces the learning curve for building UI components in React or other frameworks that use JSX.

Support for Components and Props: JSX makes it easy to define and render components, which can accept props (properties) to customize their behavior and appearance. This enables you to create modular, customizable UI elements.

JSX Transpilation: JSX code is transpiled into regular JavaScript before it is executed by the browser. This means that even though you're writing what looks like HTML, it's ultimately converted into JavaScript that the browser can understand.

Overall, JSX is a powerful tool that combines the strengths of JavaScript and HTML to provide a more intuitive and expressive way to build user interfaces, particularly in the context of component-based UI libraries like React.


# 3.role of type attribute in script tag?what options can i use there?

The type attribute in a script tag is used to specify the MIME type of the script being included. The MIME type (Multipurpose Internet Mail Extensions) is a way to indicate the type of data contained in a file.

In modern web development, if you're including JavaScript, you can omit the type attribute altogether, as browsers will assume "text/javascript" by default

JavaScript (Module) (module)-This is used to indicate that the script is written using ECMAScript modules.


# 4.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX?

In JSX, {TitleComponent}, {<TitleComponent/>}, and {<TitleComponent><TitleComponent/>} are all expressions that can be used to include a component or component-like element in your JSX code. However, they have different meanings and outcomes:

{TitleComponent}:

This is using TitleComponent as a variable or a reference. It's not a valid JSX syntax for rendering a component. If TitleComponent refers to a React component, you should use it in a JSX context with JSX tags (<TitleComponent />) for it to be properly rendered.

{<TitleComponent/>}:

This is the correct way to render a React component called TitleComponent. It is a JSX expression where TitleComponent is a component being used as a self-closing tag.

jsx
Copy code
const element = <TitleComponent />;
{<TitleComponent><TitleComponent/>}:

This is not valid JSX syntax. It seems like a mixture of JSX syntax for rendering a component (<TitleComponent />) and an unclosed JSX tag (<TitleComponent>). It will likely result in a parsing error.

To summarize:

Use {<ComponentName />} to render a React component in JSX.
Use {variable} for JavaScript expressions or variables in JSX, but it won't render a component directly.
Remember that TitleComponent should refer to a valid React component for these JSX expressions to work correctly.

# 5.What is XML?
XML stands for Extensilbe Markup Language.

# 6.What is the difference between XML and HTML?

Html displays data and describes the structure of a webpages whereas
XML stores and transfer data. XML is a standard language which can define other computer languages.
However Html is a predefined language with its own implications.

# 7.Why we use XML instead of Html?

When displaying data in Html,you shouldnot have to edit the html file when the data changes and with XML,the data can be stored in seperate XML files with a few lines of javascript code,you can read on XML file and update the data content of any html page.

# 8.Where XML is used?

XML is used such as websites,databases and third party applications.

# 9.What is JSX type?

JSX is an embeddable XML-like syntax it is meant to be transformed into valid javascript.
It is an extension of javascript that allows developers to write Html right within Javascript






### Summary:

JSX: JSX, or JavaScript XML, is a syntax extension for JavaScript that enables the integration of HTML-like code directly into JavaScript files. It is particularly powerful when used with libraries like React, providing an expressive, component-based, and declarative approach to building user interfaces.

Superpowers of JSX:

Expressive Syntax
JavaScript Integration
Component-Based Architecture
Dynamic Content Rendering
Declarative Syntax
Virtual DOM
HTML-Like Familiarity
Support for Components and Props
JSX Transpilation

Role of type Attribute in Script Tag: The type attribute in a script tag specifies the MIME type of the script. In modern web development, for JavaScript, this attribute can often be omitted as browsers assume "text/javascript" by default. If using ECMAScript modules, you can specify type="module".

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX:

{TitleComponent}: Refers to a variable or reference, not a valid JSX for rendering a component.
{<TitleComponent/>}: Correct JSX syntax to render a React component as a self-closing tag.
{<TitleComponent><TitleComponent/>}: Invalid JSX syntax, likely to result in a parsing error.
XML: XML stands for Extensible Markup Language. It is a standard language for defining other computer languages and is used to store and transfer data.

Difference Between XML and HTML:

HTML is for displaying data and describing webpage structure.
XML is for storing and transferring data, and it can define other computer languages.
Why Use XML Instead of HTML:

XML allows data to be stored in separate files, making it easier to update without editing HTML files directly. It is particularly useful when data changes frequently.
Where XML is Used:

XML is used in websites, databases, and third-party applications for storing and transferring data.
JSX Type:

JSX is an embeddable XML-like syntax meant to be transformed into valid JavaScript. It allows developers to write HTML directly within JavaScript, facilitating the creation of UI components in libraries like React.



 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },

Create scripts to run the commands
now, we can write npm run start / npm start => npx parcel index.html

//React Element => Object => HTMLElement(rendered component)
//Created element using core react
const heading = React.createElement("h1", { id: "heading" }, "Hello I'm here");

console.log(heading);
//JSX - Javascript syntax which is easier to create HTML element
//JSX is seperate and React is seperate, it is used bcz its developer friendly

// JSX(its a syntax) - is not HTML in Javascript, it's HTML or XML like syntax
const jsxHeading = <h1 id="heading">Hello I'm here boy</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

Transpiling converts source code from a programming language into an equivalent source code of the 
same or a different programming language
example - Parcel transpiles the JSX code into React code before it reaches the javascript engine

Parcel gives this code to Babe

JSX => React.createElement => ReactElement- JS Object => HTML Element(rendered)

Attributes are given in camelCase.If you want to write JSX in multiple lines we wrap it inside () paranthesis
const jsxHeading = (<h1 className="head">Hello 
I'm here boy
</h1>);


 React Component
- Class Based Component - Old ways to build code (It uses Javascript classes)
- Function Based Component - New way to build code (It uses Javascript functions)

React Functional Component - Just a javascript function (Name it capital letter)
that returns a React element
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
