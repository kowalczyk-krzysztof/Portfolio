import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import {
  themeSelector,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';
// Styling
import {
  StyledAboutContainer,
  StyledTechnologyContainer,
  StyledTextContainer,
  StyledAboutWrapper,
  StyledTechnologyWrapper,
} from './about-styling';
// Components
import Picture from './Picture';
import TechnologyIcons from './TechnologyIcons';

const About: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const { aboutDescription, aboutTechnologies, aboutHobbies } = localization;

  const theme: ThemeProps = useSelector(themeSelector);
  const { background } = theme;

  return (
    <StyledAboutContainer>
      <StyledAboutWrapper>
        <StyledTextContainer>
          <p style={{ background }}>{aboutDescription}</p>
          <p style={{ background }}> {aboutHobbies}</p>
        </StyledTextContainer>
        <Picture />
      </StyledAboutWrapper>
      <StyledTechnologyContainer>
        <StyledTechnologyWrapper style={{ background }}>
          <p>{aboutTechnologies}</p>
          <TechnologyIcons />
        </StyledTechnologyWrapper>
      </StyledTechnologyContainer>
    </StyledAboutContainer>
  );
};

export default About;
