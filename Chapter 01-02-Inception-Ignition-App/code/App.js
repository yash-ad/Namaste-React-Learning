//.Example one:-
// const heading = React.createElement('h1',{id:'heading'},"Hello World from React!,The first programme of React.")//It accepts 3 arguments The first is an element,The second is an object which is an attributes for the tag,the third is the content we want(child).
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) //This `render`method is basically responsible for to take an object and convert them into the tag.
// console.log(heading);//React element is an object. //Returns as an object

// const paragraph = React.createElement('p',{},"Loremipsum100");
// const para = ReactDOM.createRoot(document.getElementById('para'));
// para.render(paragraph);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import  ReactDOM  from "react-dom/client";
//.Example Two:-
//Lets create parent and child (nested):-

const parent = React.createElement
('div',{id:'parentOne'},[React.createElement('div',{id:'childOne'},
[React.createElement('h1',{},"Namaste React"),
React.createElement('h2',{},"Im an h2 tag"),
]),
React.createElement('div',{id:'childTwo'},[
    React.createElement('h1',{},"Namaste React"),
    React.createElement('h2',{},"Im an h2 tag"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-
//1).appendChild():-
//appendChild() is a method in JavaScript that is used to add a new child element to an existing parent element in the Document Object Model (DOM). 
//It is commonly used to dynamically manipulate web pages by adding or inserting new content.

//2).CDN:-
//CDN stands for Content Delivery Network. It is a distributed network of servers located in different geographical locations that work together to deliver internet content, such as web pages, images, videos, and other resources, to users in a faster and more efficient manner.
//Improved Performance,Load Distribution,Security,Bandwidth Savings,Scalability,Improved User Experience.
//CDNs are an essential tool for modern web applications and websites, especially those that cater to a global audience or experience high traffic volumes. They help ensure a smooth and fast user experience, which is crucial for retaining and attracting visitors. 

//3).crossorigin:-
//The crossorigin basically its an attribute used in Html,to specify how the browser should handle requests made to load external resources such as scripts,stylesheets,images etc.

//4).What is a React?
//React is Javascript library to build UI ( user interfaces).
//React is writeen by facebook developers.
//Its an opensource library.

//5).What do these 2 CDN links mean?
// <!-- CDN Links React -->
// {/* <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> */}

//The first link means that this is the core of react framework algorithm react.development
//The second link means that is the react DOM,Which is useful for DOM operations (Document object model).

//6).HTML code snippet, the script tags are placed at the end of the body element rather than in the head element because
//Of page load performance allows the rest of the HTML content to load the before the scripts are executed.
//this means that the user can start seeing and interacting with the context of page sooner even if the scripts are still loading or processing.

//7).What is an Emmet?
//Emmet is a plugin or toolkit that provides shortcut and abbrevations for writing HTML,CSSand other web related code.

//8).Difference between library and framework?
//A library provides specific functions or features that  you can use in your code,while a framework provides a more comprehensive structure.
//libraries offer more flexibility,and A frameworks are more opinionated.

//9).Why is react known as React?
//React also known as React.Js is a javascript library for building user interfaces.The name `React` was chosen because the library is designed to be highly reactive to changes in program state.

//10).What is the difference between React and ReactDOM?
//React is the core library for building user interfaces, while ReactDOM is the package responsible for rendering React components into the DOM. They work together to create dynamic and interactive web applications. 

//11).What is the difference between reactdevelopment.js and reactproduction.js via CDN files?
//when using React via a CDN, you choose between react-development.js for development environments, which provides extra debugging tools and is larger in file size, and react-production.js for production environments, which is optimized for performance and has a smaller file size.

//12).What is `NPM`?
//`npm` is a node package manager, it is package manager for javascript that allows developers to easily manage and share reusable codempackages.`NPM` is a keytool in the javascript eco-system.

//13).What is `parcel/webpack`? why do we need it?
//The parcel/webpack are both module bundlers for javascript applicationsThey help manage and bundle various pieces of code, including JavaScript files, stylesheets, images, and other assets, into a format that can be easily served to a web browser.
//these bundlers help streamline the development process, improve performance, and ensure that the code is delivered to end-users in an efficient and optimized manner. 

//14).What is `.parcel-cache`?
//The .parcel-cache directory is a folder created by the Parcel bundler. It is used to cache various files and data to improve build performance.
//.parcel-cache directory are specific to your project and can be safely deleted if you want to clear the cache. Parcel will recreate it as needed.

//15).What is `npx`?
//npx is a command-line utility that comes with npm (Node Package Manager).
//npx is a useful tool for executing packages from the command line, and it's commonly used in modern JavaScript development workflows.

//16).What is difference between `dependencies` vs `devDependencies`?
//dependencies:
// These are the packages that your project depends on in order to run in a production environment. They include libraries and modules that your application needs to function as intended when it's deployed.
// When you deploy your project, only the dependencies will be installed, not the devDependencies.
// Examples of dependencies might include libraries for handling HTTP requests, database connections, user authentication, etc.
// devDependencies:
// These are packages that are only needed for development and testing purposes. They are not required for the actual production deployment of your application.
// This category includes tools like testing frameworks, build tools, linters, and other development-specific utilities.

//17).What is Tree shaking?
//Tree shaking is a term commonly used in the JavaScript ecosystem, particularly in the context of module bundlers like Webpack or Parcel. It refers to the process of eliminating dead (unused) code from a bundle during the bundling or minification process.

//18).What is Hot module replacement?
//Hot Module Replacement (HMR) is a feature in modern web development that allows developers to update the code of a running application in real-time, without the need for a full page refresh. This means that you can see your changes instantly reflected in the browser as you make edits to your code.

//19).What is `.gitignore`? what should we add and not add into it?
//The .gitignore file is a configuration file used by the version control system Git. It specifies files and directories that should be ignored and not tracked by Git.
//what should we add :Generated Files,Dependencies,Environment-specific Files,Logs and Temporary Files,Compiled Code
//What should we not add:Source Code,Configuration Files with No Sensitive Data,Documentation and Readme Files,Static Assets
//he purpose of the .gitignore file is to exclude files and directories that are not essential.

//20).What is the differenece between `package.json` and `package-lock.json`?
//package.json is a manually maintained file that describes the project and its dependencies in a more high-level manner, while package-lock.json is a machine-generated file that provides an exact, detailed record of the packages and their versions installed in the project, ensuring consistency across different environments. Both files work together to facilitate accurate and reproducible installations of dependencies.

//21).Why shoud not i modify `package-lock.json`?
//Reproducibility and Consistency: The purpose of package-lock.json is to ensure that every member of a development team, or any machine where the project is being run, gets the same dependency tree. If you manually modify it, you're potentially introducing inconsistencies and making it difficult for others to reproduce the exact same environment.
//Avoiding Version Conflicts: package-lock.json contains detailed information about the specific versions of packages and their dependencies that were installed. This helps to avoid version conflicts that might arise if different developers install slightly different versions of packages.
//Security and Stability: It ensures that the exact versions of packages with known security patches and stability improvements are used. Manually changing versions could potentially introduce vulnerabilities or instability.
//Preserving Developer Time: Manually managing dependencies can be error-prone and time-consuming. Relying on the package-lock.json to manage these details allows developers to focus on writing code rather than worrying about dependency versions.
//Automatic Updates and Resolutions: When you run npm install, npm will use the information in the package-lock.json file to automatically install the exact versions specified. Manually modifying it could interfere with this automatic resolution process.

//22).What is `node_modules`? is it a good idea to push that on git?
//node_modules is a directory that contains all the dependencies (libraries and modules) required by a Node.js project. When you use a package manager like npm (Node Package Manager).
//Its not a good idea,node_modules in version control is generally discouraged because it can lead to issues with repository size, performance, and reproducibility.

//23).What is the `dist` folder?
//The dist folder, short for "distribution," is a directory commonly used in software development projects to store the files that are ready for deployment or distribution to end-users. I

//24).What is browserlists read about dif bundlers : vite,webpack,parcel?
//Browserslist:
// Browserslist is a tool and configuration file that allows you to specify which browsers your application should support. It is used in front-end development to define the range of browsers your project is expected to work in. 

//25).caret and tilda?
//In the context of versioning in software development, the caret (^) and tilde (~) are special characters used to specify version ranges for dependencies in package.json files (used by package managers like npm).
//Use the caret (^) if you are willing to accept minor and patch updates but want to avoid breaking changes.
// Use the tilde (~) if you only want to accept patch updates and avoid any new features or breaking changes.