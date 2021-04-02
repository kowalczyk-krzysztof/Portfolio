import React, { FC } from 'react';
// Styling
import { StyledNavbar } from './navbar-styling';
// Components
import Logo from './Logo';
import LinkList from './LinkList';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import MenuButton from './MenuButton';

const Navbar: FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <Logo />
      <LinkList />
      <ThemeToggle />
      <LanguageToggle />
      <MenuButton />
    </StyledNavbar>
  );
};

export default Navbar;
