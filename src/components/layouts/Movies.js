import React, { useEffect } from "react";
import "../../assets/styles/Movies.scss";
import { connect } from "react-redux";
import { movieList } from "../../store/actions/moviesAction";
import { Link } from "react-router-dom";

const Movies = ({ movieList, movies }) => {
  useEffect(() => {
    movieList();
  }, [movieList]);

  const movieLists = movies.map(item => (
    <Link to={`/${item._id}`}>
      <div>
        <img src={item.poster} alt={item.title}></img>
        <p>{item.title}</p>
      </div>
    </Link>
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
