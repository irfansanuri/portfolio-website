const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
              <a
                href="https://www.linkedin.com/in/irfansanuri/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/irfansanuri" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a href="#contactus">
                <i className="fas fa-envelope" />
              </a>
              <a href="#">
                <i className="fas fa-user" />
              </a>
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© {new Date().getFullYear()} Irfan Sanuri</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
