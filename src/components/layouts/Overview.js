import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../../assets/styles/Overview.scss";
import { getMovieById } from "../../store/actions/moviesAction";

const Overview = ({ movie, getMovieById }) => {
  let { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, []);

  return (
    <div className="overview">
      <div className="overview__synopsis">
        <div className="overview__synopsis--title">
          <p>Synopsis</p>
        </div>
        <div className="overview__synopsis--content">
          <p>{movie.synopsis}</p>
        </div>
      </div>
      <div className="overview__movie-info">
        <div className="overview__movie-info--title">
          <p>Movie Info</p>
        </div>
        <div div className="overview__movie-info--content">
          <p>Release date: {movie.releaseDate}</p>
          <p>Budget: {movie.budget}</p>
          <p>Producer: {movie.producer} </p>
          <p>Writer: {movie.writer}</p>
          <p>Director: {movie.director}</p>
          <p>
            Casts:{" "}
            {movie.cast && movie.cast.map(item => <span>{item.name}</span>)}
          </p>
          {movie.tags && movie.tags.map(item => <button>{item}</button>)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.movies.movieId
  };
};

export default connect(mapStateToProps, { getMovieById })(Overview);
