import React, { FC } from 'react';
// Styling
import { StyledTechnologyIcons } from './about-styling';
import { ReactLogo, NodeJs } from '@styled-icons/fa-brands';
import { Redux } from '@styled-icons/boxicons-logos';
import { Typescript, Mongodb, Postgresql } from '@styled-icons/simple-icons';
import { aboutPageIconSize } from '../../createGlobalStyle';

export const TechnologyIcons: FC = () => {
  return (
    <StyledTechnologyIcons>
      <ReactLogo size={aboutPageIconSize} color="#61DBFB" title="React" />
      <Redux size={aboutPageIconSize} color="#764abc" title="Redux" />
      <NodeJs size={aboutPageIconSize} color="#3c873a" title="NodeJs" />
      <Typescript size={aboutPageIconSize} color="#007acc" title="TypeScript" />
      <Mongodb size={aboutPageIconSize} color="#3fa037" title="mongoDB" />
      <Postgresql size={aboutPageIconSize} color="#0064a5" title="PostgreSQL" />
    </StyledTechnologyIcons>
  );
};

export default TechnologyIcons;
