import React from 'react';
import styled from 'styled-components';

const HeaderUnstyled = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

const Header = styled(HeaderUnstyled)`
width: 100%
`;

export default Header;
