import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import {
  LIGHT_GREY_1,
  BOX_SHADOW,
  HIGHLIGHT_TRANSITION,
  LIGHT_GREY_3,
  HEADER_FONT,
  PRIMARY,
  PARAGRAPH_FONT,
  PRIMARY_5,
  PRIMARY_DARK,
} from '../constants/theme';
import { flexCenter } from '../constants/mixins';

const ProjectCardUnstyled = ({
  className,
  thumbnail,
  title,
  year,
  description,
  technologies,
  link,
  hasNoLink,
  secondaryDescription,
  isDesktop,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleProjectClick = event => {
    if (event.target.href) {
      // This prevents click behaviour when one clicks on a link
      return;
    } else if (isFlipped) {
      setIsFlipped(false);
    } else if (hasNoLink === undefined || hasNoLink === false) {
      if (link !== undefined) {
        window.open(link, '_blank');
      }
    } else {
      setIsFlipped(true);
    }
  };

  const flipContainerClassNames = classNames({
    'project-flip-container': true,
    'project-flip-container-flipped': isFlipped,
  });

  return (
    <div className={className} onClick={handleProjectClick}>
      <div className={flipContainerClassNames}>
        <div className="project-flip-front">
          <div className="project-thumbnail-container">
            <div className="project-title-container">
              <div className="project-title">{title}</div>
              <div className="project-date">{year}</div>
            </div>
            <div className="project-thumbnail-cast" />
            <img className="project-thumbnail" src={thumbnail} alt={title} />
          </div>
          <div className="project-description">{description}</div>
          <div className="project-technologies">{technologies}</div>
        </div>
        <div className="project-flip-back">
          <div className="project-secondary-description">
            {secondaryDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = styled(ProjectCardUnstyled)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  width: 250px;

  cursor: pointer;
  flex-shrink: 0;
  perspective: 1000px;

  :not(:last-child) {
    ${props => props.isDesktop && 'margin-right: 30px;'}
    ${props => !props.isDesktop && 'margin-bottom: 30px;'}
  }

  .project-flip-container {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &.project-flip-container-flipped {
      transform: rotateY(180deg);
    }

    .project-flip-front {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: rotateY(0deg);

      transition: ${HIGHLIGHT_TRANSITION};
      border: 1px solid ${LIGHT_GREY_3};
      background-color: ${LIGHT_GREY_1};
      box-shadow: ${BOX_SHADOW};

      :hover {
        background-color: ${LIGHT_GREY_3};
      }
    }

    .project-flip-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      background-color: white;
      transform: rotateY(180deg);

      border: 1px solid ${LIGHT_GREY_3};
      background-color: ${LIGHT_GREY_1};
      box-shadow: ${BOX_SHADOW};
      padding: 15px;
      display: flex;
      align-items: center;

      .project-secondary-description {
        width: 100%;
        text-align: center;
        font-family: ${PARAGRAPH_FONT};
      }
    }
  }

  .project-thumbnail-container {
    position: relative;
    ${flexCenter};
    width: 100%;
    height: 199px;
    overflow: hidden;
    flex-shrink: 0;

    .project-title-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      position: absolute;
      z-index: 10;

      font-family: ${HEADER_FONT};
      color: ${LIGHT_GREY_1};

      .project-title {
        font-size: 30px;
        letter-spacing: 3px;
      }

      .project-date {
        font-size: 18px;
        letter-spacing: 3px;
      }
    }

    .project-thumbnail-cast {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      background-color: ${PRIMARY_DARK};
      opacity: 80%;
    }

    .project-thumbnail {
      height: 100%;
      width: auto;
      filter: blur(0.1px);
      opacity: 75%;
    }
  }

  .project-description {
    flex-grow: 1;
    width: 100%;
    height: auto;
    font-family: ${PARAGRAPH_FONT};
    padding: 15px;
    text-align: center;
  }

  .project-technologies {
    ${flexCenter};
    font-weight: bold;
    justify-self: flex-end;
    padding-bottom: 15px;
  }
`;

export const ProjectDescriptionLink = styled.a`
  text-decoration: none;
  :link {
    color: ${PRIMARY};
  }
  :visited {
    color: ${PRIMARY_5};
  }
`;

export default ProjectCard;
