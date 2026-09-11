import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);
  const horizontalRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "Handa Realtor",
      category: "REAL ESTATE PLATFORM",
      description:
        "Developed a responsive real estate web application that enables users to buy, rent, and sell properties through an intuitive interface. Built dynamic property listing pages with advanced search and filtering functionality, integrated RESTful APIs for real-time property data, and developed reusable React components to improve scalability and maintainability. Optimized the application for mobile responsiveness, cross-browser compatibility, and overall user experience.",
      technologies: [
        "React.js",
        "React Hooks",
        "React Router",
        "Bootstrap",
        "JavaScript (ES6+)",
        "RESTful APIs",
      ],
      image: "/images/handa_realtor_project.png",
      link: "https://handarealtor.ca/",
    },

    {
      number: "02",
      title: "Skilled Movers",
      category: "MOVING SERVICES PLATFORM",
      description:
        "Designed and developed a responsive web application for a material transfer and relocation service platform. Implemented a mobile-first approach, built reusable UI components, integrated RESTful APIs, and optimized the application for performance, accessibility, and cross-browser compatibility to deliver a seamless user experience across all devices.",
      technologies: [
        "React.js",
        "React Hooks",
        "React Router",
        "Bootstrap",
        "JavaScript (ES6+)",
        "RESTful APIs",
      ],
      image: "/images/skilled_movers.png",
      link: "https://skilledmovers.com.au/",
    },

    {
      number: "03",
      title: "CG-Portal",
      category: "EDUCATION MANAGEMENT PLATFORM",
      description:
        "Developed a React.js based data management portal to streamline the NAAC accreditation reporting process for higher education institutions. Built responsive, form-driven user interfaces for efficient data capture, integrated RESTful APIs to enable seamless communication with backend services, and supported integration with existing institutional systems such as the Learning Management System (LMS). Contributed to improving data accuracy, reducing manual effort, and delivering a scalable, user-friendly solution for centralized academic data management.",
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Ant Design",
        "RESTful APIs",
      ],
      image: "/images/cleverground_project.jpg",
      link: "https://product.cleverground.com/#/login",
    },
    {
      number: "04",
      title: "Bhurr Holidays",
      category: "TRAVEL & HOLIDAY WEBSITE",
      description:
        "Designed and developed responsive web pages, including Packages, Contact Us, and service sections, with a focus on clean UI, intuitive navigation, and mobile-friendly layouts. Ensured cross-browser compatibility and enhanced user experience through responsive design principles.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Bootstrap"],
      image: "/images/bhurr_project.png",
      link: "https://www.bhurr.co.in/",
    },

    {
      number: "05",
      title: "PMRDA",
      category: "GOVERNMENT ORGANIZATION WEBSITE",
      description:
        "Developed and customized multiple pages for the PMRDA website using WordPress CMS. Modified themes and layouts based on project requirements while ensuring responsive design, improved site navigation, and cross-browser compatibility.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/pmrda_project.png",
      link: "https://www.pmrda.gov.in/en/home/",
    },
    {
      number: "06",
      title: "Pathway Movers",
      category: "MOVING SERVICES WEBSITE",
      description:
        "A professional moving services website designed to showcase relocation solutions, services, and company information with a responsive and user-friendly interface.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/pathway_movers.png",
      link: "https://www.pathwaymovers.com.au/",
    },

    {
      number: "07",
      title: "Solomon Gold",
      category: "GOLD & JEWELLERY WEBSITE",
      description:
        "A modern gold and jewellery website designed to present products and business information through a clean, responsive, and visually engaging web experience.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/solomon_gold.png",
      link: "https://solomongold24.com/",
    },

    {
      number: "08",
      title: "BAIF",
      category: "NGO / ORGANIZATION WEBSITE",
      description:
        "A professional organizational website designed to showcase BAIF's initiatives, programs, activities, and information through a structured and responsive digital platform.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/baif_project.png",
      link: "https://baif.org.in/",
    },

    {
      number: "09",
      title: "Yoga Sourcing",
      category: "YOGA & WELLNESS WEBSITE",
      description:
        "A responsive yoga and wellness website designed to showcase yoga-related products and services with an intuitive layout and engaging user experience.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/yoga_sourcing.png",
      link: "https://www.yogasourcing.com/",
    },

    {
      number: "10",
      title: "JetBlack Elite USA",
      category: "AUTOMOTIVE SERVICES WEBSITE",
      description:
        "A premium automotive services website designed to showcase vehicle care and detailing solutions with a modern, responsive, and visually focused interface.",
      technologies: ["Html 5", "CSS 3", "Javascript", "Wordpress"],
      image: "/images/jet_black.png",
      link: "https://jetblackeliteusa.com/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;

      if (!horizontalSection) return;

      const getScrollAmount = () => {
        return horizontalSection.scrollWidth - window.innerWidth;
      };

      gsap.to(horizontalSection, {
        x: () => -getScrollAmount(),

        ease: "none",

        scrollTrigger: {
          trigger: projectsRef.current,

          start: "top top",

          end: () => `+=${getScrollAmount()}`,

          pin: true,

          scrub: 1,

          invalidateOnRefresh: true,

          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        ".projects__mask-text",
        {
          scale: 0.7,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 0.08,
          y: 0,

          ease: "none",

          scrollTrigger: {
            trigger: projectsRef.current,

            start: "top top",

            end: () => `+=${getScrollAmount()}`,

            scrub: 1,

            invalidateOnRefresh: true,
          },
        },
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" id="projects" ref={projectsRef} >
      <div className="projects__mask-text">PROJECTS</div>

      <div className="projects__label">
        <span>04</span>
        <span>SELECTED WORK</span>
      </div>

      <div className="projects__horizontal" ref={horizontalRef}>
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card__info">
              <span className="project-card__number">{project.number}</span>

              <span className="project-card__category">{project.category}</span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
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
