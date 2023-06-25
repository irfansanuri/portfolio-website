import Head from "next/head";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testimonials from "@/src/components/Testimonials";
import { tony } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    tony.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <Head>
        {/* metas */}
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Irfan - Portfolio Template" />
        <meta name="description" content="Irfan - Portfolio Template" />
        {/* title */}
        <title>Irfan - Front-End Web Developer</title>
      </Head>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              Irfan
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="index.html">
            Irfan
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there...</h6>
                  <h1>Irfan Sanuri</h1>
                  <h2>
                    I'm a <TypingAnimation />
                  </h2>
                  <p>
                    I’m focused on building responsive front-end web
                    applications integrating back-end technologies.
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#projects">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* About us */}
        <div className="gray-bg">
          <About />
        </div>
        {/* end About us */}

        {/* Skills */}
        <div className="">
          <Skills />
        </div>
        {/* End Skills */}

        {/* Work */}
        <div className="gray-bg">
          <Projects />
        </div>
        {/* End work */}

        {/* Testimonials */}
        <div className="">
          <Testimonials />
        </div>
        {/* End Testimonials */}

        {/* Contact */}
        <div className="gray-bg">
          <Contact />
        </div>
        {/* End Contact */}
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
