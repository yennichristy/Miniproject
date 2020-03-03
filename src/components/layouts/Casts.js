import React, { useState } from "react";
import Picture from "../../assets/pictures/profile.jpeg";
import "../../assets/styles/Casts.scss";

const Casts = () => {
  const [char, setChar] = useState([
    {
      id: 1,
      name: "Kaka",
      image: { Picture }
    },
    {
      id: 2,
      name: "lala",
      image: { Picture }
    },
    {
      id: 2,
      name: "lala",
      image: { Picture }
    }
  ]);

  const list = char.map(item => (
    <div className="casts__img">
      <img src={item.image.Picture} alt="casts"></img>
      <p>{item.name}</p>
    </div>
  ));

  return (
    <div className="casts">
      <div className="casts__container">{list}</div>
    </div>
  );
};

export default Casts;
