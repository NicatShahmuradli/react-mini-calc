import React from "react";
function VurmaBtn({num1, num2, setResult}) {
  function handleClickVur() {
    setResult(+num1 * +num2);
  }
    return (
      <>
       <button  onClick={() => handleClickVur()}>Vurma</button>

      </>
    )
  }
  
  export default VurmaBtn