import React, { useState } from "react";
import InputOne from "./components/InputOne.jsx";
import InputTwo from "./components/InputTwo.jsx";
import InputResult from "./components/InputResult.jsx";
import ToplamaBtn from "./components/ToplamaBtn.jsx";
import CixmaBtn from "./components/CixmaBtn.jsx";
import VurmaBtn from "./components/VurmaBtn.jsx";
import BolmeBtn from "./components/BolmeBtn.jsx";

import "./App.css";

function App() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [result, setResult] = useState("");

 
  
  return (
    <>
      <InputOne num1={num1} setNum1={setNum1} />
      <br></br>
      <InputTwo num1={num2} setNum2={setNum2} />
      <br></br>
      <ToplamaBtn num1={num1} num2={num2} setResult={setResult}/>
      <CixmaBtn num1={num1} num2={num2} setResult={setResult}/>
      <VurmaBtn num1={num1} num2={num2} setResult={setResult}/>
      <BolmeBtn num1={num1} num2={num2} setResult={setResult}/>

      <br></br>
      <InputResult result={result}/>
    </>
  );
}

export default App;
