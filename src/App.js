import React from "react";
import { connect } from "react-redux";
import User from "./components/pages/User";
import { Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Slider from "./components/layouts/Slider";
import AboutMovie from "./components/layouts/AboutMovie";
import Overview from "./components/pages/Overview";
// import "./App.css";
// import { getMovies, addMovie, delMovie } from "./store/actions/movie";

// const App = ({ movies, getMovies, addMovie, delMovie }) => {
//   const [title, setTitle] = React.useState("");
//   const list = movies.map(item => (
//     <li key={item.id}>
//       {item.title}
//       <button onClick={() => delMovie(item.id)}>delete</button>
//     </li>
//   ));

//   const change = e => {
//     setTitle(e.target.value);
//   };

//   const submit = e => {
//     e.preventDefault();
//     addMovie(title);
//     setTitle("");
//   };

//   React.useEffect(() => {
//     getMovies();
//   }, [getMovies]);

//   return (
//     <div className="App">
//       <h1>Redux with API</h1>
//       <form onSubmit={submit}>
//         <input
//           style={{ width: "50%" }}
//           value={title}
//           type="text"
//           placeholder="title"
//           onChange={change}
//         ></input>
//         <button>add</button>
//       </form>
//       {list}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     movies: state.movieReducer.movies
//   };
// };

// export default connect(mapStateToProps, { getMovies, addMovie, delMovie })(App);

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <AboutMovie />
      <Overview />
      <Route path="/user">
        <User />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
