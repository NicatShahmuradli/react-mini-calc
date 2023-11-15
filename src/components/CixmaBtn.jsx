import React from "react";
function CixmaBtn({num1, num2, setResult}) {
  function handleClickCix() {
    setResult(+num1 - +num2);
  }
    return (
      <>
       <button  onClick={() => handleClickCix()}>Çıxma</button>

      </>
    )
  }
  
  export default CixmaBtn