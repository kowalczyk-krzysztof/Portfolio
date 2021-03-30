import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Locale,
  localizationSelector,
} from '../../features/localization/localizationSlice';
import {
  menuToggleSelector,
  MenuDisplay,
} from '../../features/menutoggle/menuToggleSlice';
// Styling
import { StyledLinks, StyledLink } from './navbar-styling';

const LinkList: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const display: MenuDisplay = useSelector(menuToggleSelector);
  const {
    navbarAbout,
    navbarContact,
    navbarHome,
  }: {
    navbarAbout: string;
    navbarContact: string;
    navbarHome: string;
  } = localization;

  return (
    <StyledLinks display={display}>
      <StyledLink href="/">{navbarHome}</StyledLink>
      <StyledLink href="about">{navbarAbout}</StyledLink>
      <StyledLink href="contact">{navbarContact}</StyledLink>
    </StyledLinks>
  );
};

export default LinkList;
