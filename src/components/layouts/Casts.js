import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../store/actions/moviesAction";
import "../../assets/styles/Casts.scss";

const Casts = ({ getMovieById, casts }) => {
  let { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, []);

  const lists =
    casts &&
    casts.map(item => (
      <div className="casts__img">
        <img src={item.photo} alt={item.name}></img>
        <p>{item.name}</p>
      </div>
    ));
  return (
    <div className="casts">
      <div className="casts__container">{lists}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { casts: state.movies.movieId.cast };
};

export default connect(mapStateToProps, { getMovieById })(Casts);
