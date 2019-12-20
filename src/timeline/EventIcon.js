import React from 'react';
import styled from 'styled-components';
import {
  TIMELINE_ICON_DIAMETER,
  TIMELINE_ICON_OFFSET_FROM_TOP,
} from '../constants/constants';

const EventIconUnstyled = ({ className }) => {
  return <div className={className} />;
};

const EventIcon = styled(EventIconUnstyled)`
  position: absolute;
  top: ${TIMELINE_ICON_OFFSET_FROM_TOP}px;
  width: ${TIMELINE_ICON_DIAMETER}px;
  height: ${TIMELINE_ICON_DIAMETER}px;
  border-radius: 50%;
  background-color: red;
  z-index: 10;
`;

export default EventIcon;
