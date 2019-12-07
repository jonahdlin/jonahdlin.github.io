import React from 'react';
import styled from 'styled-components';
import HeaderPhoto from './header/HeaderPhoto';
import Header from './header/Header';
import HeaderText from './header/HeaderText';
import Timeline from './timeline/Timeline';
import Event from './timeline/Event';

const AppUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <Header>
        <HeaderText isRightAligned>Jonah Dlin</HeaderText>
        <HeaderPhoto />
        <HeaderText>Full Stack Developer</HeaderText>
      </Header>
      <Timeline>
        <Event isLeft></Event>
        <Event></Event>
        <Event></Event>
        <Event isLeft></Event>
      </Timeline>
    </div>
  );
}

const App = styled(AppUnstyled)`

`;

export default App;
