import React from "react";

function TextInput({ inputValue, setInputValue }) {
  //synthetic event React event,target.value => รับค่ามาผ่านevent (ค่าจากหน้าจอ)s
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearValue = () => {
    setInputValue("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClearValue}>Clear</button>
    </>
  );
}

export default TextInput;
