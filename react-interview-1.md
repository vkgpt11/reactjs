# React Basic Interview questions

## 1. What is the difference between react and angular?
|Topic|React|Angular|
|---|---|---|
|Learning Curve|Medium to Steepest - it uses an “everything is JavaScript” approach, there are two caveats to React.js. First, is that it works best with ES6 syntax, which can be challenging for a beginner developer. Second is the use of JSX, a syntax hybrid of HTML and JavaScript|Steepest -  Angular has a lot of built-in, powerful features, though, which force developers into certain coding patterns that can be quite helpful in building applications. It make use of type-script which is eaiser for most of the C# & Java devs to learn|
|Architecture|Both Follows component based design. React does not follow any MVVM or MVC. It binds logic (Controller) and View tightly.| Angular also follows component based design. But decuple the Model & Logic with View. It follows mix of MVC and MVVM.|
|Binding| Allows only one-way binding. State can be bind directly to view. Any change in the view will be modified using callbacks | Allows two way databinding|
|DOM| Uses Virtual DOM, performance is faster for data intence applications | Uses Real DOM, performance is slower for data intence applications |
|Dependency Injection	| Does not provide dependency injection | Provide dependency injection |

## 2. What are the advantages of one-way databinding?
In react unidirectional data flow is:
+ State is passed to the view and to child components
+ actions are triggered by the view 
+ action can update the state
+ the state change is passed to the view and to child components
[](https://flaviocopes.com/react-unidirectional-data-flow/view-actions-state.png)
#### Advantages:
+ it’s less error prone, as you have more control over your data
+ it’s easier to debug, as you know what is coming from where

## 3. What is the Pure Component in React? When will you make use of it?
`React.PureComponent` is exactly the same as `React.Component` except that it handles the `shouldComponentUpdate()` method by default for you. When props or state changes, `React.PureComponent` will do a shallow comparison on both props and state. `React.Component` on the other hand won't compare current props and state to next out of the box.
#### Usage
if children components are classes and are being passed only some of the props of their parents, then PureComponent might be worth looking into.

#### Child Component as PureComponent
```
import React from 'react';
export default class Child extends React.PureComponent {
  render() {
    console.log('child rendered');
    return (
      <div>{ this.props.message }</div>
    );
  }
}
```
#### Parent Component as Component
```
import React from 'react';
import Child from './Child';
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'hello',
    };
  }
  handleClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };
  render() {
    console.log('parent rendered');
    return (
      <main>
        {this.state.counter}
        <br />
        <Child message={this.state.message} />
        <button type='button' onClick={this.handleClick}>Increment</button>
      </main>
    );
  }
}
```
In the above case the child component gets rendered only once. Even though we are changing the state in `handleClick` each time the button is clicked.
https://medium.com/better-programming/when-to-use-react-purecomponent-723f85738be1

## 4. What is the Functional Component in React? When to use it?
It’s just a function which accepts props and returns a React element

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
+ Much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks
+ They help you to use best practices. It will get easier to separate container and presentational components

## 5. How Stateless Component different with Pure Component?
**Pure Components** gives a considerable increase in performance because it reduces the number of render operation in the application which is a huge win for complex UI 

**Stateless Components** are easy and fast to implement. They are good for very small UI view where re-render cost won’t matter that much. They provide cleaner code and less number of files to deal with.

https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b
## 6. What is the Higher Order Component?
+ Share the same functionality across multiple components
+ Higher-order components take a component and return a component.
+ They are pure functions
+ Loader, Dialog(Modal) & Shared Layouts are examples of HOC

https://css-tricks.com/what-are-higher-order-components-in-react/
## 7. What is Container and presentational Components in react?
#### Container Component 
+ deal with the behavioral part
+ Tells the presentational component what should be rendered using props
+ Place your API calls and store the result into the component's state. 
#### Presentational Component
+ Coupled with the view or how things look
+ Accept props from their container counterpart and render them
+ Reusable and should stay decoupled from the behavioral layer
+ Receives the data and callbacks exclusively via props
+ Functional components should be your first choice for writing presentational components
+ Doesn't interact with the Redux store or make API calls

The usual structure is that there is a container component at the top that passes down the data to its child presentational components as props. This works for smaller projects; however, when the project gets bigger and you have a lot of intermediate components that just accept props and pass them on to child components, this will get nasty and hard to maintain. When this happens, it's better to create a container component unique to the leaf component, and this will ease the burden on the intermediate components.


## 8. is functional component and pure components are same?
A component is said to be pure if it is guaranteed to return the same result given the same props and state. A functional component is a good example of a pure component because, given an input, you know what will be rendered. ... Class components can be pure too as long as their props and state are immutable.

## 9. Stateful vs Stateless components?
You can use either a function or a class for creating **stateless components**. But unless you need to use a lifecycle hook in your components, you should go for stateless functional components. However, as of React v16, there are no performance benefits from using stateless functional components over class components. 

**Stateful components** are always class components. **Stateful components** have a state that gets initialized in the constructor. 

## 10. What is the difference between Controlled and Uncontrolled components?
**A Controlled Component** is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
**A Uncontrolled Component** is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
```
// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
```
https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components
