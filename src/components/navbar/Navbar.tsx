import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_MENU_DISPLAY_NONE,
  SET_MENU_DISPLAY_BLOCK,
  menuToggleSelector,
} from '../../features/menutoggle/menuToggleSlice';
// Styling
import { StyledNavbar, StyledLogo, StyledMenuButton } from './navbar-styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import LinkList from './LinkList';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const display = useSelector(menuToggleSelector);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (display === 'none') dispatch(SET_MENU_DISPLAY_BLOCK());
    else dispatch(SET_MENU_DISPLAY_NONE());
  };

  // Both of those FontAwesome need to be fixedWidth otherwise there will be weird clipping
  return (
    <StyledNavbar>
      <StyledLogo>KK</StyledLogo>
      <StyledMenuButton onClick={clickHandler}>
        {display === 'none' ? (
          <FontAwesomeIcon icon="bars" fixedWidth></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon="times" fixedWidth></FontAwesomeIcon>
        )}
      </StyledMenuButton>
      <LanguageToggle></LanguageToggle>
      <LinkList></LinkList>
      <ThemeToggle></ThemeToggle>
    </StyledNavbar>
  );
};

export default Navbar;
