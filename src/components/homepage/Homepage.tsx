import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  localizationSelector,
  Locale,
} from '../../features/localization/localizationSlice';
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
  }: {
    homeH1: string;
    homeH2: string;
    homeDescription: string;
    learnMore: string;
    homePassion: string;
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
