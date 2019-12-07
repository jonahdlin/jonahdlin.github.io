import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';

const isElementEvent = reactElement => {
  return reactElement.type.displayName === 'Styled(EventUnstyled)';
}

const isEventLeftEvent = event => Boolean(event.props.isLeft);

const TimelineUnstyled = ({ className, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let eventsArray = childrenArray.filter(child => isElementEvent(child));
  const leftEvents = eventsArray.filter(child => isEventLeftEvent(child));
  const rightEvents = eventsArray.filter(child => !isEventLeftEvent(child));
  return (
    <div className={className}>
      <EventsContainer>{leftEvents}</EventsContainer>
      <TimelineLine />
      <EventsContainer>{rightEvents}</EventsContainer>
    </div>
  );
}

const Timeline = styled(TimelineUnstyled)`
${flexCenter}
width: 100%;
height: 300px;
`;

export default Timeline;
