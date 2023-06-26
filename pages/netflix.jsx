import React from "react";

const Netflix = () => {
  return (
    <section id="netflix" className="main-left">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(static/img/projects/netflix.jpg)",
          backgroundSize: "100vw",
        }}
      >
        <div
          className="d-flex align-items-end pb-4"
          style={{ backgroundColor: "rgba(0,0,0,.7)", height: "50vh" }}
        >
          <div className="container text-white">
            <h1>Netflix App</h1>
            <p>Next JS</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-40px-tb">
          <div className="col-12 col-lg-9 pb-4">
            <h3 className="py-3">Overview</h3>
            <p>
              Still Under Development
            </p>
            <div className="btn-bar go-to">
              <a
                className="m-btn m-btn-theme mr-2"
                href="https://github.com/irfansanuri/netflix-clone"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                className="m-btn m-btn-t-theme"
                href="https://netflix-clone-three-zeta-51.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="feature-box-2">
              <p className="text-center font-weight-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 media-body">
                <p className="text-gray-600 flex items-center">
                  <i className="fas fa-circle primary-color mr-2" /> NextJS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <a href="/">Back To Home</a>
        </div>
      </div>
    </section>
  );
};

export default Netflix;
