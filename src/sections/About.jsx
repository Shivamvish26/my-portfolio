import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaWordpressSimple,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiMongodb, SiGsap, SiPostman, SiExpress } from "react-icons/si";
import {
  RiBootstrapLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { AiOutlineAntDesign, AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoGitlab } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about__label",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".about__word",
        {
          y: 120,
          opacity: 0,
          rotateX: 45,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.15,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".about__statement",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".about__description",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about__description",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".about__skill",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about__skills",
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="about__label">
        <span>01</span>
        <span>ABOUT ME</span>
      </div>

      <div className="about__statement">
        <span className="about__word">I BUILD</span>
        <span className="about__word">DIGITAL</span>
        <span className="about__word">EXPERIENCES</span>
        <span className="about__word">WITH CODE.</span>
      </div>

      <p className="about__description">
        Results-driven Frontend Developer with 2+ years of experience building
        responsive, high-performance web applications using React.js, JavaScript
        (ES6+), and RESTful APIs. Skilled in architecting reusable component
        libraries, converting UI/UX designs into pixel-perfect interfaces, and
        partnering with cross-functional Agile teams to ship production-ready
        features. Delivered projects across real estate, logistics, and
        education-sector platforms, with a strong focus on performance,
        scalability, and clean code.
      </p>

      <div className="about__skills">
        <div className="about__skill">
          <AiOutlineHtml5 />
          <span>Html 5</span>
        </div>

        <div className="about__skill">
          <TbBrandCss3 />
          <span>CSS 3</span>
        </div>

        <div className="about__skill">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="about__skill">
          <FaReact />
          <span>React.js</span>
        </div>

        <div className="about__skill">
          <RiNextjsLine />
          <span>Next.js</span>
        </div>

        <div className="about__skill">
          <AiOutlineAntDesign />
          <span>AntDesign</span>
        </div>

        <div className="about__skill">
          <RiBootstrapLine />

          <span>Bootstrap</span>
        </div>

        <div className="about__skill">
          <RiTailwindCssFill />

          <span>Tailwind</span>
        </div>

        <div className="about__skill">
          <SiGsap />
          <span>GSAP</span>
        </div>

        <div className="about__skill">
          <FaNodeJs />
          <span>Node.js</span>
        </div>

        <div className="about__skill">
          <SiExpress />
          <span>Express.js</span>
        </div>

        <div className="about__skill">
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div className="about__skill">
          <SiPostman />
          <span>Postman</span>
        </div>

        <div className="about__skill">
          <FaWordpressSimple />
          <span>Wordpress</span>
        </div>

        <div className="about__skill">
          <FaGithub />
          <span>Git & Github</span>
        </div>

        <div className="about__skill">
          <IoLogoGitlab />
          <span>Gitlab</span>
        </div>
        <div className="about__skill">
          <FaFigma />
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
}

export default About;
