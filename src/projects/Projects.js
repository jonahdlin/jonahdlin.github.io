import React from 'react';
import styled from 'styled-components';
import { HEADER_FONT } from '../constants/theme';
import { flexCenter } from '../constants/mixins';

const ProjectsUnstyled = ({ className, header, children }) => (
  <div className={className}>
    <div className="projects-header">{header}</div>
    <div className="projects-cards-container">{children}</div>
  </div>
);

const Projects = styled(ProjectsUnstyled)`
  height: 100%;
  width: calc(100% - 250px);
  margin-left: 125px;
  margin-right: 125px;

  .projects-header {
    display: flex;
    align-items: center;
    height: 100px;
    font-family: ${HEADER_FONT};
    font-size: 40px;
  }

  .projects-cards-container {
    ${flexCenter};
  }
`;

export default Projects;
