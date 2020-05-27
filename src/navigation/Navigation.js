import React from 'react';
import styled from 'styled-components';
import NavigationButton from './NavigationButton';

const NavigationUnstyled = ({ className }) => {
  const handleNavClick = type => {
    // These values are the hardcoded y positions of different elements
    // I can't be bothered now to do this dynamically since it's only 3
    // sections
    switch (type) {
      case 'home':
        window.scrollTo(0, 0);
        break;
      case 'projects':
        window.scrollTo(0, 1406);
        break;
      case 'contact':
        window.scrollTo(0, 1896);
        break;
      default:
        break;
    }
  };
  return (
    <div className={className}>
      <NavigationButton
        text="Home"
        clickHandler={() => handleNavClick('home')}
      />
      <NavigationButton
        text="Projects"
        clickHandler={() => handleNavClick('projects')}
      />
      <NavigationButton
        text="Contact"
        clickHandler={() => handleNavClick('contact')}
      />
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
