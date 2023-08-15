import React, { useEffect } from "react";
import "./Menu.css";

export default function AppMenu({
  visibleSection,
  handleMenuClick,
  setMenuOpen,
}) {
  // state to track if the menu is open or closed
  const [menuOpenLocal, setMenuOpenLocal] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpenLocal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const logoMobile = document.getElementById("logo-mobile");
    const closeMobileMenu = document.querySelector("#close-mobile-menu a");
    const logoWrapper = document.getElementById("close-mobile-menu");

    if (menuOpenLocal) {
      logoMobile.style.display = "none";
      closeMobileMenu.style.display = "block";
      logoWrapper.style.border = "1px solid white";
      document.getElementById("menu").style.position = "fixed";
    } else {
      logoMobile.style.display = "block";
      closeMobileMenu.style.display = "none";
      logoWrapper.style.border = "none";
    }

    setMenuOpenLocal(menuOpenLocal); // Update menuOpen in the App component
  }, []);

  const handleLogoClick = () => {
    setMenuOpenLocal(!menuOpenLocal);
  };

  return (
    <React.Fragment>
      <div id="close-mobile-menu">
        <a onClick={handleLogoClick}>X</a>
        <button id="logo-mobile" onClick={handleLogoClick}></button>
      </div>
      <div id="menu" className={menuOpenLocal ? "open" : "closed"}>
        <div id="logo-wrapper">
          <button id="logo" onClick={handleLogoClick}></button>
        </div>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => handleMenuClick("home")}
              className={visibleSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleMenuClick("about")}
              className={visibleSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleMenuClick("contact")}
              className={visibleSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => handleMenuClick("services")}
              className={visibleSection === "services" ? "active" : ""}
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
