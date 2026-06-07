import React from 'react';
import LandingPage from './LandingPage';
import MyProjects from './MyProjects';
import Artwork from './Artwork';
import AboutMe from './AboutMe';

const Home = () => {
  return (
    <>
      <LandingPage />
      <MyProjects />
      <AboutMe />
      <Artwork />
    </>
  );
};

export default Home;
