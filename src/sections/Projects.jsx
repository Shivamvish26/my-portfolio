import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "Handarealtor",
      category: "REAL ESTATE PLATFORM",
      description:
        "A modern real estate platform where users can explore, buy, rent, and sell properties.",
      technologies: ["React.js", "Bootstrap", "REST API"],
      image: "/images/handarealtor.png",
      link: "https://handarealtor.ca/",
    },

    {
      number: "02",
      title: "Skilled Movers",
      category: "MOVING SERVICES PLATFORM",
      description:
        "A responsive moving and material transfer platform designed for a smooth mobile-first user experience.",
      technologies: ["React.js", "Bootstrap", "JavaScript"],
      image: "/images/skilled-movers.png",
      link: "https://booking.skilledmovers.com.au/",
    },

    {
      number: "03",
      title: "CG-Portal",
      category: "EDUCATION MANAGEMENT PLATFORM",
      description:
        "A data management platform for higher education institutions to capture and manage NAAC report information.",
      technologies: ["React.js", "Python", "REST API"],
      image: "/images/cg-portal.png",
      link: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.fromTo(
        ".projects__label",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".projects",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Project cards
      gsap.fromTo(
        ".project-card",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects__list",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Project images
      gsap.fromTo(
        ".project-card__image",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects__list",
            start: "top 75%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" ref={projectsRef}>

      {/* Section Header */}
      <div className="projects__label">
        <span>04</span>
        <span>SELECTED WORK</span>
      </div>

      {/* Projects */}
      <div className="projects__list">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-card__info">

              <span className="project-card__number">
                {project.number}
              </span>

              <span className="project-card__category">
                {project.category}
              </span>

              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                VIEW PROJECT ↗
              </a>

            </div>

            <div className="project-card__visual">

              <div className="project-card__image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;