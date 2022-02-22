import { FC } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import {
  themeSelector,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';

import { Picture } from './Picture';
import { TechnologyIcons } from './TechnologyIcons';
import {
  StyledAboutContainer,
  StyledTechnologyContainer,
  StyledTextContainer,
  StyledAboutWrapper,
  StyledTechnologyWrapper,
} from './about-styling';

export const About: FC = () => {
  const localization: Locale = useSelector(localizationSelector);
  const { aboutDescription, aboutTechnologies, aboutHobbies } = localization;

  const theme: ThemeProps = useSelector(themeSelector);
  const { background } = theme;

  return (
    <StyledAboutContainer data-testid={'about'}>
      <StyledAboutWrapper>
        <StyledTextContainer background={background}>
          <p data-testid={'aboutdescription'}>{aboutDescription}</p>
          <p>{aboutHobbies}</p>
        </StyledTextContainer>
        <Picture />
      </StyledAboutWrapper>
      <StyledTechnologyContainer>
        <StyledTechnologyWrapper background={background}>
          <p>{aboutTechnologies}</p>
          <TechnologyIcons />
        </StyledTechnologyWrapper>
      </StyledTechnologyContainer>
    </StyledAboutContainer>
  );
};
