import React, { FC, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Locale,
  localizationSelector,
} from '../../features/localization/localizationSlice';
import {
  menuToggleSelector,
  MenuDisplay,
  SET_MENU_DISPLAY_NONE,
} from '../../features/menutoggle/menuToggleSlice';
// Styling
import { StyledLinks, StyledLink } from './navbar-styling';

const LinkList: FC = (): JSX.Element => {
  const dispatch = useDispatch();
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

  /* My previous method of closing menu on clicking away had a big drawback - rapid clicking links wouldn't work. 
    So now I add a reference to the dropdown menu container and an event listener to document. If ref.current doesn't contain the component then close the menu.
  */

  useEffect(() => {
    document.addEventListener('mousedown', clickAway);
  });
  const ref = useRef<HTMLDivElement>(null);

  const clickAway = (e: MouseEvent) => {
    if (display === MenuDisplay.NONE) return;
    if (ref.current && !ref.current.contains(e.target as Node))
      dispatch(SET_MENU_DISPLAY_NONE());
  };
  // Need this so menu gets closed after redirecting
  const closeMenuWhenRedirected = () => {
    dispatch(SET_MENU_DISPLAY_NONE());
  };

  return (
    <StyledLinks display={display} ref={ref}>
      <StyledLink to="/" onClick={closeMenuWhenRedirected}>
        {navbarHome}
      </StyledLink>
      <StyledLink to="about" onClick={closeMenuWhenRedirected}>
        {navbarAbout}
      </StyledLink>
      <StyledLink to="contact" onClick={closeMenuWhenRedirected}>
        {navbarContact}
      </StyledLink>
    </StyledLinks>
  );
};

export default LinkList;
