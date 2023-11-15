import React from "react";
function ToplamaBtn({num1, num2, setResult}) {
  function handleClickTopla() {
    setResult(+num1 + +num2);
  }
    return (
      <>
       <button  onClick={() => handleClickTopla()}>Toplama</button>

      </>
    )
  }
  
  export default ToplamaBtn