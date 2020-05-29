import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Navigation from './navigation/Navigation';
import Header from './header/Header';
import Timeline from './timeline/Timeline';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const AppUnstyled = ({ className }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleDimensionChange = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleDimensionChange);
    return () => window.removeEventListener('resize', handleDimensionChange);
  });

  const noNavCutoff = 1250;
  const twoColumnCutoff = 1050;

  const isNav = windowDimensions.width >= noNavCutoff;
  const isDesktop = windowDimensions.width >= twoColumnCutoff;

  const nav = isNav ? <Navigation /> : null;

  return (
    <div className={className}>
      {nav}
      <Header isDesktop={isDesktop} />
      <Timeline isDesktop={isDesktop} />
      <Projects isDesktop={isDesktop} />
      <Contact isDesktop={isDesktop} />
    </div>
  );
};

const App = styled(AppUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
