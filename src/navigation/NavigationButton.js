import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  PRIMARY,
  LIGHT_GREY_1,
  BOX_SHADOW,
  PARAGRAPH_FONT,
} from '../constants/theme';

const NavigationButtonUnstyled = ({ className, text, clickHandler }) => {
  return (
    <div className={className} onClick={clickHandler}>
      {text}
    </div>
  );
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
  font-family: ${PARAGRAPH_FONT};
  font-size: 13px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default NavigationButton;
