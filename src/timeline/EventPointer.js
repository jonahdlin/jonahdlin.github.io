import React from 'react';
import styled from 'styled-components';

const EventPointerUnstyled = ({ className }) => {
  return <div className={className} />;
};

const EventPointer = styled(EventPointerUnstyled)`
  position: relative;
  z-index: 2;
  width: 20px;
  height: 20px;
  background-color: blue;
  transform: rotate(45deg);
`;

export default EventPointer;
