import './navbar.css';

import React from 'react';

const TopNav = () => {
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
