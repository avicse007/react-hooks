import './ReducerHookDemo.css';
import { useReducer } from 'react';
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

const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  COLOR: 'COLOR',
  USER_INPUT : 'USER_INPUT'
  
}


function ReducerHookDemo() {
  const [state, dispatch] = useReducer(reducer,{
    count: 0,
    color: false,
    input: "",
  });
  
  return (
    <div className="App" style={{ color: state.color ? 'red' : 'blue' }}>
    <header>UseReducer</header>  
    <main className="App-header" style={{ color: state.color ? 'red' : 'blue' }}>
    <input
        type="text"
        value={state.input}
        placeholder="Random input"
        onChange={ e => dispatch({type: ACTION.USER_INPUT , payload : e.target.value})}
      />
        <br /><br />
        <p style={{ color: state.color ? 'red' : 'blue' }} > Input : {state.input}</p>
        <br /><br />
        <p style={{ color: state.color ? 'red' : 'blue' }} > Count : {state.count}</p>
        <br /><br />
        <div className="Buttons-div" >
        <button
          className="Buttons"
          style={{ color: state.color ? 'red' : 'blue' }}
          onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>
          +</button>
        <button
          className="Buttons"
          style={{ color: state.color ? 'red' : 'blue' }}
          onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>
          -</button>
        <button
          className="Buttons"
          style={{ color: state.color ? 'red' : 'blue' }}
          onClick={(() => dispatch({ type: ACTION.COLOR  }))}>
          Toggle Color</button>
        </div>
    </main>
    </div>
  );
}
export default ReducerHookDemo;
