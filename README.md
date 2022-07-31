# Getting Started with Create React App

This is a tutorial on different hooks used in react components


<details><summary>useReducer</summary>
<p>


Use this hooks when you have to manage the state of a component and the state is a complex state.
If uses reducer, dispatch and actions to maintain and update the state.

#### useReducer takes two parameters one is reducer function and other is the state .
eg
``` const [state, dispatch] = useReducer(reducer,{initialState}); ```

#### reducer is a function that takes two arguments : action,state.
eg.
```
const reducer = (state,action) => {

switch (action.type) {
case 'INCREMENT':
return { ...state,count: state.count + 1 };
case 'DECREMENT':
return { ...state,count: state.count - 1 };
case 'COLOR':
return { ...state,color: !state.color };
case 'USER_INPUT':
return { ...state,input: action.payload };

    default:
      throw new Error();

}
}
```

#### Dispatch is used to dispatch an action to the reducer.
eg.
```
<input
type="text"
value={state.input}
placeholder="Random input"
onChange={ e => dispatch({type: ACTION.USER_INPUT , payload : e.target.value})}
/>
```
</p>
</details>    
    
    

## useLayoutEffect

## useRef
