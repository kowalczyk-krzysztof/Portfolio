import React, { FC } from 'react';
// Styling
import { StyledNavbar, StyledBarsIcon } from './navbar-styling';
// Components
import LinkList from './LinkList';
import ThemeToggle from './ThemeToggle';
import LanguageDropdown from './LanguageDropdown';

const Navbar: FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <LinkList />
      <LanguageDropdown />
      <ThemeToggle />
      <StyledBarsIcon icon="bars" size="2x"></StyledBarsIcon>
    </StyledNavbar>
  );
};

export default Navbar;
