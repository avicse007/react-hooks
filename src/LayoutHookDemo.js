import './ReducerHookDemo.css';
import { useState , useLayoutEffect, useEffect } from 'react';



function LayoutHookDemo() {
  const [number, setNumber] = useState(0);
  const [style, setStyle] = useState();

  /*useEffect*/useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 750);

    for (let i = 0; i <= 1_0000_0000; i++) {
      if (i === 1_0000_0000)
        setStyle({ paddingTop: `${random}px` });
    }
  }, [number]);
  
  return (
    <div className="App">
    <header>UseLayoutHook Demo </header>  
    <main className="App-header">
        <br /><br />
        <p style={style}> Number : {number}</p>
        <br /><br />
        <div className="Buttons-div" >
        <button
          className="Buttons"
          onClick={(() => setNumber(number+1))}>
          +</button>
        <button
          className="Buttons"
          onClick={(() => setNumber(number-1))}>
          -</button>
        </div>
    </main>
    </div>
  );
}
export default LayoutHookDemo;
