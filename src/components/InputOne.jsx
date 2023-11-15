function InputOne({ setNum1, num1 }) {
  function handleInput1Change(e) {
    setNum1(e.target.value);
  }

  return (
    <>
      <span>1-ci eded</span>{" "}
      <input
        value={num1}
        onChange={(e) => handleInput1Change(e)}
        placeholder="1-ci eded"
      />
    </>
  );
}

export default InputOne;
