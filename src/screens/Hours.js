import React from "react";

export const Hours = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "affternoon";
  } else timeOfDay = "night";
  return <div>{timeOfDay}</div>;
};
