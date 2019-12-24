import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';
import EventWrapper from './EventWrapper';
import {
  TIMELINE_ICON_DIAMETER,
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON,
} from '../constants/constants';

const isElementEvent = reactElement => {
  return reactElement.type.displayName === 'Styled(EventUnstyled)';
};

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

const TimelineUnstyled = ({ className, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let events = childrenArray.filter(child => isElementEvent(child));
  events.sort(compareDates);

  let eventWrappers = events.map((eventElement, index) => (
    <EventWrapper
      key={index}
      isLeft={getProp(eventElement, 'isLeft')}
      type={getProp(eventElement, 'type')}
    >
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
  ${flexCenter};
  position: relative;
  width: ${2 *
    (TIMELINE_EVENT_WIDTH +
      TIMELINE_EVENT_POINTER_RADIUS +
      TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
      TIMELINE_ICON_DIAMETER / 2)}px;
  padding-top: 20px;
`;

export default Timeline;
