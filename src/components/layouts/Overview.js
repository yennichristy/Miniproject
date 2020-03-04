import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../../assets/styles/Overview.scss";
import { getMovieById } from "../../store/actions/moviesAction";

const Overview = ({ movie, getMovieById }) => {
  let { id } = useParams();

  React.useEffect(() => {
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
          <p>Featured song : </p>
          <p>Director : James Cameron</p>
          <p>Featured song : Soldier dream</p>
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
