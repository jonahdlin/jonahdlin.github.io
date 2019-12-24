import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import { PRIMARY, LIGHT_GREY_1, BOX_SHADOW } from '../constants/theme';

const NavigationButtonUnstyled = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};

const NavigationButton = styled(NavigationButtonUnstyled)`
  ${flexCenter};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  background-color: ${PRIMARY};
  color: ${LIGHT_GREY_1};
  box-shadow: ${BOX_SHADOW};
  user-select: none;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default NavigationButton;
