import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  TIMELINE_EVENT_WIDTH,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_ICON_DIAMETER,
  monthsMap,
} from '../constants/constants';
import { BOX_SHADOW, LIGHT_GREY_1, LIGHT_GREY_2 } from '../constants/theme';

const EventSnippetUnstyled = ({ className, date, title, isLeft }) => {
  const month = monthsMap[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className={className}>
      <div className="event-snippet-content">
        <div className="event-snippet-title">{title}</div>
        <div
          className="event-snippet-date"
          date={date}
        >{`${month} ${year}`}</div>
      </div>
    </div>
  );
};

const EVENT_POINTER_OFFSET_FROM_TOP =
  TIMELINE_ICON_OFFSET_FROM_TOP +
  TIMELINE_ICON_DIAMETER / 2 -
  TIMELINE_EVENT_POINTER_RADIUS;

const eventPointerBeforeStyling = props => {
  if (props.isLeft) {
    return `\
border-left: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_2};
left: ${TIMELINE_EVENT_WIDTH - 2}px;`;
  } else {
    return `\
border-right: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_2};
left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS}px;`;
  }
};

const eventPointerAfterStyling = props => {
  if (props.isLeft) {
    return `\
border-left: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid ${LIGHT_GREY_1};
left: ${TIMELINE_EVENT_WIDTH - 2.3}px;`;
  } else {
    return `\
border-right: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid ${LIGHT_GREY_1};
left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS + 2.3}px;`;
  }
};

const EventSnippet = styled(EventSnippetUnstyled)`
  position: relative;
  ${flexCenter};
  ${props => (props.isLeft ? 'margin-right: auto' : 'margin-left: auto')};
  box-shadow: ${BOX_SHADOW};

  .event-snippet-content {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${LIGHT_GREY_2};
    background-color: ${LIGHT_GREY_1};
    width: ${TIMELINE_EVENT_WIDTH}px;
    padding: 15px;

    .event-snippet-title {
      height: 100%;
      display: flex;
      justify-content: center;
      font-size: 20px;
    }

    .event-snippet-date {
      height: 100%;
    }

    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS}px solid transparent;
      position: absolute;
      top: ${EVENT_POINTER_OFFSET_FROM_TOP}px;
      ${eventPointerBeforeStyling};
    }

    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid transparent;
      position: absolute;
      top: ${EVENT_POINTER_OFFSET_FROM_TOP + 1}px;
      ${eventPointerAfterStyling};
    }
  }
`;

export default EventSnippet;
