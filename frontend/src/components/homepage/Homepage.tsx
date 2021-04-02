import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { HomepageContent, StyledHomepageLink } from './homepage-styling';

const Homepage: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const {
    homeH1,
    homeH2,
    homeDescription,
    homePassion,
    learnMore,
  } = localization;
  return (
    <HomepageContent>
      <h1>{homeH1}</h1>
      <h2> {homeH2}</h2>
      <p>{homeDescription}</p>
      <p> {homePassion}</p>
      <StyledHomepageLink to="/about">{learnMore}</StyledHomepageLink>
    </HomepageContent>
  );
};

export default Homepage;
