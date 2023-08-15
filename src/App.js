import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import AppMenu from "./Menu";
import "./App.css";

function App() {
  const [visibleSection, setVisibleSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // Add this line

  useEffect(() => {
    const savedSection = localStorage.getItem("visibleSection");
    if (savedSection) {
      setVisibleSection(savedSection);
    }
  }, []);

  const handleMenuClick = (section) => {
    setVisibleSection(section);
    setMenuOpen(false); // Close the menu when a section is clicked
    localStorage.setItem("visibleSection", section);
  };

  return (
    <div id="wrapper">
      <AppMenu
        visibleSection={visibleSection}
        handleMenuClick={handleMenuClick}
        setMenuOpen={setMenuOpen} // Pass the setMenuOpen function
      />

      <div id="content">
        {visibleSection === "home" && <Home />}
        {visibleSection === "about" && <About />}
        {visibleSection === "contact" && <Contact />}
        {visibleSection === "services" && <Services />}
      </div>
    </div>
  );
}

export default App;
