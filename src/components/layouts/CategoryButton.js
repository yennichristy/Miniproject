import React from "react";
import "../../assets/styles/CategoryButton.scss";

const Category = () => {
  return (
    <div className="category">
      <h4>Browse by Category</h4>
      <div className="category__btn">
        <button>All</button>
        <button>Anime</button>
        <button>Action</button>
        <button>Adventure</button>
        <button>Science-Fiction</button>
        <button>Comedy</button>
      </div>
    </div>
  );
};

export default Category;
