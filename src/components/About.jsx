const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/about-us.jpg" alt="image" className="w-100" />
              <div className="nav social-icon">
                <a
                  href="https://www.linkedin.com/in/irfansanuri/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/irfansanuri" target="_blank">
                  <i className="fab fa-github" />
                </a>
                <a href="/#contactus">
                  <i className="fas fa-envelope" />
                </a>
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>Irfan Sanuri</h4>
              <h6>A Front-End Web Developer</h6>
              <p>
                I graduated with a first-class degree in artificial intelligence
                from Multimedia University, where I gained a solid foundation in
                programming and a deep understanding of how technology can
                transform our world. I believe technology is more than just a
                tool, it's a magical gateway to endless possibilities and a
                symbol of our wildest dreams and aspirations. Technology is the
                closest thing we have to fairytales and a beacon of hope for a
                brighter future.
              </p>
              <p>
                My web development journey began in 2018 when I experimented
                with Shopify and WordPress to build e-commerce sites. However, I
                soon realized the challenges of customizing prebuilt templates
                to fit my exact needs. This roadblock fueled my determination to
                build websites from scratch, with a focus on crafting
                mobile-responsive designs that deliver an efficient and
                intuitive user experience. I am committed to delivering
                high-quality code that meets the needs of my clients and users,
                and I stay up-to-date with the latest tech developments.
              </p>
              <p>
                If you're interested in working together or discussing
                technology, feel free to get in touch!
              </p>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="#projects">
                  Check out some of my projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
