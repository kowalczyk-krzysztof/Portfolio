import React, { FC, useRef, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import {
  menuToggleSelector,
  MenuDisplay,
  SET_MENU_DISPLAY_NONE,
} from '../../features/menutoggle/menuToggleSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledLinks, StyledLink } from './navbar-styling';
// Variables
import { home, about, contact } from '../../App';

const LinkList: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const localization: Locale = useSelector(localizationSelector);
  const display: MenuDisplay = useSelector(menuToggleSelector);
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
      dispatch(SET_MENU_DISPLAY_NONE());

    return document.removeEventListener('mousedown', clickAway);
  };
  // Need this so menu gets closed after redirecting
  const closeMenuWhenRedirected = () => {
    if (display === MenuDisplay.BLOCK) dispatch(SET_MENU_DISPLAY_NONE());
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
