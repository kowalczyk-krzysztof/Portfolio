import React, { FC } from 'react';
// Styling
import {
  StyledTechnologyIcon,
  StyledTechnologyIconWrapper,
} from './about-styling';
import { ReactLogo, NodeJs } from '@styled-icons/fa-brands';
import { Redux } from '@styled-icons/boxicons-logos';
import { Typescript, Mongodb, Postgresql } from '@styled-icons/simple-icons';
import { aboutPageIconSize } from '../../createGlobalStyle';

export const TechnologyIcons: FC = () => {
  return (
    <StyledTechnologyIconWrapper>
      <StyledTechnologyIcon>
        <ReactLogo size={aboutPageIconSize} color="#61DBFB" title="React" />
      </StyledTechnologyIcon>

      <StyledTechnologyIcon>
        <Redux size={aboutPageIconSize} color="#764abc" title="Redux" />
      </StyledTechnologyIcon>

      <StyledTechnologyIcon>
        <NodeJs size={aboutPageIconSize} color="#3c873a" title="NodeJs" />
      </StyledTechnologyIcon>

      <StyledTechnologyIcon>
        <Typescript
          size={aboutPageIconSize}
          color="#007acc"
          title="TypeScript"
        />
      </StyledTechnologyIcon>

      <StyledTechnologyIcon>
        <Mongodb size={aboutPageIconSize} color="#3fa037" title="mongoDB" />
      </StyledTechnologyIcon>

      <StyledTechnologyIcon>
        <Postgresql
          size={aboutPageIconSize}
          color="#0064a5"
          title="PostgreSQL"
        />
      </StyledTechnologyIcon>
    </StyledTechnologyIconWrapper>
  );
};

export default TechnologyIcons;
