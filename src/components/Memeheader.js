import React from "react";

const Memeheader = () => {
  return (
    <header className="header">
      <img
        src={require("../imges/3-2-troll-face-meme-png.png")}
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
};

export default Memeheader;
