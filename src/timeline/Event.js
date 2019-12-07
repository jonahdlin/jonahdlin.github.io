import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';

const EventUnstyled = ({ className, date, children, isLeft }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

const Event = styled(EventUnstyled)`
${flexCenter}
width: 100%;
`;

export default Event;
