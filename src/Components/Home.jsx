import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 as">
            <h2>Welcome to Shoppie</h2>
          </div>
          <div className="col-md-6">
            <img
              src="./Images/Shopping.svg"
              className="home-image img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
