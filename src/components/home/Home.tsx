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
  StyledHomeContainer,
  StyledTechnologyContainer,
  StyledTextContainer,
  StyledHomeWrapper,
  StyledTechnologyWrapper,
} from './home-styling';

export const Home: FC = () => {
  const localization: Locale = useSelector(localizationSelector);
  const { homeDescription, homeTechnologies, homeHobbies } = localization;

  const theme: ThemeProps = useSelector(themeSelector);
  const { background } = theme;

  return (
    <StyledHomeContainer data-testid={'home'}>
      <StyledHomeWrapper>
        <StyledTextContainer background={background}>
          <p data-testid={'homedescription'}>{homeDescription}</p>
          <p>{homeHobbies}</p>
        </StyledTextContainer>
        <Picture />
      </StyledHomeWrapper>
      <StyledTechnologyContainer>
        <StyledTechnologyWrapper background={background}>
          <p>{homeTechnologies}</p>
          <TechnologyIcons />
        </StyledTechnologyWrapper>
      </StyledTechnologyContainer>
    </StyledHomeContainer>
  );
};
