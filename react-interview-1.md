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

## 3. What is the Pure Component in React?

## 4. What is the Functional or Stateless Component in React?

## 5. How Stateless Component different with Pure Component?
https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b
## 6. What is the Higher Order Component?
