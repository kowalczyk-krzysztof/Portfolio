import React, { FC, useEffect, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_MENU_DISPLAY_NONE,
  SET_MENU_DISPLAY_BLOCK,
  menuToggleSelector,
  MenuDisplay,
} from '../../features/menutoggle/menuToggleSlice';
// Styling
import {
  StyledMenuButton,
  StyledMenu,
  MenuIconWrapper,
} from './navbar-styling';
import { Bars, Times } from '@styled-icons/fa-solid';

/* How to useRef with TypeScript
const inputRef = useRef<HTMLDivElement>(null);
if (inputRef && inputRef.current) {
   console.log(inputRef.current.offsetTop);
}
*/
const MenuButton: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const display: MenuDisplay = useSelector(menuToggleSelector);

  useEffect(() => {
    if (display === MenuDisplay.BLOCK)
      // Collapse dropdown on scroll, adding onScroll to a component won't work because I need to check the body, not the component itself, so I need to add an event listener
      return document.addEventListener('scroll', scrollAway, { once: true });
  });

  // Toggling visibility of dropdown menu
  const clickHandler = (): void => {
    if (display === MenuDisplay.NONE) dispatch(SET_MENU_DISPLAY_BLOCK());
    else dispatch(SET_MENU_DISPLAY_NONE());
  };

  // I need to return document.removeEventListener('scroll', scrollAway); for all the other closing methods to stop this triggering if menu has been already closed
  const scrollAway = (): void => {
    dispatch(SET_MENU_DISPLAY_NONE());
  };

  // Esc key handler
  const pressEsc = (e: KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault(); // has to be done or otherwise space would trigger the button
    if (e.key === `Escape`) dispatch(SET_MENU_DISPLAY_NONE());

    return document.removeEventListener('scroll', scrollAway);
  };

  /* Collapsing dropdown menu on clicking away (onBlur) - dropdown menu consists of links and onBlur triggers before link's onClick, because of that there has to be a timeout or clicking on links would not work  */
  const clickAway = (): void => {
    if (display === MenuDisplay.NONE) return; // if dropdown is already collapsed, clickAway won't triger

    setTimeout(() => {
      dispatch(SET_MENU_DISPLAY_NONE());
    }, 100);
    return document.removeEventListener('scroll', scrollAway);
  };

  // Both of those icons need to be same size otherwise there will be weird clipping
  return (
    <StyledMenu>
      <StyledMenuButton
        onClick={clickHandler}
        onBlur={clickAway}
        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => pressEsc(e)}
      >
        {display === MenuDisplay.NONE ? (
          <MenuIconWrapper>
            <Bars size="32" />
          </MenuIconWrapper>
        ) : (
          <MenuIconWrapper>
            <Times size="32" />
          </MenuIconWrapper>
        )}
      </StyledMenuButton>
    </StyledMenu>
  );
};

export default MenuButton;
