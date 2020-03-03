import React, { useState } from "react";
import "../../assets/styles/Movies.scss";
import Picture from "../../assets/pictures/profile.jpeg";

const Movies = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Sun", image: { Picture } },
    { id: 2, title: "Flower", image: { Picture } },
    { id: 3, title: "Bright", image: { Picture } }
  ]);

  const movieList = movie.map(item => (
    <div>
      <img src={item.image.Picture} alt={item.title}></img>
      <p>{item.title}</p>
    </div>
  ));

  return (
    <div className="movies">
      <div className="movies__list">{movieList}</div>
    </div>
  );
};

export default Movies;
