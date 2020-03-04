import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BeautyStars from "beauty-stars";
import "../../assets/styles/Banner.scss";
import { getMovieById } from "../../store/actions/moviesAction";

const Banner = ({ movie, getMovieById }) => {
  let { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, []);

  return (
    <div className="banner">
      <div className="banner__shadow">
        <div className="banner__shadow__content">
          <h1>{movie.title}</h1>
          <div className="banner__shadow__content--rating">
            <BeautyStars size="20px" maxStars="1" inactiveColor="#FFED76">
              {movie.rating}
            </BeautyStars>
          </div>
          <p>2200 review</p>
          <p>{movie.synopsis}</p>
          <button className=" banner__shadow__content__trailer">
            Watch Trailer
          </button>
          <button className=" banner__shadow__content__watchlist">
            Add to Watchhlist
          </button>
        </div>
      </div>
      <div className="banner__img">
        <img src={movie.poster} alt={movie.title} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.movies.movieId
  };
};

export default connect(mapStateToProps, { getMovieById })(Banner);
