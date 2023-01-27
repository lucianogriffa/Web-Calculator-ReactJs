import { useState } from 'react';
import './App.css';
import Views from './components/View/Views';
import Numbers from './components/Button/Numbers';
import Characters from './components/Button/Characters';
import AllClean from './components/Button/AllClean';
import { evaluate } from 'mathjs';
function App() {
  const [display, setDisplay] = useState([]);
  const [result, setResult] = useState()
  // View in the display
  const addDisplay = (val) =>{
    setDisplay(display + val);  
  };
  // Operation Calculate
  const calculateResult = () => {
    if (display){
      setResult(evaluate(display));
    } else {
      alert('Enter values to calculate')
    }
  };
  // All Clean
  const handleAc = () => {
    setDisplay([])
    setResult()
  }
  // Result Key
  const resultKey = () => {
    calculateResult()
  }
  console.log(display)
  return (
    <div className="App">
      <div className='container'>
        <Views
          result={result}
          displayOperation={display}
        />
        <div className='containerDiv'>
          <Characters handlerClick={addDisplay}>(</Characters>
          <Characters handlerClick={addDisplay}>)</Characters>
          <Characters handlerClick={addDisplay}>%</Characters>
          <Characters handlerClick={addDisplay}>/</Characters>
        </div>
        <div className='containerDiv'>
          <Numbers handlerClick={addDisplay}>7</Numbers>
          <Numbers handlerClick={addDisplay}>8</Numbers>
          <Numbers handlerClick={addDisplay}>9</Numbers>
          <Characters handlerClick={addDisplay}>*</Characters>
        </div>
        <div className='containerDiv'>
          <Numbers handlerClick={addDisplay}>4</Numbers>
          <Numbers handlerClick={addDisplay}>5</Numbers>
          <Numbers handlerClick={addDisplay}>6</Numbers>
          <Characters handlerClick={addDisplay}>-</Characters>
        </div>
        <div className='containerDiv'>
          <Numbers handlerClick={addDisplay}>1</Numbers>
          <Numbers handlerClick={addDisplay}>2</Numbers>
          <Numbers handlerClick={addDisplay}>3</Numbers>
          <Characters handlerClick={addDisplay}>+</Characters>
        </div>
        <div className='containerDiv'>
          <Numbers handlerClick={addDisplay}>0</Numbers>
          <Characters handlerClick={addDisplay}>.</Characters>
          <Characters handlerClick={() => resultKey()}>=</Characters>
          <AllClean handlerClick={() => handleAc()}>Ac</AllClean>
        </div>
        <footer className='footer'>
          <p>© 2023 | by Luciano Griffa</p>
        </footer>
      </div>
    </div>
  );
}
export default App;