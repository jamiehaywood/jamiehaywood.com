import React from "react";
import "./navbar.css";

interface props {}

const TopNav: React.FC<props> = props => {
  return (
    <div className="navigation fadeIn animated delay-two">
      <a className="navLinks" href="https://medium.com/@jamiehaywood">
        BLOG
      </a>
      &nbsp; | &nbsp;
      <a className="navLinks" href="/cv">
        CV
      </a>
      &nbsp; | &nbsp;
      <a className="navLinks" href="/projects">
        PROJECTS
      </a>
    </div>
  );
};

export default TopNav;
