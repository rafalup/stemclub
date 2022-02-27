import React from "react";

import Carousel from "./../Components/Carousel";

import "./../css/home.css"
function Home() {
  return (
    <div className="container">
      <div>
        <Carousel />
      </div>

      <div className="row">



        <div className="column">
          <div className="card">
            <div className="card-container">
              <h2>Métodos</h2>
              <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>

            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-container">
              <h2>Objetivos</h2>

              <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Home;