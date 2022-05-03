import './App.css';
import { useState } from 'react';
import Button from "./components/Button.jsx";
import Screen from "./components/Screen.jsx";
import ClearButton from './components/ClearButton';
import { evaluate } from 'mathjs';

function App() {

  const [ input, setInput ] = useState("");

  const agregarInput = value => {
    setInput(input + value)
  }

  const clearInput = () => {
    setInput("")
  }

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert("Ingrese un valor")
    }
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button agregarInput={agregarInput} onKeyPress="enter">1</Button>
          <Button agregarInput={agregarInput}>2</Button>
          <Button agregarInput={agregarInput}>3</Button>
          <Button agregarInput={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button agregarInput={agregarInput}>4</Button>
          <Button agregarInput={agregarInput}>5</Button>
          <Button agregarInput={agregarInput}>6</Button>
          <Button agregarInput={agregarInput}> - </Button>
        </div>
        <div className="fila">
          <Button agregarInput={agregarInput}>7</Button>
          <Button agregarInput={agregarInput}>8</Button>
          <Button agregarInput={agregarInput}>9</Button>
          <Button agregarInput={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button agregarInput={calculateResult}> =</Button>
          <Button agregarInput={agregarInput}>0</Button>
          <Button agregarInput={agregarInput}>.</Button>
          <Button agregarInput={agregarInput}> / </Button>
        </div>
        <div className="fila">
          <ClearButton clearInput={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
//the man in the high castel