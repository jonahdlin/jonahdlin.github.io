import React from 'react';
import styled from 'styled-components';

import HeaderPhoto from './header/HeaderPhoto';
import Header from './header/Header';
import HeaderText from './header/HeaderText';
import Timeline from './timeline/Timeline';
import Event from './timeline/Event';
import EventSnippet from './timeline/EventSnippet';
import Navigation from './navigation/Navigation';

import genesysLogo from './assets/genesysLogo.png';
import wishLogo from './assets/wishLogo.png';
import uoftLogo from './assets/uoftLogo.png';

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
        <EventSnippet
          date={new Date('2019-12-06')}
          type="education"
          title="Scholarship for academic achievement from UW (again!)"
        />
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
        <EventSnippet
          date={new Date('2019-09-16')}
          type="music"
          title="Bought my first guitar"
        />
        <Event
          date={new Date('2019-01-02')}
          type="work"
          isLeft
          icon={wishLogo}
          title="Wish"
          subtitle="Full Stack Developer"
          points={[
            'Built webviews and webpages with React',
            'Explored the SF Bay Area and Yosemite',
            'Embarked on a fun-filled trip to Boise, Idaho',
          ]}
        />
        <EventSnippet
          date={new Date('2018-11-23')}
          type="education"
          title="Scholarship for academic achievement from UW"
        />
        <Event
          date={new Date('2018-05-02')}
          type="work"
          isLeft
          icon={genesysLogo}
          title="Genesys"
          subtitle="Frontend Developer"
          points={[
            'Worked extensively with TypeScript and React',
            'Interacted with a sprawling international team',
            'Got amazing at foosball',
          ]}
        />
        <Event
          date={new Date('2018-05-02')}
          type="work"
          isLeft
          icon={uoftLogo}
          title="Univerity of Toronto"
          subtitle="Full Stack Developer"
          points={[
            'First time working with React/Node.js',
            'Build a whole web app from scratch',
            'Became a published medical author',
          ]}
        />
        <EventSnippet
          date={new Date('2017-01-31')}
          type="music"
          title="Bought my first bass guitar"
        />
        <EventSnippet
          date={new Date('2015-05-07')}
          type="education"
          title="Accepted to UW with President's Scholarship of Distinction"
        />
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
