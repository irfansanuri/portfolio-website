import React from "react";
import coffeeImg from "../public/assets/projects/coffee.png";
import netflixImg from "../public/assets/projects/netflix.png";
// import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Coffee Connoisseur"
            backgroundImg={coffeeImg}
            projectUrl="/coffee-connoisseur"
            tech="Next JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="Next JS"
          />
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
