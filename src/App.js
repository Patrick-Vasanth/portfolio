import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Asset/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("intros");

  const scrollToSection = (section, sectionName) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                aboutRef={aboutRef}
                skillRef={skillRef}
                contactRef={contactRef}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
