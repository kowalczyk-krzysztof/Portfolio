import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledAboutContainer } from './about-styling';
// Components
import Picture from './Picture';
import TechnologyIcons from './TechnologyIcons';

const About: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const { aboutDescription, aboutTechnologies, aboutHobbies } = localization;

  return (
    <StyledAboutContainer>
      <Picture />
      <p>{aboutDescription}</p>
      <p>{aboutTechnologies}</p>
      <TechnologyIcons />
      <p>{aboutHobbies}</p>
    </StyledAboutContainer>
  );
};

export default About;
