import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);

  const experiences = [
    {
      id: 1,
      logo: "/images/webwide.png",
      date: "Mar 2023 – Present",
      title: "Junior Frontend Developer",
      companyName: "Webwide IT Solution LLP, Pune",
      responsibilities: [
        "Engineered and maintained responsive, cross-browser web applications using React.js, HTML5, CSS3, and Bootstrap, ensuring consistent performance across desktop, tablet, and mobile devices.",
        "Architected reusable React component libraries that reduced duplicate UI code across multiple client projects and accelerated feature delivery.",
        "Translated Figma UI/UX designs into pixel-perfect, production-ready interfaces and integrated RESTful APIs for dynamic, data-driven functionality.",
        "Customized and deployed CMS-based websites using WordPress and Joomla, while using Postman to test and debug API endpoints.",
        "Collaborated with cross-functional teams in Agile sprints, using Git, GitHub, and Jira to track development and maintain clean-code standards.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Git",
        "GitHub",
      ],
    },
    {
      id: 2,
      logo: "/images/webwide.png",
      date: "Jan 2023 – Mar 2023",
      title: "Frontend Developer - Intern",
      companyName: "Webwide IT Solution LLP, Pune",
      responsibilities: [
        "Built responsive, mobile-friendly web pages using HTML5, CSS3, and Bootstrap, ensuring consistent layouts across browsers and screen sizes.",
        "Implemented interactive UI elements and client-side functionality using JavaScript, improving usability across key pages.",
        "Collaborated with senior developers in an Agile environment, participating in code reviews and adopting best practices for clean and maintainable frontend code.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
    {
      id: 3,
      logo: "/images/cleverground.png",
      date: "May 2023 – Aug 2023",
      title: "Frontend Developer - Intern",
      companyName: "Clever Ground Technology Pvt. Ltd, Pune",
      responsibilities: [
        "Designed and built reusable UI components using React.js, JSX, React Hooks, React Router, and Ant Design for internal and client-facing applications.",
        "Integrated RESTful APIs to enable dynamic frontend functionality and used Postman for endpoint testing and debugging.",
        "Partnered with senior developers in an Agile environment, contributing to design discussions and adopting modern frontend development best practices.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Ant Design",
        "GitLab",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience__label",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".experience",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".experience__card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".experience__cards",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".experience__logo-wrapper",
        { scale: 0.7, opacity: 0, rotate: -10 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__cards",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".experience__content > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".experience__cards",
            start: "top 75%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience" id="experience" ref={experienceRef}>

      <div className="experience__label">
        <span>03</span>
        <span>EXPERIENCE</span>
      </div>

      <div className="experience__cards">
        {experiences.map((exp) => (
          <div className="experience__card" key={exp.id}>
            <div className="experience__logo-wrapper">
              <img
                src={exp.logo}
                alt={exp.companyName}
                className="experience__logo"
              />
            </div>

            <div className="experience__content">
              <span className="experience__date">{exp.date}</span>

              <h2>{exp.title}</h2>

              <h3>{exp.companyName}</h3>

              <ul className="experience__responsibilities">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="experience__technologies">
                {exp.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
