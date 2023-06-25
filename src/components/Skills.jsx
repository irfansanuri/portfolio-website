import { useEffect } from "react";
import { tony } from "../layouts/utils";
import Image from "next/image";
import HtmlCss from "../../public/assets/skills/html-css.png";
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Bootstrap from '../../public/assets/skills/bootstrap.png';
import Github from '../../public/assets/skills/github.png';
import Vercel from '../../public/assets/skills/vercel.png';
import NextJS from '../../public/assets/skills/nextjs.png'
import AWS from '../../public/assets/skills/aws.png';


const skillSet = [
  { id: 0, logo: HtmlCss, name: "HTML/CSS", height: 60, width: 60 },
  { id: 1, logo: Javascript, name: "JavaScript" },
  { id: 2, logo: Bootstrap, name: "Bootstrap" },
  { id: 3, logo: ReactImg, name: "React" },
  { id: 4, logo: NextJS, name: "Next" },
  { id: 5, logo: AWS, name: "AWS" },
  { id: 6, logo: Vercel, name: "Vercel" },
  { id: 7, logo: Github, name: "Github" },
];

const Skills = () => {
  useEffect(() => {
    tony.activeSkillProgress();
  }, []);
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-20px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">What I Can Do</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-12 m-15px-tb">
            <div className="row">
              {skillSet.map((skill) => (
                <div key={skill.id} className="col-sm-12 col-md-6 col-lg-3 m-15px-tb">
                  <div className="feature-box-2 media align-items-center">
                    <div className="logo rounded mx-3">
                      <Image src={skill.logo} width={skill.width || 48} height={skill.height || 48} alt={skill.name} />
                    </div>
                    <div className="media-body">
                      <h5>{skill.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
