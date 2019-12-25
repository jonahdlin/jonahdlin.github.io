import React from 'react';
import styled from 'styled-components';

import HeaderPhoto from './header/HeaderPhoto';
import Header from './header/Header';
import HeaderText from './header/HeaderText';
import Timeline from './timeline/Timeline';
import Event from './timeline/Event';
import Navigation from './navigation/Navigation';

import genesysLogo from './assets/genesysLogo.png';

const AppUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <Navigation />
      <Header>
        <HeaderText isRightAligned>Jonah Dlin</HeaderText>
        <HeaderPhoto />
        <HeaderText>Full Stack Developer</HeaderText>
      </Header>
      <Timeline>
        <Event
          date={new Date('2019-09-02')}
          type="work"
          isLeft
          icon={genesysLogo}
          title="Genesys"
          subtitle="Backend Developer"
          points={[
            'Worked with popular AWS services',
            'Learned a ton independently',
            'Ate too much at Brazilian steakhouses',
          ]}
        />
        <Event
          date={new Date('2019-09-16')}
          type="music"
          icon={genesysLogo}
          subtitle="Bought my first guitar"
        />
        <Event date={new Date('2019-09-05')} type="education" />
        <Event date={new Date('2019-04-12')} type="work" isLeft />
        <Event date={new Date('2019-10-15')} type="work" isLeft />
        <Event date={new Date('2019-09-16')} type="music" />
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
