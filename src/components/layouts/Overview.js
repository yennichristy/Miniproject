import React from "react";
import "../../assets/styles/Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__synopsis">
        <div className="overview__synopsis--title">
          <p>Synopsis</p>
        </div>
        <div className="overview__synopsis--content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
      </div>
      <div className="overview__movie-info">
        <div className="overview__movie-info--title">
          <p>Movie Info</p>
        </div>
        <div div className="overview__movie-info--content">
          <p>Release date : January 5, 1998</p>
          <p>Director : John Doe</p>
          <p>Featured song : Pegasus fantasi</p>
          <p>Budget : 200 million USD</p>
          <p>Release date : January 5, 1998</p>
          <p>Director : James Cameron</p>
          <p>Featured song : Soldier dream</p>
          <p>Budget : 200 million USD</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
