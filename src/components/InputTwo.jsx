function InputTwo({ setNum2, num2 }) {
  function handleInput2Change(e) {
    setNum2(e.target.value);
  }

  return (
    <>
      <span>1-ci eded</span>{" "}
      <input
        value={num2}
        onChange={(e) => handleInput2Change(e)}
        placeholder="2-ci eded"
      />
    </>
  );
}

export default InputTwo;
