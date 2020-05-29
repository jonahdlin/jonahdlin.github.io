import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  HEADER_PHOTO_WIDTH,
  HEADER_PHOTO_BORDER_THICKNESS,
  HEADER_PHOTO_WIDTH_REDUCED,
} from '../constants/constants';
import { HEADER_PHOTO_BORDER_COLOUR } from '../constants/theme';

import headshot from '../assets/headshot.jpg';

const HeaderPhotoUnstyled = ({ className, isDesktop }) => {
  return (
    <div className={className}>
      <div className="photo-container">
        <img className="photo" src={headshot} alt="IMG" />
      </div>
    </div>
  );
};

const HeaderPhoto = styled(HeaderPhotoUnstyled)`
  position: absolute;
  width: ${props =>
    props.isDesktop ? HEADER_PHOTO_WIDTH : HEADER_PHOTO_WIDTH_REDUCED}px;
  height: ${props =>
    props.isDesktop ? HEADER_PHOTO_WIDTH : HEADER_PHOTO_WIDTH_REDUCED}px;

  .photo-container {
    ${flexCenter}
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: ${HEADER_PHOTO_BORDER_THICKNESS}px solid
      ${HEADER_PHOTO_BORDER_COLOUR};
    overflow: hidden;

    .photo {
      width: 100%;
      height: 100%;
    }
  }
`;

export default HeaderPhoto;
