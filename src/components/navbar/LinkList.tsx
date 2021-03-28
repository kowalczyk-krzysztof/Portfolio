import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { menuToggleSelector } from '../../features/menutoggle/menuToggleSlice';
// Styling
import { StyledLinks } from './navbar-styling';

const LinkList: FC = (): JSX.Element => {
  const localization = useSelector(localizationSelector);
  const display = useSelector(menuToggleSelector);
  const { navbarAbout, navbarContact, navbarHome } = localization;

  return (
    <StyledLinks id={display}>
      <a href="/">{navbarHome}</a>
      <a href="about">{navbarAbout}</a>
      <a href="contact">{navbarContact}</a>
    </StyledLinks>
  );
};

export default LinkList;
