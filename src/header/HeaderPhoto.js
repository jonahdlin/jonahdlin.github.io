import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  HEADER_PHOTO_WIDTH,
  HEADER_PHOTO_BORDER_THICKNESS,
} from '../constants/constants';
import { HEADER_PHOTO_BORDER_COLOUR } from '../constants/theme';

const HeaderPhotoUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <div className="photo-container">
        <img src="../../public/favicon.ico" alt="IMG" />
      </div>
    </div>
  );
};

const HeaderPhoto = styled(HeaderPhotoUnstyled)`
  position: absolute;
  width: ${HEADER_PHOTO_WIDTH}px;
  height: ${HEADER_PHOTO_WIDTH}px;

  .photo-container {
    ${flexCenter}
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: ${HEADER_PHOTO_BORDER_THICKNESS}px solid
      ${HEADER_PHOTO_BORDER_COLOUR};
  }
`;

export default HeaderPhoto;
