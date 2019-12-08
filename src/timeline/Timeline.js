import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';
import EventWrapper from './EventWrapper';
import { totalPadding } from '../constants/constants';

const isElementEvent = reactElement => {
  return reactElement.type.displayName === 'Styled(EventUnstyled)';
};

const isEventLeftEvent = timelineEvent => Boolean(timelineEvent.props.isLeft);
const isEventWrapperLeftEvent = timelineEventWrapper =>
  Boolean(timelineEventWrapper.props.isLeft);

const compareDates = (date1, date2) => {
  if (date1 < date2) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return 0;
};

const getEventDate = timelineEvent => timelineEvent.props.date;

const differenceInDays = (date1, date2) => {
  // from https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const TimelineUnstyled = ({ className, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let events = childrenArray.filter(child => isElementEvent(child));
  events.sort(compareDates);
  events.reverse();

  const eventRange = differenceInDays(
    getEventDate(events[0]),
    getEventDate(events[events.length - 1])
  );
  let gaps = [];
  let eventWrappers = [];
  for (let i = 0; i <= events.length - 2; i++) {
    const date1 = getEventDate(events[i]);
    const date2 = getEventDate(events[i + 1]);
    const dayGap = differenceInDays(date1, date2);
    const percentageOfTotalRange = dayGap / eventRange;
    gaps.push(percentageOfTotalRange);
    eventWrappers.push(
      <EventWrapper
        key={i}
        isLeft={isEventLeftEvent(events[i])}
        marginBottom={Math.floor(percentageOfTotalRange * totalPadding)}
      >
        {events[i]}
      </EventWrapper>
    );
  }

  eventWrappers.push(
    <EventWrapper
      key={events.length - 1}
      isLeft={isEventLeftEvent(events[events.length - 1])}
      marginBottom={0}
    >
      {events[events.length - 1]}
    </EventWrapper>
  );

  const leftEvents = eventWrappers.filter(eventWrapper =>
    isEventWrapperLeftEvent(eventWrapper)
  );
  const rightEvents = eventWrappers.filter(
    eventWrapper => !isEventWrapperLeftEvent(eventWrapper)
  );

  return (
    <div className={className}>
      <EventsContainer>{leftEvents}</EventsContainer>
      <TimelineLine />
      <EventsContainer>{rightEvents}</EventsContainer>
    </div>
  );
};

const Timeline = styled(TimelineUnstyled)`
  ${flexCenter}
  width: 100%;
  height: 300px;
`;

export default Timeline;
