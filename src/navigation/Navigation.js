import React from 'react';
import styled from 'styled-components';
import NavigationButton from './NavigationButton';

const NavigationUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <NavigationButton text="Home" />
      <NavigationButton text="Projects" />
      <NavigationButton text="Contact" />
    </div>
  );
};

const Navigation = styled(NavigationUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  z-index: 10;
  top: 50px;
  left: 25px;
`;

export default Navigation;
