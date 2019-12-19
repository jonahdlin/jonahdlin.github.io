import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';
import EventWrapper from './EventWrapper';

const isElementEvent = reactElement => {
  return reactElement.type.displayName === 'Styled(EventUnstyled)';
};

const isEventLeftEvent = timelineEvent => Boolean(timelineEvent.props.isLeft);

const compareDates = (date1, date2) => {
  if (date1 < date2) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return 0;
};

const TimelineUnstyled = ({ className, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let events = childrenArray.filter(child => isElementEvent(child));
  events.sort(compareDates);

  let eventWrappers = events.map((eventElement, index) => (
    <EventWrapper key={index} isLeft={isEventLeftEvent(eventElement)}>
      {eventElement}
    </EventWrapper>
  ));

  return (
    <div className={className}>
      <EventsContainer>{eventWrappers}</EventsContainer>
      <TimelineLine />
    </div>
  );
};

const Timeline = styled(TimelineUnstyled)`
  ${flexCenter}
  position: relative;
  width: 680px;
`;

export default Timeline;
