import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREY_2, LIGHT_GREY_1, BOX_SHADOW } from '../constants/theme';

const ProjectCardUnstyled = ({ className, children }) => (
  <div className={className}>
    <div className="projects-cards-container">{children}</div>
  </div>
);

const ProjectCard = styled(ProjectCardUnstyled)`
  height: 350px;
  width: 250px;

  border: 1px solid ${LIGHT_GREY_2};
  background-color: ${LIGHT_GREY_1};
  box-shadow: ${BOX_SHADOW};

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export default ProjectCard;
