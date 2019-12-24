import React from 'react';
import styled from 'styled-components';
import {
  TIMELINE_ICON_DIAMETER,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  eventTypeMap,
} from '../constants/constants';
import { flexCenter } from '../constants/mixins';
import { PRIMARY, LIGHT_GREY_1 } from '../constants/theme';

const EventIconUnstyled = ({ className, type }) => {
  const iconName = eventTypeMap[type] ? eventTypeMap[type].iconName : undefined;
  return (
    <div className={className}>
      <i className="material-icons">{iconName}</i>
    </div>
  );
};

const getBackgroundColour = props => {
  return eventTypeMap[props.type]
    ? eventTypeMap[props.type].backgroundColour
    : PRIMARY;
};

const getColour = props => {
  return eventTypeMap[props.type]
    ? eventTypeMap[props.type].colour
    : LIGHT_GREY_1;
};

const EventIcon = styled(EventIconUnstyled)`
  ${flexCenter};
  position: absolute;
  z-index: 10;
  top: ${TIMELINE_ICON_OFFSET_FROM_TOP}px;
  width: ${TIMELINE_ICON_DIAMETER}px;
  height: ${TIMELINE_ICON_DIAMETER}px;
  border-radius: 50%;
  background-color: ${getBackgroundColour};

  .material-icons {
    color: ${getColour};
    user-select: none;
  }
`;

export default EventIcon;
