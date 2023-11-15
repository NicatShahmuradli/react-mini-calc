import React from "react";
function BolmeBtn({num1, num2, setResult}) {
  function handleClickBol() {
    setResult(+num1 / +num2);
  }
    return (
      <>
       <button  onClick={() => handleClickBol()}>Bölmə</button>

      </>
    )
  }
  
  export default BolmeBtn