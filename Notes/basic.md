1. why to learn a React js ?
   Ans : Easy to manage the Ui , easy to build a complex Frontend
   Jobs , treading

2. What is Virtual DOM in react?
   Virtual Dom is an abstraction of the actual dom . It's lightweight and fast because it
   doesn’t directly interact with the browser, instead it creates a tree data structure that
   represents the UI . When state changes , only those parts of the virtual dom are updated
   which have changed not the whole thing . This makes rendering very efficient as we don't
   have to update the entire page every time there is a change but just the part which has
   changed .

3. Why react was created ?
   In Facebook Application in the notification section when you visit inside the notification or messages
   the count of the notification and messages are not updated
   There was no sync with the Dom and the State in the Javascript
   To solve this problem the React library was build .
   Ghost Message(Pantom message) and No sync with the dom

4. who built the React Library ?
   Jordan Walke

5. React is Library ?
   Yes => library gives us freedom to write the code there are no rules
   Library => No rules
   Framework => Miltrary => there are set of rules predefine we need to follow them

6. what is the npx ?
   This will come from the node package manager and its node package executer
   This allows us to execute directly from the npm registry without installing them in globally
   Example : npx create-react-app my-app

7. What is the Babel ?
   a. React js uses its own compiler ie. Jsx compiler to convert the jsx code into plain javascript code
   b. But for older browsers which does not support es6 syntax we use Babel to transform our code into es5 so that these older browsers can understand it .
   b. But if we want to run our application on the browser then we also need another tool
   called Babel to convert the JSX code into Plain JavaScript Code so that Browser can understand it .
8. How does Babel work ?
   Babel takes JSX code and converts it into Plain JavaScript Code using @babel/preseet-env plugin,
   {
   "presets": ["@babel/preset-env", "@babel/preset-react"],
   "plugins": ["@babel/plugin-proposal-class-properties"]
   }
   @babel/preset-env
   Modern Javascript codes converted into the javascript code that can be run on the Javascript engine .
   @babel/preset-react
   Converts the JSX syntax into Plain Javascript Syntax
   @babel/plugin-proposal-class-properties
   Allows class properties to be used in Javascript Classes

9. What is the Virtual DOM ?
   It's a lightweight in memory representation of actual DOM which helps React to keep track of
   changes made to the UI so that only those parts of the page needs to be re rendered instead
   of entire page .
10. Why we need a hooks in react js ?
    Hooks were introduced in React 16.8 , They allow us to use state and
    lifecycle methods outside of the class component
