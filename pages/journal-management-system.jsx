import React from "react";

const technologies = [
  "React JS",
  "MongoDB",
  "Node JS",
  "Express",
  "REST API"
];

const overview = `
This is my final year project. Journal Management System
`;

const Journal = () => {
  return (
    <section id="journal" className="main-left">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(static/img/projects/coffee.jpg)",
        }}
      >
        <div
          className="d-flex align-items-end pb-4"
          style={{ backgroundColor: "rgba(0,0,0,.7)", height: "50vh" }}
        >
          <div className="container text-white">
            <h1>Journal Management System</h1>
            <p>React JS / MongoDB / Node JS</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-40px-tb">
          <div className="col-12 col-lg-9 pb-4">
            <h3 className="py-3">Overview</h3>
            <p>
              {overview}
            </p>
            <div className="btn-bar go-to">
              <a
                className="m-btn m-btn-theme mr-2"
                href="https://github.com/irfansanuri/discover-coffee"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                className="m-btn m-btn-t-theme"
                href="https://discover-coffee-bi99.vercel.app/"
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
              {technologies.map((name, index) => (
                <p key={index}>
                  <i className="fas fa-circle primary-color mr-2" /> {name}
                </p>
              ))}
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

export default Journal;
