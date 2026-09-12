import { useRef, useState } from "react";
import gsap from "gsap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "EXPERIENCE", id: "experience" },
    { name: "PROJECTS", id: "projects" },
    { name: "EDUCATION", id: "education" },
    { name: "CONTACT", id: "contact" },
  ];

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);

      gsap.set(menuRef.current, {
        display: "flex",
      });

      gsap.fromTo(
        menuRef.current,
        {
          clipPath: "circle(0% at 92% 6%)",
        },
        {
          clipPath: "circle(150% at 92% 6%)",
          duration: 0.8,
          ease: "power4.inOut",
        },
      );

      gsap.fromTo(
        linksRef.current,
        {
          y: 80,
          opacity: 0,
          rotateX: -30,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.25,
          ease: "power3.out",
        },
      );

      gsap.to(line1Ref.current, {
        rotate: 45,
        y: 5,
        duration: 0.3,
      });

      gsap.to(line2Ref.current, {
        rotate: -45,
        y: -5,
        duration: 0.3,
      });
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      clipPath: "circle(0% at 92% 6%)",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setIsOpen(false);
      },
    });

    gsap.to(line1Ref.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
    });

    gsap.to(line2Ref.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
    });
  };

  const handleNavigation = (id) => {
    closeMenu();

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <>
      <button
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar__menu-text">{isOpen ? "CLOSE" : "MENU"}</span>

        <span className="navbar__icon">
          <span ref={line1Ref}></span>
          <span ref={line2Ref}></span>
        </span>
      </button>

      <div className="navbar__overlay" ref={menuRef}>
        <div className="navbar__content">
          {/* <div className="navbar__heading">
            <span>01</span>
            <span>NAVIGATION</span>
          </div> */}

          <nav className="navbar__links">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={() => handleNavigation(item.id)}
              >
                <span className="navbar__number">0{index + 1}</span>

                <span className="navbar__link-text">{item.name}</span>

                <span className="navbar__arrow">↗</span>
              </button>
            ))}
          </nav>

          <div className="navbar__footer">
            <span>SHUBHAM VISHWAKARMA</span>
            <span>FRONTEND DEVELOPER</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
