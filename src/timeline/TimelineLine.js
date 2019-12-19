import React from 'react';
import styled from 'styled-components';
import { timelineLineColour } from '../constants/theme';

const TimelineLineUnstyled = ({ className, children }) => (
  <div className={className} />
);

const TimelineLine = styled(TimelineLineUnstyled)`
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: ${timelineLineColour};
`;

export default TimelineLine;
