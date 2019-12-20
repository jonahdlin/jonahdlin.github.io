import React from 'react';
import styled from 'styled-components';

const HeaderUnstyled = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Header = styled(HeaderUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100px;
`;

export default Header;
