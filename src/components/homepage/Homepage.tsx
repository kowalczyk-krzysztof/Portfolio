import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import {
  themeSelector,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';
// Styling
import { HomepageContent, StyledHomepageLink } from './homepage-styling';

export const Homepage: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const { homeH1, homeH2, homeDescription, homePassion, learnMore } =
    localization;
  const theme: ThemeProps = useSelector(themeSelector);
  const { background, color } = theme;

  return (
    <HomepageContent
      background={background}
      color={color}
      data-testid={'homepage'}
    >
      <h1 data-testid={'homepageh1'}>{homeH1}</h1>
      <h2> {homeH2}</h2>
      <p>{homeDescription}</p>
      <p> {homePassion}</p>
      <StyledHomepageLink to="/about" data-testid={'homepagelinktoabout'}>
        {learnMore}
      </StyledHomepageLink>
    </HomepageContent>
  );
};