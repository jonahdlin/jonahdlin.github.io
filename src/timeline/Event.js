import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import { months } from '../constants/constants';
import EventPointer from './EventPointer';

const EventUnstyled = ({ className, date, children, isLeft }) => {
  const day = date.getDate() + 1;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <div className={className}>
      <div class="event-pointer-wrapper">
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
    width: 300px;
    height: 100px;
    background-color: blue;
  }

  .event-pointer-wrapper {
    position: absolute;
    z-index: 2;
    top: 15px;
    ${props => (props.isLeft ? 'left: 290px;' : 'left: -10px;')};
  }
`;

export default Event;
