import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import {
  HEADER_PHOTO_WIDTH,
  TIMELINE_EVENT_WIDTH_REDUCED,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON,
  TIMELINE_ICON_DIAMETER,
  HEADER_PHOTO_WIDTH_REDUCED,
} from '../constants/constants';
import HeaderPhoto from './HeaderPhoto';
import { HEADER_FONT } from '../constants/theme';

const HeaderUnstyled = ({ className, isDesktop }) => {
  const containerClassNames = classNames({
    [className]: true,
    'header-two-column': isDesktop,
    'header-one-column': !isDesktop,
  });

  const header = isDesktop ? (
    <div className={containerClassNames}>
      <div className="header-title right-aligned">Jonah Dlin</div>
      <HeaderPhoto isDesktop={isDesktop} />
      <div className="header-title">Full Stack Developer</div>
    </div>
  ) : (
    <div className={containerClassNames}>
      <HeaderPhoto isDesktop={isDesktop} />
      <div className="header-right-text-container">
        <div className="header-right-title">Jonah Dlin</div>
        <div className="header-right-subtitle">Full Stack Developer</div>
      </div>
    </div>
  );
  return header;
};

const Header = styled(HeaderUnstyled)`
  &.header-two-column {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    padding-top: 20px;
    height: ${HEADER_PHOTO_WIDTH + 20}px;

    .header-title {
      position: absolute;
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      font-family: ${HEADER_FONT};
      font-size: 40px;

      justify-content: flex-start;
      left: calc(50% + ${HEADER_PHOTO_WIDTH / 2}px);
      &.right-aligned {
        justify-content: flex-end;
        right: calc(50% + ${HEADER_PHOTO_WIDTH / 2}px);
        left: 0;
      }
    }
  }

  &.header-one-column {
    display: flex;
    width: ${TIMELINE_EVENT_WIDTH_REDUCED +
      TIMELINE_EVENT_POINTER_RADIUS +
      TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
      TIMELINE_ICON_DIAMETER / 2 +
      HEADER_PHOTO_WIDTH_REDUCED}px;
    padding-top: 20px;
    height: ${HEADER_PHOTO_WIDTH_REDUCED + 20}px;
    .header-right-text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin-left: ${HEADER_PHOTO_WIDTH_REDUCED}px;
      padding-left: 20px;
      padding-right: 20px;
      .header-right-title {
        font-family: ${HEADER_FONT};
        font-size: 30px;
      }
      .header-right-subtitle {
        font-family: ${HEADER_FONT};
        font-size: 20px;
      }
    }
  }
`;

export default Header;
