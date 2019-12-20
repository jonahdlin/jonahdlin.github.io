import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  months,
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_POINTER_SIDE_LENGTH,
  TIMELINE_ICON_DIAMETER,
  TIMELINE_ICON_OFFSET_FROM_TOP,
} from '../constants/constants';
import EventPointer from './EventPointer';

const EventUnstyled = ({ className, date, children, isLeft }) => {
  const day = date.getDate() + 1;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <div className={className}>
      <div className="event-pointer-wrapper">
        <EventPointer />
      </div>
      <div className="event-content">{`${day} ${month}, ${year}`}</div>
    </div>
  );
};

const Event = styled(EventUnstyled)`
  position: relative;
  ${flexCenter};
  ${props => (props.isLeft ? 'margin-right: auto' : 'margin-left: auto')};
  .event-content {
    z-index: 3;
    width: ${TIMELINE_EVENT_WIDTH}px;
    height: 100px;
    background-color: blue;
  }

  .event-pointer-wrapper {
    position: absolute;
    z-index: 2;
    top: ${TIMELINE_ICON_OFFSET_FROM_TOP +
      TIMELINE_ICON_DIAMETER / 2 -
      TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;
    ${props =>
      props.isLeft
        ? `left: ${TIMELINE_EVENT_WIDTH -
            TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;`
        : `left: ${-TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;`};
  }
`;

export default Event;
