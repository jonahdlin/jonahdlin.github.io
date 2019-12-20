import React from 'react';
import styled from 'styled-components';
import { HEADER_PHOTO_WIDTH } from '../constants/constants';

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
  height: 100px;
  border: 1px solid black;
`;

export default HeaderText;
