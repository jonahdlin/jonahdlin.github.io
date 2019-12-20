import React from 'react';
import styled from 'styled-components';
import EventIcon from './EventIcon';

const EventWrapperUnstyled = ({ className, children }) => {
  return (
    <div className={className}>
      <EventIcon />
      {children}
    </div>
  );
};

const EventWrapper = styled(EventWrapperUnstyled)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default EventWrapper;
