import React from 'react';
import styled from 'styled-components';
import { TIMELINE_LINE_COLOUR } from '../constants/theme';
import { TIMELINE_LINE_THICKENSS } from '../constants/constants';

const TimelineLineUnstyled = ({ className, children }) => (
  <div className={className} />
);

const TimelineLine = styled(TimelineLineUnstyled)`
  position: absolute;
  width: ${TIMELINE_LINE_THICKENSS}px;
  height: 100%;
  background-color: ${TIMELINE_LINE_COLOUR};
`;

export default TimelineLine;
