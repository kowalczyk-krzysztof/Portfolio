import React, { FC } from 'react';
// Styling
import { StyledTechnologyIcons } from './about-styling';
import { ReactLogo, NodeJs } from '@styled-icons/fa-brands';
import { Redux } from '@styled-icons/boxicons-logos';
import { Typescript, Mongodb, Postgresql } from '@styled-icons/simple-icons';

export const TechnologyIcons: FC = () => {
  const iconSize = '56';

  return (
    <StyledTechnologyIcons>
      <ReactLogo size={iconSize} color="#61DBFB" title="React" />
      <Redux size={iconSize} color="#764abc" title="Redux" />
      <NodeJs size={iconSize} color="#3c873a" title="NodeJs" />
      <Typescript size={iconSize} color="#007acc" title="TypeScript" />
      <Mongodb size={iconSize} color="#3fa037" title="mongoDB" />
      <Postgresql size={iconSize} color="#0064a5" title="PostgreSQL" />
    </StyledTechnologyIcons>
  );
};

export default TechnologyIcons;
