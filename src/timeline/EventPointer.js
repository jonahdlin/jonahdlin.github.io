import React from 'react';
import styled from 'styled-components';
import { TIMELINE_EVENT_POINTER_SIDE_LENGTH } from '../constants/constants';

const EventPointerUnstyled = ({ className }) => {
  return <div className={className} />;
};

const EventPointer = styled(EventPointerUnstyled)`
  position: relative;
  z-index: 2;
  width: ${TIMELINE_EVENT_POINTER_SIDE_LENGTH}px;
  height: ${TIMELINE_EVENT_POINTER_SIDE_LENGTH}px;
  background-color: blue;
  transform: rotate(45deg);
`;

export default EventPointer;
