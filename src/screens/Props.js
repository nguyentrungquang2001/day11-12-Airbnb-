import React from "react";
import Prop from "../components/Props";
const Props = () => {
  return (
    <div>
      <Prop
        setup="I got my daughter a fridge for her birthday."
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }]}
      />
      <Prop
        setup="I got my daughter a fridge for her birthday."
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={false}
        upvotes={10}
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }]}
      />
    </div>
  );
};

export default Props;
