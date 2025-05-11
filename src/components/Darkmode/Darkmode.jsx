import React from "react";
import "./darkmode.css";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import { Helmet } from "react-helmet";

const Darkmode = () => {
  const { isDark, toggleTheme } = useTheme();


  <Helmet>
     <body className={!isDark ? "dark-mode" : ""} />
  </Helmet>


  return (
    <button
      className="darkmode-btn border border-s-2 border-gray-400 mr-4 btn"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Moon size={20} className="bg-black rounded-xl" />
      ) : (
        <Sun size={20} />
      )}
      <span className="darkmode-text">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default Darkmode;
