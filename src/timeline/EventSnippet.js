import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_WIDTH_REDUCED,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_ICON_DIAMETER,
  monthsMap,
  monthsAbbrevMap,
} from '../constants/constants';
import {
  BOX_SHADOW,
  LIGHT_GREY_1,
  LIGHT_GREY_4,
  HEADER_FONT,
  PARAGRAPH_FONT,
  DARK_GREY_2,
} from '../constants/theme';

const EventSnippetUnstyled = ({ className, date, date2, title, isLeft }) => {
  let dateString = '';
  if (date2 === undefined) {
    const month = monthsMap[date.getMonth()];
    const year = date.getFullYear();
    dateString = `${month} ${year}`;
  } else {
    const month1 = monthsAbbrevMap[date.getMonth()];
    const year1 = date.getFullYear();
    const month2 = monthsAbbrevMap[date2.getMonth()];
    const year2 = date2.getFullYear();
    if (year1 === year2) {
      dateString = `${month1} - ${month2} ${year1}`;
    } else {
      dateString = `${month1} ${year1} - ${month2} ${year2}`;
    }
  }

  return (
    <div className={className}>
      <div className="event-snippet-content">
        <div className="event-snippet-title">{title}</div>
        <div className="event-snippet-date">{dateString}</div>
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
border-left: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_4};
left: ${
      props.isDesktop
        ? TIMELINE_EVENT_WIDTH - 2
        : TIMELINE_EVENT_WIDTH_REDUCED - 2
    }px;`;
  } else {
    return `\
border-right: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_4};
left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS}px;`;
  }
};

const eventPointerAfterStyling = props => {
  if (props.isLeft) {
    return `\
border-left: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid ${LIGHT_GREY_1};
left: ${
      props.isDesktop
        ? TIMELINE_EVENT_WIDTH - 2.3
        : TIMELINE_EVENT_WIDTH_REDUCED - 2.3
    }px;`;
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
    border: 1px solid ${LIGHT_GREY_4};
    background-color: ${LIGHT_GREY_1};
    width: ${props =>
      props.isDesktop ? TIMELINE_EVENT_WIDTH : TIMELINE_EVENT_WIDTH_REDUCED}px;
    padding: 15px;

    .event-snippet-title {
      height: 100%;
      display: flex;
      justify-content: center;
      font-family: ${HEADER_FONT};
      font-size: ${props => (props.isDesktop ? 18 : 14)}px;
    }

    .event-snippet-date {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-family: ${PARAGRAPH_FONT};
      font-size: ${props => (props.isDesktop ? 12 : 10)}px;
      flex-grow: 1;
      margin-left: 10px;
      white-space: nowrap;
      text-align: right;
      color: ${DARK_GREY_2};
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
