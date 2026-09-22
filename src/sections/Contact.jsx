import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../components/MagneticButton";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact__label",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "none",

          scrollTrigger: {
            trigger: ".contact",
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".contact__title",
        {
          y: 150,
          opacity: 0,
          rotateX: 45,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,

          ease: "none",

          scrollTrigger: {
            trigger: ".contact__main",
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".contact__description",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "none",

          scrollTrigger: {
            trigger: ".contact__description",
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".contact__footer",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "none",

          scrollTrigger: {
            trigger: ".contact__footer",
            start: "top 95%",
            end: "top 75%",
            scrub: 1,
          },
        },
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact__label">
        <span>06</span>

        <span>GET IN TOUCH</span>
      </div>

      <div className="contact__main">
        <span className="contact__eyebrow">HAVE A PROJECT IN MIND?</span>

        <h2 className="contact__title">
          LET'S
          <br />
          TALK.
        </h2>

        <p className="contact__description">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact__buttons">
          <MagneticButton
            onClick={() => {
              window.location.href = "mailto:shubhamhvishwakarma10@gmail.com";
            }}
          >
            SEND ME A MESSAGE →
          </MagneticButton>

          <MagneticButton
            href="/Shubham_Vishwakarma_Resume.pdf"
            download="Shubham_Vishwakarma_Resume.pdf"
            className="contact__resume"
          >
            DOWNLOAD RESUME ↓
          </MagneticButton>
        </div>
      </div>

      <div className="contact__info">
        <a
          href="mailto:shubhamhvishwakarma10@gmail.com"
          aria-label="Send email"
        >
          <FiMail />
        </a>

        <a
          href="https://github.com/Shivamvish26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <FiGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-vishwakarma-701934232/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <FiLinkedin />
        </a>
      </div>

      <div className="contact__footer">
        <span>© 2026 SHUBHAM VISHWAKARMA</span>

        <span>BUILT WITH REACT + GSAP</span>

        <span>PUNE, INDIA</span>
      </div>
    </section>
  );
}

export default Contact;
