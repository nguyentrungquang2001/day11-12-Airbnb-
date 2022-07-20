import React from "react";

const OnClick = () => {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleOnMouseOver() {
    console.log("MouseOver");
  }
  return (
    <div>
      <div className="container">
        <img
          src="https://picsum.photos/640/360"
          onMouseOver={handleOnMouseOver}
        />
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default OnClick;
