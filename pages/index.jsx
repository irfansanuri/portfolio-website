import Head from "next/head";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Collaboration from "@/src/components/Collaboration";
import { tony } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import TypingAnimation from "@/src/components/TypingAnimation";
import dynamic from "next/dynamic";
import Image from "next/image";

const Projects = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    tony.scrollToActiveNav();
  }, []);

  return (
    <Fragment>
      <Head>
        {/* Metas */}
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
                      My Works
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 d-none d-lg-block"><Image src="/static/img/home-potrait.png" width={1000} height={500} alt={"Irfan's standing image"}/></div> */}

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

        {/* Collaboration */}
        <div className="">
          <Collaboration />
        </div>
        {/* End Collaboration */}

        {/* Contact */}
        <div className="gray-bg">
          <Contact />
        </div>
        {/* End Contact */}
      </main>
    </Fragment>
  );
};
export default Home;
