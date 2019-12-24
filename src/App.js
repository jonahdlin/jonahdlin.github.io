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
        <Event date={new Date('2019-10-15')} isLeft></Event>
        <Event date={new Date('2019-09-16')}></Event>
        <Event date={new Date('2019-09-05')}></Event>
        <Event date={new Date('2019-04-12')} isLeft></Event>
        <Event date={new Date('2019-10-15')} isLeft></Event>
        <Event date={new Date('2019-09-16')}></Event>
        <Event date={new Date('2019-09-05')}></Event>
        <Event date={new Date('2019-04-12')} isLeft></Event>
        <Event date={new Date('2019-10-15')} isLeft></Event>
        <Event date={new Date('2019-09-16')}></Event>
        <Event date={new Date('2019-09-05')}></Event>
        <Event date={new Date('2019-04-12')} isLeft></Event>
        <Event date={new Date('2019-10-15')} isLeft></Event>
        <Event date={new Date('2019-09-16')}></Event>
        <Event date={new Date('2019-09-05')}></Event>
        <Event date={new Date('2019-04-12')} isLeft></Event>
      </Timeline>
    </div>
  );
};

const App = styled(AppUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
