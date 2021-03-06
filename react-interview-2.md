## 1. How does react recieve an browser event?
In actuality, React doesn’t attach event handlers to the nodes themselves.
Instead, a single event listener is attached to the root of the document; 
when an event is fired, React maps it to the appropriate component element.
      
## 2. What is the use of bind function in react?
https://www.youtube.com/watch?v=FhSnclaWFH8
      
## 3. When can you skip using bind when binding to event?
you can skip if you are not using component state.
      
## 4. Why you should not use bind functions inside the render function?
https://stackoverflow.com/questions/38334062/why-do-you-need-to-bind-a-function-in-a-constructor
To Avoid function will attach on every render
      
## 5. Why you shoud not use the Arrow function to attach function to event? OR Why you shouldn't use inline arrow functions in JSX props
https://stackoverflow.com/questions/36677733/why-shouldnt-jsx-props-use-arrow-functions-or-bind

Arrow function should not be used in the component render method. Render is called repeatedly, thus arrow function create a new function often and unnecessary. 

## 6. What are syntetic events and event pooling?
https://stackoverflow.com/questions/36114196/what-is-event-pooling-in-react
Event Pooling - React uses SyntheticEvent which is a wrapper for native browser events so that they have consistent properties across different browsers. 
The event handlers that we have in any react-app are actually passed instances of SyntheticEvent unless 
we use nativeEvent attribute to get the underlying browser event.

Wrapping native event instances can cause performance issues since every synthetic event wrapper
that's created will also need to be garbage collected at some point, which can be expensive in terms of CPU time.

React deals with this problem by allocating a synthetic instance pool. 
Whenever an event is triggered, it takes an instance from the pool and populates its properties and reuses it. 
When the event handler has finished running, all properties will be nullified and the synthetic event instance is released back into the pool. 
Hence, increasing the performance.

> Synthetic events is a cross-browser wrapper around the browser's native event. 
  It has the same interface as the browser's native event, including stopPropagation() and preventDefault() , 
  except the events work identically across all browsers. It achieves high performance by automatically using event delegation.

## 7. Tips on React for large scale projects

## 8. What is the use of PureComponent & Why should one not use shouldComponentMount to prevent re-rendering?
This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. 
Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. 
PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.

If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and 
return false to tell React the update can be skipped. Note that returning false does not prevent child components from re-rendering when their state changes.

We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.

## 9. What are the various types of lifecycle methods in react?
You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.
They fall in three category Mount, Update and Unmount.

   + **Mounting** – Birth of your component
   + **Update** – Growth of your component
   + **Unmount** – Death of your component
   
   Additional for Handling Errors
   + **Error Handle** - These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
      ```   
      static getDerivedStateFromError()
      componentDidCatch()
      ```
      
   https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
   ![](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)
   
## 10. What are the most commonly used react component lifecycle methods?
![](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

## 11. What is the use of `constructor` in react component?
The constructor for a React component is called before it is mounted.
#### Best Practice of using `constructor`:
+ Use to initialize the state. Constructor is the only place where you should assign `this.state` directly
+ Use to bind event handler methods to instance 
+ when implemententing you must call `super(props)` first. Otherwise this.props will be undefined in the `constructor`
+ Should not call `this.setState()` in  `constructor`
```
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
#### Note:
Avoid copying props into state! This is a common mistake:
```
constructor(props) {
 super(props);
 // Don't do this!
 this.state = { color: props.color };
}
```
Only use this pattern if you intentionally want to ignore prop updates.

## 11. What is the use of `render()` method?
+ Most used method in the react lifecycle methods 
+ `render()` is the only required method within a class component
+ handles the rendering of your component to the UI, during the **mounting** and **updating** of your component.
```
class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
}
```
+ The `render()` method returns **JSX** that is displayed in the UI. 
  A `render()` can also return a null if there is nothing to render for that component.

#### Note
> **A render() method has to be pure with no side-effects.**

React requires that your render() is pure. 
Pure functions are those that do not have any side-effects and 
will always return the same output when the same inputs are passed.

**This means that you can not setState() within a render().**

## 12. What is the use of `componentDidMount()`?
`componentDidMount()` is called as soon as the component is mounted and ready. 
This is a good place to initiate API calls, if you need to load data from a remote endpoint.

Unlike the render() method, componentDidMount() allows the use of setState(). 
Calling the setState() here will update state and cause another rendering 
but it will happen before the browser updates the UI. 
This is to ensure that the user will not see any UI updates with the double rendering.

> You can modify the component state within the componentDidMount(), 
but use it with caution. It could lead to performance issues

## 13. What is the use of component did update?

`componentDidUpdate(prevProps, prevState, snapshot)`

+ Invoked as soon as the updating happens.
+ Most commonly used for Updating the DOM in response to prop or state changes
+ `componentDidUpdate()` will not be invoked if `shouldComponentUpdate()` returns `false`.

You can call setState() in this lifecycle, but keep in mind that you will need to **wrap it in a condition to check for state or prop changes from previous state.**
Incorrect usage of setState() can lead to an **infinite loop**.

```
componentDidUpdate(prevProps) {
 //Typical usage, don't forget to compare the props
 if (this.props.userName !== prevProps.userName) {
   this.fetchData(this.props.userName);
 }
}
```
In this case, there won’t be a need to make the API call if the props did not change.

#### Note:
If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate(). Otherwise this parameter will be undefined.

## 14. What is the use of `componentWillUnmount`?
+ invoked immediately before a component is unmounted and destroyed
+ **Perform any necessary cleanup**: clearing timers, cancelling api calls, or clearing any caches in storage.
+ **should not call `setState()` in `componentWillUnmount()`** because the component will never be re-rendered

```
componentWillUnmount() {
 window.removeEventListener('resize', this.resizeListener)
}
```

## 15. What is the use of `shouldComponentUpdate()`?
`shouldComponentUpdate(nextProps, nextState)`
+ shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
+ This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand

## 16. What is the use of `getDerivedStateFromProps()` and `getSnapshotBeforeUpdate()`?

https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

## 17. How to recieve the update state from new props? [Microsoft]

