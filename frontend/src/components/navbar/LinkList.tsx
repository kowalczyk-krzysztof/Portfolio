import React, { FC, useRef, useEffect, Dispatch, SetStateAction } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Components
import { MenuDisplay } from './Navbar';
// Styling
import { StyledLinks, StyledLink } from './navbar-styling';
// Variables
import { home, about, contact } from '../../App';

export interface LinkListProps {
  display: MenuDisplay;
  setDisplay: Dispatch<SetStateAction<MenuDisplay>>;
}

const LinkList: FC<LinkListProps> = ({ display, setDisplay }): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const { navbarAbout, navbarContact, navbarHome } = localization;

  /* My previous method of closing menu on clicking away had a big drawback - rapid clicking links wouldn't work. 
    So now I add a reference to the dropdown menu container and an event listener to document. If ref.current doesn't contain the component then close the menu.
  */

  useEffect(() => {
    document.addEventListener('mousedown', clickAway);
  });
  const ref = useRef<HTMLDivElement>(null);

  const clickAway = (e: MouseEvent): void => {
    if (display === MenuDisplay.NONE) return;
    if (ref.current && !ref.current.contains(e.target as Node))
      setDisplay(MenuDisplay.NONE);

    return document.removeEventListener('mousedown', clickAway);
  };
  // Need this so menu gets closed after redirecting
  const closeMenuWhenRedirected = (): void => {
    if (display === MenuDisplay.BLOCK) setDisplay(MenuDisplay.NONE);
  };

  return (
    <StyledLinks display={display} ref={ref}>
      <StyledLink
        to={home}
        exact={true}
        activeClassName="active"
        onClick={closeMenuWhenRedirected}
      >
        {navbarHome}
      </StyledLink>
      <StyledLink
        to={about}
        activeClassName="active"
        onClick={closeMenuWhenRedirected}
      >
        {navbarAbout}
      </StyledLink>
      <StyledLink
        to={contact}
        activeClassName="active"
        onClick={closeMenuWhenRedirected}
      >
        {navbarContact}
      </StyledLink>
    </StyledLinks>
  );
};

export default LinkList;
