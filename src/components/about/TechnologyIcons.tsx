import { FC } from 'react';
// Styling
import {
  StyledTechnologyIcon,
  StyledTechnologyIconWrapper,
} from './about-styling';
import { ReactLogo, NodeJs } from '@styled-icons/fa-brands';
import { Redux } from '@styled-icons/boxicons-logos';
import { Typescript } from '@styled-icons/simple-icons';
import { mediumIcon } from '../../createGlobalStyle';

export const TechnologyIcons: FC = () => {
  return (
    <StyledTechnologyIconWrapper data-testid={'abouticons'}>
      <StyledTechnologyIcon>
        <ReactLogo size={mediumIcon} color="#61DBFB" title="React" />
      </StyledTechnologyIcon>
      <StyledTechnologyIcon>
        <Redux size={mediumIcon} color="#764abc" title="Redux" />
      </StyledTechnologyIcon>
      <StyledTechnologyIcon>
        <NodeJs size={mediumIcon} color="#3c873a" title="NodeJs" />
      </StyledTechnologyIcon>
      <StyledTechnologyIcon>
        <Typescript size={mediumIcon} color="#007acc" title="TypeScript" />
      </StyledTechnologyIcon>
    </StyledTechnologyIconWrapper>
  );
};
