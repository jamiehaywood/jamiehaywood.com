import React from "react";
import { NavBar, Footer } from "../navigation";
import { Body, Image } from "../home";

const Home: React.FC = () => {
  return (
    <div style={{width:"100vw", height:"100vh", display:"flex"}}>
      <div style={{ margin: "auto" }}>
        <Image />
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
