import React from 'react';

import { Body, Image } from '../home';
import { Footer, NavBar } from '../navigation';

const Home: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <div style={{ margin: 'auto' }}>
        <Image />
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
