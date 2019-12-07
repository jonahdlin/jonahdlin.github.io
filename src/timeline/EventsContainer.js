import React from 'react';
import styled from 'styled-components';
import { EventsContainerColour } from '../constants/theme';

const EventsContainerUnstyled = ({ className, children }) => 
  <div className={className}>{children}</div>;

const EventsContainer = styled(EventsContainerUnstyled)`
height: 100%;
`;

export default EventsContainer;
