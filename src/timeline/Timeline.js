import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';
import EventWrapper from './EventWrapper';
import {
  TIMELINE_ICON_DIAMETER,
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_WIDTH_REDUCED,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON,
} from '../constants/constants';
import EventSnippet from './EventSnippet';
import Event from './Event';

import genesysLogo from '../assets/genesysLogo.png';
import wishLogo from '../assets/wishLogo.png';
import uoftLogo from '../assets/uoftLogo.png';

const getProp = (element, prop) => element.props[prop];

const compareDates = (date1, date2) => {
  if (date1 < date2) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return 0;
};

const TimelineUnstyled = ({ className, isDesktop }) => {
  // Add new events here (don't need to be sorted)
  // Any events with "isLeft" true should depend on isDesktop
  // I could do this automatically but I'm lazy.
  let events = [
    <EventSnippet
      date={new Date('2020-04-15')}
      type="education"
      title="Graduated from UWaterloo with a BMath on the Dean's Honours List"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2019-09-02')}
      date2={new Date('2019-12-31')}
      type="work"
      isLeft={isDesktop}
      icon={genesysLogo}
      title="Genesys"
      subtitle="Backend Developer"
      points={[
        'Worked with popular AWS services',
        'Learned a ton independently',
        'Ate too much at Brazilian steakhouses',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2019-01-02')}
      type="music"
      title="Bought my first guitar"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2019-01-02')}
      date2={new Date('2019-04-20')}
      type="work"
      isLeft={isDesktop}
      icon={wishLogo}
      title="Wish"
      subtitle="Full Stack Developer"
      points={[
        'Built webviews and webpages with React',
        'Explored the SF Bay Area and Yosemite',
        'Embarked on a fun-filled trip to Boise, Idaho',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2018-11-23')}
      type="education"
      title="Scholarship for academic achievement from UW"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2018-05-02')}
      date2={new Date('2018-08-20')}
      type="work"
      isLeft={isDesktop}
      icon={genesysLogo}
      title="Genesys"
      subtitle="Frontend Developer"
      points={[
        'Worked extensively with TypeScript and React',
        'Interacted with a sprawling international team',
        'Got amazing at foosball',
      ]}
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2017-09-02')}
      date2={new Date('2017-12-02')}
      type="work"
      isLeft={isDesktop}
      icon={uoftLogo}
      title="Univerity of Toronto"
      subtitle="Full Stack Developer"
      points={[
        'First time working with React/Node.js',
        'Build a whole web app from scratch',
        'Became a published medical author',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2017-01-31')}
      type="music"
      title="Bought my first bass guitar"
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2015-05-07')}
      type="education"
      title="Accepted to UW with President's Scholarship of Distinction"
      isDesktop={isDesktop}
    />,
  ];

  events.sort(compareDates);

  let eventWrappers = events.map((eventElement, index) => (
    <EventWrapper
      key={index}
      isLeft={!isDesktop && getProp(eventElement, 'isLeft')}
      type={getProp(eventElement, 'type')}
      isDesktop={isDesktop}
    >
      {eventElement}
    </EventWrapper>
  ));

  return (
    <div className={className}>
      <EventsContainer>{eventWrappers}</EventsContainer>
      <TimelineLine isDesktop={isDesktop} />
    </div>
  );
};

const Timeline = styled(TimelineUnstyled)`
  ${flexCenter};
  position: relative;
  width: ${props =>
    props.isDesktop
      ? 2 *
        (TIMELINE_EVENT_WIDTH +
          TIMELINE_EVENT_POINTER_RADIUS +
          TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
          TIMELINE_ICON_DIAMETER / 2)
      : TIMELINE_EVENT_WIDTH_REDUCED +
        TIMELINE_EVENT_POINTER_RADIUS +
        TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
        TIMELINE_ICON_DIAMETER / 2}px;
  padding-top: 20px;
`;

export default Timeline;
