import React from 'react';
import styled from 'styled-components';
import { HEADER_FONT } from '../constants/theme';
import { flexCenter } from '../constants/mixins';
import ProjectCard, { ProjectDescriptionLink } from './ProjectCard';

import graphHaxThumb from '../assets/graphHaxThumb.png';
import evolutionThumb from '../assets/evolutionThumb.png';
import tavimThumb from '../assets/tavimThumb.png';

const ProjectsUnstyled = ({ className, isDesktop }) => {
  const graphHaxDesc = (
    <div>
      Nodes and paths network visualizer built with{' '}
      <ProjectDescriptionLink
        href="https://ianlai.xyz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ian Lai
      </ProjectDescriptionLink>
      , inspired by a graph theory course.
    </div>
  );

  const tavimDesc = (
    <div>
      Collaborative sheet music editor featuring a rendering engine build from
      scratch. Building with{' '}
      <ProjectDescriptionLink
        href="http://nadavhames.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nadav Hames
      </ProjectDescriptionLink>
      .
    </div>
  );

  const tavimSecondaryDesc = (
    <div>
      No tech demo just yet, but rest assured we're working hard :)
      <br />
      <br />
      <ProjectDescriptionLink
        href="http://nadavhames.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nadav Hames
      </ProjectDescriptionLink>{' '}
      and I have been spending our time combing{' '}
      <ProjectDescriptionLink
        href="https://pdfs.semanticscholar.org/fb8b/1f0977bad05a814dbb53cd6e5f957e27e695.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        dissertations
      </ProjectDescriptionLink>
      , investigating{' '}
      <ProjectDescriptionLink
        href="https://guido.grame.fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        approaches
      </ProjectDescriptionLink>{' '}
      and reading{' '}
      <ProjectDescriptionLink
        href="https://w3c.github.io/smufl/gitbook/"
        target="_blank"
        rel="noopener noreferrer"
      >
        specs
      </ProjectDescriptionLink>
      .<br />
      <br />
      Not to mention planning and writing thousands of lines of code.
    </div>
  );

  return (
    <div className={className}>
      <div className="projects-header">Featured Projects</div>
      <div className="projects-cards-container">
        <ProjectCard
          thumbnail={tavimThumb}
          title="Tavim"
          year="2020-ongoing"
          description={tavimDesc}
          technologies="React, Redux, TypeScript"
          hasNoLink={true}
          secondaryDescription={tavimSecondaryDesc}
          isDesktop={isDesktop}
        />
        <ProjectCard
          thumbnail={graphHaxThumb}
          title="GraphHax"
          link="/graph"
          year="2017"
          description={graphHaxDesc}
          technologies="Canvas, JS, jQuery"
          isDesktop={isDesktop}
        />
        <ProjectCard
          thumbnail={evolutionThumb}
          title="Evolution"
          year="2019-ongoing"
          link="/evolution"
          description="Evolution simulator where creatures with randomized traits compete for food to stay alive."
          technologies="Canvas, React"
          isDesktop={isDesktop}
        />
      </div>
    </div>
  );
};

const Projects = styled(ProjectsUnstyled)`
  .projects-header {
    ${flexCenter};
    height: 100px;
    font-family: ${HEADER_FONT};
    font-size: ${props => (props.isDesktop ? 40 : 30)}px;
    margin-top: 40px;
    text-align: center;
    margin-bottom: 20px;
  }

  .projects-cards-container {
    ${flexCenter};
    ${props => !props.isDesktop && 'flex-direction: column;'};
  }
`;

export default Projects;
