import React from "react";

const Prop = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Setup: {props.setup}</h3>
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
};

export default Prop;
