import { useState } from 'react';
import './App.css';
import Views from './components/Views';
import Buttons from './components/Buttons';
import { evaluate } from 'mathjs';
function App() {
  const [display, setDisplay] = useState([]);
  const addDisplay = (val) =>{
    setDisplay(display + val);  
  };
  const calculateResult = () => {
    if (display){
      setDisplay(evaluate(display));
    } else {
      alert('Enter values to calculate')
    }
  };
  const cleanCharacter = () => {
    setDisplay.splice()
  }
  console.log(display)
  return (
    <div className="App">
      <Views
        display={display}
      />
      <div>
        <Buttons handlerClick={addDisplay}>(</Buttons>
        <Buttons handlerClick={addDisplay}>)</Buttons>
        <Buttons handlerClick={addDisplay}>%</Buttons>
        <Buttons handlerClick={addDisplay}>/</Buttons>
      </div>
      <div>
        <Buttons handlerClick={addDisplay}>7</Buttons>
        <Buttons handlerClick={addDisplay}>8</Buttons>
        <Buttons handlerClick={addDisplay}>9</Buttons>
        <Buttons handlerClick={addDisplay}>*</Buttons>
      </div>
      <div>
        <Buttons handlerClick={addDisplay}>4</Buttons>
        <Buttons handlerClick={addDisplay}>5</Buttons>
        <Buttons handlerClick={addDisplay}>6</Buttons>
        <Buttons handlerClick={addDisplay}>-</Buttons>
      </div>
      <div>
        <Buttons handlerClick={addDisplay}>1</Buttons>
        <Buttons handlerClick={addDisplay}>2</Buttons>
        <Buttons handlerClick={addDisplay}>3</Buttons>
        <Buttons handlerClick={addDisplay}>+</Buttons>
      </div>
      <div>
        <Buttons handlerClick={addDisplay}>0</Buttons>
        <Buttons handlerClick={addDisplay}>.</Buttons>
        <Buttons handlerClick={() => calculateResult()}>=</Buttons>
        <Buttons handlerClick={() => setDisplay('')}>AC</Buttons>
      </div>
      <footer className='footer'>
        <p>© 2023 | by Luciano Griffa</p>
      </footer>
    </div>
  );
}
export default App;