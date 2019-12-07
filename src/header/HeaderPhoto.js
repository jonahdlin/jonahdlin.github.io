import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';

const HeaderPhotoUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <div className="photo-container">
        <img src="../fabric_of_squares_gray.png" alt="IMG" />
      </div>
    </div>
  );
};

const HeaderPhoto = styled(HeaderPhotoUnstyled)`
  width: 100px;
  height: 100px;
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
