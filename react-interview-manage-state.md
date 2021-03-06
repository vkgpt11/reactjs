## What is the use of Redux?

## What is the use of Hooks?
> Hooks are functions that lets you "**Hook** into " React **state** and **lifecycle** features from **functional components**.
- Replacement for class based components and states

## Why react hooks?
- Different way of doing same things.
- No More complex lifecycle methods
- Simpler code. No more `mapStateToProps`, `mapDispathToProps` with redux instead you can use `useSelected` and `useDispatch`
- Hooking into component is much eaiser.

## Rules of React Hooks?
- Only call Hooks at the top level
- Don't call hooks inside loops, conditions or nested functions
- Call hooks from React Components or Custom Hooks

## Map Lifecycle class methods to lifecycle hooks?

|State Of lifecycle|React|Hooks|
|-----|------|-----|
|**Initial Render**| getDerivedStateFromProps | useEffect(()=>{}, [prop1, prop2])|
||componentDidMount|useEffect(()=>{},[])|
|**Updates**| getDerivedStateFromProps | useEffect(()=>{}, [prop1, prop2]) |
||shouldComponentUpdate|useMemo()|
||componentDidUpdate|useEffect(()=>{})|
||getSnapshotBeforeUpdate|custom Hooks to hold previous state|
|**Unmount**| unmount | useEffect(()=> {return () => {//cleanuplogic}},[])|
|**Error Boundary**|getDerivedStateFromError|Nothing Available|
||componentDidCatch|Nothing Available|

## How to upgrade class project to hooks projects?
- Update react, react-dom version 
- Test
- Update the code on route at a time 
- Test
- this.state -> useState
- lifecycle events -> useEffect
- Test

## How do you debug react Hooks?
- Console.log
- Debugger statements 
- React Developer Tools (chrome plugin)
- useDebugValue


## How react Hooks are different from Redux?

## Using React Redux with Hooks.
https://www.youtube.com/watch?v=3zoIigieur0

## When to use Hooks over Redux?

## Hooks
https://www.youtube.com/watch?v=f3yRqkOFSCk&t=5s
https://www.imaginarycloud.com/blog/react-hooks-vs-redux
https://www.youtube.com/watch?v=eX_L39UvZes

## How does Redux works?
