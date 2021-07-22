import { FC, useState, useEffect } from 'react';
// Components
import { Logo } from './Logo';
import { LinkList } from './LinkList';
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  return (
    <StyledNavbar data-testid={'navbar'}>
      <Logo />
      {width > 768 ? (
        <FlexLinkList />
      ) : (
        <LinkList display={display} setDisplay={setDisplay} />
      )}
      <ThemeToggle />
      <LanguageToggle />
      <MenuButton display={display} setDisplay={setDisplay} />
    </StyledNavbar>
  );
};
