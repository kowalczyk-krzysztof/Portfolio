import React, { FC, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_MENU_DISPLAY_NONE,
  SET_MENU_DISPLAY_BLOCK,
  menuToggleSelector,
} from '../../features/menutoggle/menuToggleSlice';
// Styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledMenuButton, StyledMenu } from './navbar-styling';

const MenuButton: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const display = useSelector(menuToggleSelector);
  // Toggling visibility of dropdown menu
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (display === 'none') dispatch(SET_MENU_DISPLAY_BLOCK());
    else dispatch(SET_MENU_DISPLAY_NONE());
  };

  useEffect(() => {
    // If dropdown menu is visible then add a scroll eventListener that will close the menu
    if (display === 'block')
      window.addEventListener('scroll', scrollAway, { once: true });
    else return;
  });

  const scrollAway = () => {
    dispatch(SET_MENU_DISPLAY_NONE());
    console.log('Scrolled away');
  };

  /* Collapsing dropdown on clicking away - dropdown menu consists of links and onBlur triggers before link's onClick, because of that there has to be a timeout or clicking on links would not work  */
  const clickAway = (e: React.FocusEvent) => {
    if (display === 'none') return; // if dropdown is already collapsed, clickAway won't triger
    console.log('Clicked away');
    // console.log(e.relatedTarget);

    setTimeout(() => {
      dispatch(SET_MENU_DISPLAY_NONE());
    }, 100);

    window.removeEventListener('scroll', scrollAway); // this has to be done or otherwise scrollAway would trigger after clickAway
  };

  // Both of those FontAwesome icons need to be fixedWidth otherwise there will be weird clipping
  return (
    <StyledMenu>
      <StyledMenuButton onClick={clickHandler} onBlur={clickAway}>
        {display === 'none' ? (
          <FontAwesomeIcon icon="bars" fixedWidth></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon="times" fixedWidth></FontAwesomeIcon>
        )}
      </StyledMenuButton>
    </StyledMenu>
  );
};

export default MenuButton;
