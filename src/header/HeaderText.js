import React from 'react';
import styled from 'styled-components';

const HeaderTextUnstyled = ({ className, children, isRightAligned }) => {
  return <div className={className}>{children}</div>;
};

const HeaderText = styled(HeaderTextUnstyled)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.isRightAligned ? 'flex-end' : 'flex-start'};
  height: 100px;
  border: 1px solid black;
`;

export default HeaderText;
