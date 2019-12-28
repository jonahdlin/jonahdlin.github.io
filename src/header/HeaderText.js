import React from 'react';
import styled from 'styled-components';
import { HEADER_PHOTO_WIDTH } from '../constants/constants';
import { HEADER_FONT } from '../constants/theme';

const HeaderTextUnstyled = ({ className, children, isRightAligned }) => {
  return <div className={className}>{children}</div>;
};

const HeaderText = styled(HeaderTextUnstyled)`
  position: absolute;
  display: flex;
  align-items: center;
  ${props =>
    props.isRightAligned
      ? `
    justify-content: flex-end;
    right: calc(50% + ${HEADER_PHOTO_WIDTH / 2}px);`
      : `
      justify-content: flex-start;
      left: calc(50% + ${HEADER_PHOTO_WIDTH / 2}px);`};
  padding-left: 20px;
  padding-right: 20px;
  font-family: ${HEADER_FONT};
  font-size: 40px;
`;

export default HeaderText;
