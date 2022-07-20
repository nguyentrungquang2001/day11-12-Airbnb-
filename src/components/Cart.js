import React from "react";
import { IconName } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Cart = (props) => {
  let badgeText;
  if (props.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = "ONLINE";
  }

  console.log(props);
  return (
    <div>
      <div className="cart">
        <div className="card--badge">{badgeText}</div>
        <div className="cart_img">
          <img src={props.coverImg} />
        </div>
        <div className="car_start">
          {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
          <AiFillStar color="#fe395c" />
          <span>5.0</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Cart;
