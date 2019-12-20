import React from 'react';
import styled from 'styled-components';
import {
  TIMELINE_EVENT_POINTER_SIDE_LENGTH,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_ICON_DIAMETER,
  TIMELINE_EVENT_WIDTH,
} from '../constants/constants';
import { BOX_SHADOW, LIGHT_GREY_1, LIGHT_GREY_2 } from '../constants/theme';

const EventPointerUnstyled = ({ className, isLeft }) => {
  return <div className={className} />;
};

const EventPointer = styled(EventPointerUnstyled)`
  position: absolute;
  z-index: 15;
  top: ${TIMELINE_ICON_OFFSET_FROM_TOP +
    TIMELINE_ICON_DIAMETER / 2 -
    TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;
  ${props =>
    props.isLeft
      ? `left: ${TIMELINE_EVENT_WIDTH -
          TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;`
      : `left: ${-TIMELINE_EVENT_POINTER_SIDE_LENGTH / 2}px;`};
  width: ${TIMELINE_EVENT_POINTER_SIDE_LENGTH}px;
  height: ${TIMELINE_EVENT_POINTER_SIDE_LENGTH}px;
  background-color: ${LIGHT_GREY_1};
  border: 1px solid black;
  box-shadow: ${BOX_SHADOW};
  transform: rotate(45deg);
`;

export default EventPointer;
