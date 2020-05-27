import React from 'react';
import styled from 'styled-components';

import Navigation from './navigation/Navigation';
import HeaderPhoto from './header/HeaderPhoto';
import Header from './header/Header';
import HeaderText from './header/HeaderText';
import Timeline from './timeline/Timeline';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const AppUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <Navigation />
      <Header>
        <HeaderText isRightAligned>Jonah Dlin</HeaderText>
        <HeaderPhoto />
        <HeaderText>Full Stack Developer</HeaderText>
      </Header>
      <Timeline />
      <Projects />
      <Contact></Contact>
    </div>
  );
};

const App = styled(AppUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
