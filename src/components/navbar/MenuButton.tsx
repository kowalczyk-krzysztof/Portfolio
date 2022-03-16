import { FC, useEffect, KeyboardEvent, Dispatch, SetStateAction } from 'react';
import { MenuDisplay } from './Navbar';
import { StyledMenu, MenuIconWrapper } from './navbar-styling';
import { bigIcon } from '../../createGlobalStyle';
import { Bars, Times } from '@styled-icons/fa-solid';

type Props = {
  readonly display: MenuDisplay;
  readonly setDisplay: Dispatch<SetStateAction<MenuDisplay>>;
};

export const MenuButton: FC<Props> = ({ display, setDisplay }) => {
  useEffect(() => {
    if (display === MenuDisplay.BLOCK)
      // Collapse dropdown on scroll, adding onScroll to a component won't work because I need to check the body, not the component itself, so I need to add an event listener
      return document.addEventListener('scroll', scrollAway, { once: true });
  });

  const clickHandler = () => {
    if (display === MenuDisplay.NONE) setDisplay(MenuDisplay.BLOCK);
    else setDisplay(MenuDisplay.NONE);
  };

  const scrollAway = () => {
    setDisplay(MenuDisplay.NONE);
  };

  const pressEsc = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault(); // has to be done or otherwise space would trigger the button
    if (e.key === `Escape`) {
      setDisplay(MenuDisplay.NONE);
    }
    return document.removeEventListener('scroll', scrollAway);
  };

  return (
    <StyledMenu>
      <button
        onClick={clickHandler}
        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => pressEsc(e)}
        data-testid={'menubutton'}
      >
        {display === MenuDisplay.NONE ? (
          <MenuIconWrapper>
            <Bars
              size={bigIcon}
              title="Open menu"
              aria-label="Open menu"
              data-testid={'openmenu'}
            />
          </MenuIconWrapper>
        ) : (
          <MenuIconWrapper>
            <Times
              size={bigIcon}
              title="Close menu"
              aria-label="Close menu"
              data-testid={'closemenu'}
            />
          </MenuIconWrapper>
        )}
      </button>
    </StyledMenu>
  );
};
