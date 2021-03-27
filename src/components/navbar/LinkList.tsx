import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
// Styling
import { StyledLinks } from './navbar-styling';

const LinkList: FC = (): JSX.Element => {
  const localization = useSelector(localizationSelector);
  const { navbarAbout, navbarContact, navbarHome } = localization;

  return (
    <StyledLinks>
      <a href="/">{navbarHome}</a>
      <a href="about">{navbarAbout}</a>
      <a href="contact">{navbarContact}</a>
    </StyledLinks>
  );
};

export default LinkList;
