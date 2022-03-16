import { FC } from 'react';
import {
  StyledTechnologyIcon,
  StyledTechnologyIconWrapper,
} from './home-styling';
import { ReactLogo, NodeJs } from '@styled-icons/fa-brands';
import { Redux } from '@styled-icons/boxicons-logos';
import { Typescript } from '@styled-icons/simple-icons';
import { mediumIcon } from '../../createGlobalStyle';

export const TechnologyIcons: FC = () => (
  <StyledTechnologyIconWrapper data-testid={'homeicons'}>
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
