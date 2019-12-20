import React from 'react';
import styled from 'styled-components';
import { HEADER_PHOTO_WIDTH } from '../constants/constants';

const HeaderUnstyled = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Header = styled(HeaderUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 20px;
  height: ${HEADER_PHOTO_WIDTH + 20}px;
`;

export default Header;
