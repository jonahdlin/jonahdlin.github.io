import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import { months } from '../constants/constants';

const EventUnstyled = ({ className, date, children, isLeft }) => {
  const day = date.getDate() + 1;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return <div className={className}>{`${day} ${month}, ${year}`}</div>;
};

const Event = styled(EventUnstyled)`
  ${flexCenter}
  width: 300px;
  height: 100px;
  background-color: blue;
  margin: 10px;
`;

export default Event;
