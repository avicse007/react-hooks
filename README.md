# Getting Started with Create React App

This is a tutorial on different hooks used in react components

<details><summary>useReducer</summary>
<p>

Use this hooks when you have to manage the state of a component and the state is a complex state.
If uses reducer, dispatch and actions to maintain and update the state.

#### useReducer takes two parameters one is reducer function and other is the state .

eg
`const [state, dispatch] = useReducer(reducer,{initialState});`

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

<details><summary>useLayoutEffect</summary>
<p>
the reason why you want to choose the useEffect hook 99% of the time, and the reason why you want to choose useLayoutEffect the other 1%.
</p>
<h3>Difference between useEffect and useLayoutEffect </h3>
<p>
useEffect is  asynchronous that means it will not delay the re-painting of the UI once the code executed inside the useEffect.

useLayoutEffect is synchronous and it will delay the re-painting of the UI once the code executed inside the useLayoutEffect.

eg
'''
useLayoutEffect(() => {
const random = Math.floor(Math.random() \* 750);

    for (let i = 0; i <= 1_0000_0000; i++) {
      if (i === 1_0000_0000)
        setStyle({ paddingTop: `${random}px` });
    }

}, [number]);
'''

</p>
</details>

<details><summary>useRef</summary>
<p>
## With useRef the value persists.
## With useRef the update in the value does not re-renders the state.

#### useRef .

eg

```

const renderedRef = useRef(0);
const inputRef = useRef();
const timerRef = useRef(0);

```

#### useRef to get a dom element.

eg.

```
<input
        ref={ inputRef }
        type="text"
        value={randomInput}
        placeholder="Random input"
        onChange={handleChange}
      />


```

### Accessing the HTML DOM element and toggling the hidden property

```
const showHideInputText = (e) => {
    inputRef.current.hidden = !inputRef.current.hidden;
    if (!inputRef.current.hidden) {
      inputRef.current.focus();
    }
  }

```

#### ref value persists eg using timerRef.current to clear the interval later on.

eg.

```
const startTimer = () => {
    timerRef.current = setInterval(() => {
      renderedRef.current++;
      setSeconds(prev => prev + 1);
    }, 1000);

  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  }
```

</p>
</details>
