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
      
   https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


      
