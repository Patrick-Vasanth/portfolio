import React from "react";
import NavBar from "./NavBar";
import "./Common.css"
import Introduction from "./Introduction";
import SkillSet from "./SkillSet";
import About from "./About";
import Contact from "./Contact";

export default function HomePage({
  scrollToSection,
  homeRef,
  aboutRef,
  skillRef,
  contactRef,
  activeSection,
  setActiveSection
}) {
  return (
    <div className="mainDiv">
      <div className="homes">
        <div className="nav">
          <NavBar
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillRef={skillRef}
            contactRef={contactRef}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="intro" ref={homeRef} id="intros">
            <Introduction />
        </div>
        <div className="aboutus" ref={aboutRef} id="about">
          <About />
        </div>
        <div className="skills" id="skill" ref={skillRef}>
          <SkillSet />
        </div>
        <div className="contacts" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
