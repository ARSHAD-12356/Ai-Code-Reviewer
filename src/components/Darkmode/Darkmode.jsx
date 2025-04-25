import React, { useState, useEffect } from "react";
import "./darkmode.css";
import { Sun, Moon } from "lucide-react";

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the body
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="darkmode-btn border border-s-2 border-gray-400 mr-4 btn"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Moon size={20} className="bg-black rounded-xl" />
      ) : (
        <Sun size={20} />
      )}
      <span className="darkmode-text">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default Darkmode;
