import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  months,
  TIMELINE_EVENT_WIDTH,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_EVENT_POINTER_RADIUS,
} from '../constants/constants';
import { BOX_SHADOW, LIGHT_GREY_1, LIGHT_GREY_2 } from '../constants/theme';

const EventUnstyled = ({ className, date, children, isLeft }) => {
  const day = date.getDate() + 1;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <div className={className}>
      <div className="event-content">{`${day} ${month}, ${year}`}</div>
    </div>
  );
};

const Event = styled(EventUnstyled)`
  position: relative;
  ${flexCenter};
  ${props => (props.isLeft ? 'margin-right: auto' : 'margin-left: auto')};
  box-shadow: ${BOX_SHADOW};

  .event-content {
    position: relative;
    z-index: 10;
    border: 1px solid ${LIGHT_GREY_2};
    background-color: ${LIGHT_GREY_1};
    width: ${TIMELINE_EVENT_WIDTH}px;
    height: 100px;
    padding: 10px;

    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS}px solid transparent;
      position: absolute;
      top: ${TIMELINE_ICON_OFFSET_FROM_TOP + 1}px;
      ${props =>
        props.isLeft
          ? `border-left: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_2};
      left: ${TIMELINE_EVENT_WIDTH - 2}px;`
          : `border-right: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_2};
      left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS}px;`};
    }

    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid transparent;
      position: absolute;
      top: ${TIMELINE_ICON_OFFSET_FROM_TOP + 2}px;
      ${props =>
        props.isLeft
          ? `border-left: ${TIMELINE_EVENT_POINTER_RADIUS -
              1}px solid ${LIGHT_GREY_1};
      left: ${TIMELINE_EVENT_WIDTH - 2.3}px;`
          : `border-right: ${TIMELINE_EVENT_POINTER_RADIUS -
              1}px solid ${LIGHT_GREY_1};
      left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS + 2.3}px;`};
    }
  }
`;

export default Event;
