import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import { HEADER_PHOTO_WIDTH } from '../constants/constants';

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
  border: 1px solid black;

  .photo-container {
    ${flexCenter}
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid blue;
  }
`;

export default HeaderPhoto;
