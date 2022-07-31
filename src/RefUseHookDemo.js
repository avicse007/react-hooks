import './RefUseHookDemo.css';
import { useState,useRef } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [seconds,setSeconds] = useState(0);
  const renderedRef = useRef(0);
  const inputRef = useRef();
  const timerRef = useRef(0);
  
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

  const resetTimer = () => {
    stopTimer();
    if (seconds) { 
      renderedRef.current++;
      setSeconds(0);
    }
  }
    


  const handleChange = (e) => { 
    setRandomInput(e.target.value);
    renderedRef.current++;
  }
  const showHideInputText = (e) => { 
    inputRef.current.hidden = !inputRef.current.hidden;
    if (!inputRef.current.hidden) { 
      inputRef.current.focus();
    }
  }
  return (
    <div className="App">
      <header>UseRef hook demo</header>
      <main className="App-header">  
    <input
        ref={ inputRef }  
        type="text"
        value={randomInput}
        placeholder="Random input"
        onChange={handleChange}
      />
        <br /><br />
        <p> Input : {randomInput}</p>
        <br /><br />
        <p> Renders : {renderedRef.current}</p>
        <br /><br />
        <p> Seconds : {seconds}</p>
        <br /><br />
        <div className="Buttons-div">
        <button className="Buttons" onClick={startTimer}>Start Timer</button>
        <button className="Buttons" onClick={resetTimer}>Reset Timer</button>
        <button className="Buttons" onClick={stopTimer}>Stop Timer</button>
        <button className="Buttons" onClick={showHideInputText}>Show/Hide</button>
        </div>
    </main>
    </div>
  );
}
export default App;
