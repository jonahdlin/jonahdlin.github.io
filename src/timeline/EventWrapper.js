import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';

const EventWrapperUnstyled = ({
  className,
  children,
  marginBottom,
  isLeft,
}) => {
  return <div className={className}>{children}</div>;
};

const EventWrapper = styled(EventWrapperUnstyled)`
  ${flexCenter}
  border: 1px dashed green;
  ${props => (props.isLeft ? 'margin-right: 10px' : 'margin-left: 10px')};
  margin-bottom: ${props => props.marginBottom}px;
`;

export default EventWrapper;
