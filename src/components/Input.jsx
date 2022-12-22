import React from "react";

function Input() {
  const inputStyleObj = {
    marginRight: "10px",
  };
  return (
    <div>
      <label htmlFor="text"> 제목 : </label>
      <input id="text" style={inputStyleObj} type="text" />
      <label htmlFor="contents"> 내용 : </label>
      <input id="contents" style={inputStyleObj} type="text" />
      <button>추가</button>
    </div>
  );
}

export default Input;
