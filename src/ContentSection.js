import React, { useEffect } from "react";
import Home from "./MenuComp/Home";
import About from "./MenuComp/About.js";
import Contact from "./MenuComp/Contact";
import Services from "./MenuComp/Services";
import "./ContentSection.css";
import { useState } from "react";

export default function ContentSection() {
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const visibleSection = localStorage.getItem("visibleSection");
    setVisibleSection(visibleSection);
  }, []);
  // on page load, set the visible section to the one in local storage

  // use effect to update the visible section on the screen
  // when the local storage changes the visible component will change

  // render the visible section on

  // use effect to update the visible section on the screen

  return (
    <div id="content">
      {/*dynamically render the sections*/}
      {visibleSection === "home" && <Home />}{" "}
      {/*if visibleSection === home then show the home component*/}
      {visibleSection === "about" && <About />}
      {visibleSection === "contact" && <Contact />}
    </div>
  );
}
