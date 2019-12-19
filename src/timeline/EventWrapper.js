import React from 'react';
import styled from 'styled-components';

const EventWrapperUnstyled = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="icon" />
      {children}
    </div>
  );
};

const EventWrapper = styled(EventWrapperUnstyled)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px dashed green;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  .icon {
    position: absolute;
    top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    z-index: 10;
  }
`;

export default EventWrapper;
