import React from "react";
import pfp from "./pfp.jpg";

function App() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] overflow-auto">
      <div className="flex items-center justify-center h-screen rotate-180">
        <div className="card lg:card-side bg-blue3 shadow-xl w-5/6 h-5/6 overflow-auto">
          <div className="avatar p-4">
            <div className="w-96 h-96 rounded-full">
              <img src={pfp} alt="Profile Picture" />
            </div>
          </div>
          <div className="card-body text-primary">
            <h1 className="card-title text-4xl">Nataliya Karmarkar</h1>
            <p className="text-lg pt-2">
              Hello! I'm a current grad student at University of San Francisco
              majoring in Comp Sci. and set to gradate in May 2024. I live in
              San Francisco, California. I spend my days working on school work
              or reading. I'm a huge fan of music and love to listen to it in my
              free time. I love to cook and I'm also good at it but don't get
              enough time to do it. <br /> <br /> Connect with me! <br /> <br />
              <a href="https://www.linkedin.com/in/nataliyakarmarkar">
                <button className="btn btn-secondary btn-outline btn-lg rounded-full mr-4 w-64 hover:w-80">
                  LinkedIn
                </button>
              </a>
              <a href="https://www.github.com/nataliya-a">
                <button className="btn btn-secondary btn-outline btn-lg rounded-full mr-4 w-64 mt-4 hover:w-80">
                  GitHub
                </button>
              </a>
              <a href="https://open.spotify.com/user/urrpvw1e98z4rw5vhtsxbclqt?si=9bba1fe22a284084">
                <button className="btn btn-secondary btn-outline btn-lg rounded-full mr-4 w-64 hover:w-80 mt-4">
                  Spotify
                </button>
              </a>
              <a href="https://www.instagram.com/nataliyakarmarkar/">
                <button className="btn btn-secondary btn-outline btn-lg rounded-full mr-4 w-64 mt-4 hover:w-80">
                  Instagram
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
