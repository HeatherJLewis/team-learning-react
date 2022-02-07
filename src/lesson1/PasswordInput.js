import React, { useState, createElement } from "react";

function PasswordInput() {
  const [content, setContent] = useState("String");

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onClickHandler = () => {
    if (content === "rocket") {
      alert("Correct Password");
    } else {
      alert("Incorrect Password");
    }
  };
  // using creatElement to create HTML node:
  // const input = createElement("input", { onChange: onChangeHandler });
  // const paragraph = createElement("p", [], [content]);
  // const button = createElement("button", { onClick: onClickHandler }, [
  //   "just a string",
  // ]);

  // return createElement("div", [], [input, paragraph, button]);

  return (
    <div>
      <input onChange={onChangeHandler} />
      <p>{content}</p>
      <button onClick={onClickHandler}>Check Password</button>
    </div>
  );
}

export default PasswordInput;

// When a user types in the input box, the paragraph element below should show the content of the input box
// When a user clicks on the button, if the input is “rocket” show an alert which says “Correct Password”
// When a user clicks on the button, if the input is NOT “rocket” show an alert which says “Incorrect Password”
