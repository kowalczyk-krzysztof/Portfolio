import { FC, useState } from 'react';
// Components
import { Logo } from './Logo';
import { LinksDropdown } from './LinksDropdown';
import { FlexLinkList } from './FlexLinkList';
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
    <>
      <StyledNavbar data-testid={'navbar'}>
        <Logo />
        <FlexLinkList />
        <ThemeToggle />
        <LanguageToggle />
        <MenuButton display={display} setDisplay={setDisplay} />
      </StyledNavbar>
      <LinksDropdown display={display} setDisplay={setDisplay} />
    </>
  );
};
