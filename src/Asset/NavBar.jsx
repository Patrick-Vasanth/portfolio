import React, { useEffect, useState } from "react";
import "./Common.css";

export default function NavBar({
  scrollToSection,
  homeRef,
  aboutRef,
  skillRef,
  contactRef,
  activeSection,
  setActiveSection
}) {
  const [scrolled, setScrolled] = useState(false);
  

  const sections = [
    { ref: homeRef, name: "intros" },
    { ref: aboutRef, name: "about" },
    { ref: skillRef, name: "skill" },
    { ref: contactRef, name: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.6, // 60% of the section should be in view to activate
      };
  
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      sections.forEach(({ ref }) => {
        if (ref.current) observer.observe(ref.current);
      });
  
      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrolled ? "navBar scrolled" : "navBar"}>
      <div className="title">Portfolio</div>
      <ul className="navList">
        <li>
          <button
            className={activeSection === "intros" ? "active" : ""}
            onClick={() => scrollToSection(homeRef, "intros")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection(aboutRef, "about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === "skill" ? "active" : ""}
            onClick={() => scrollToSection(skillRef, "skill")}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection(contactRef, "contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}
