import { FC, useState } from 'react';
// Components
import { Logo } from './Logo';
import { LinkList } from './LinkList';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { MenuButton } from './MenuButton';
// Styling
import { StyledNavbar } from './navbar-styling';

export enum MenuDisplay {
  NONE = 'none',
  BLOCK = 'block',
}

export const Navbar: FC = (): JSX.Element => {
  const [display, setDisplay] = useState<MenuDisplay>(MenuDisplay.NONE);

  return (
    <StyledNavbar data-testid={'navbar'}>
      <Logo />
      <LinkList display={display} setDisplay={setDisplay} />
      <ThemeToggle />
      <LanguageToggle />
      <MenuButton display={display} setDisplay={setDisplay} />
    </StyledNavbar>
  );
};
