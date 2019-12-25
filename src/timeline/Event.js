import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  TIMELINE_EVENT_WIDTH,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_ICON_DIAMETER,
  monthsMap,
  EVENT_DESCRIPTION_BULLET,
} from '../constants/constants';
import { BOX_SHADOW, LIGHT_GREY_1, LIGHT_GREY_2 } from '../constants/theme';

const EventUnstyled = ({
  className,
  date,
  icon,
  title,
  subtitle,
  points,
  isLeft,
}) => {
  const month = monthsMap[date.getMonth()];
  const year = date.getFullYear();

  let eventDescriptions;
  if (points && points.length) {
    const descriptions = points.map(point => (
      <div className="event-description">
        {`${EVENT_DESCRIPTION_BULLET}  ${point}`}
      </div>
    ));
    eventDescriptions = (
      <div className="event-descriptions">{descriptions}</div>
    );
  }

  return (
    <div className={className}>
      <div className="event-content">
        <div className="event-header">
          <div className="event-icon-container">
            <img className="event-icon" src={icon} alt="" />
          </div>
          <div className="event-titles-container">
            <div className="event-title">{title}</div>
            <div className="event-subtitle">{subtitle}</div>
          </div>
          <div className="event-date" date={date}>{`${month} ${year}`}</div>
        </div>
        {eventDescriptions}
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
    padding: 15px;

    .event-header {
      ${flexCenter};
      width: 100%;
      height: 75px;

      .event-icon-container {
        ${flexCenter};
        height: 75px;
        width: 75px;

        .event-icon {
          height: 100%;
          max-width: 100%;
        }
      }

      .event-titles-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        .event-title {
          font-size: 24px;
        }
      }

      .event-date {
        height: 100%;
      }
    }

    .event-descriptions {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      .event-description {
        :not(:last-child) {
          margin-bottom: 5px;
        }
      }
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

export default Event;
