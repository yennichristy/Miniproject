import React, { useState, useEffect } from "react";
import "../../assets/styles/Movies.scss";
import Picture from "../../assets/pictures/profile.jpeg";
import { connect } from "react-redux";
import { movieList } from "../../store/actions/moviesAction";

const Movies = ({ movieList, movies }) => {
  useEffect(() => {
    movieList();
  }, [movieList]);

  const movieLists = movies.map(item => (
    <div>
      <img src={item.poster} alt={item.title}></img>
      <p>{item.title}</p>
    </div>
  ));

  return (
    <div className="movies">
      <div className="movies__list">{movieLists}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps, { movieList })(Movies);
