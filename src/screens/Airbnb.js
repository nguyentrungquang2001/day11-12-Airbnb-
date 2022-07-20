import React from "react";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import NavbarAirbnb from "../components/NavbarAirbnb";
import data from "../data";
const Airbnb = () => {
  const carts = data.map((item) => {
    console.log(item);
    return <Cart key={item.id} {...item} />;
  });
  console.log(data);
  return (
    <div>
      <NavbarAirbnb />
      {/* <Hero /> */}
      <section className="cards-list">{carts}</section>
    </div>
  );
};

export default Airbnb;
