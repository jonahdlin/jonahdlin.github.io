import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';

const HeaderUnstyled = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

const Header = styled(HeaderUnstyled)`
${flexCenter}
width: 100%;
`;

export default Header;
