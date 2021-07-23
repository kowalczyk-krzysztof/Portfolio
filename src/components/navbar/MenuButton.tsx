import {
  FC,
  useEffect,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
// Components
import { MenuDisplay } from './Navbar';
// Styling
import {
  StyledMenuButton,
  StyledMenu,
  MenuIconWrapper,
} from './navbar-styling';
import { bigIcon } from '../../createGlobalStyle';
import { Bars, Times } from '@styled-icons/fa-solid';

/* How to useRef with TypeScript
const inputRef = useRef<HTMLDivElement>(null);
if (inputRef && inputRef.current) {
   console.log(inputRef.current.offsetTop);
}
*/
interface MenuButtonProps {
  display: MenuDisplay;
  setDisplay: Dispatch<SetStateAction<MenuDisplay>>;
}

export const MenuButton: FC<MenuButtonProps> = ({
  display,
  setDisplay,
}): JSX.Element | null => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (display === MenuDisplay.BLOCK)
      // Collapse dropdown on scroll, adding onScroll to a component won't work because I need to check the body, not the component itself, so I need to add an event listener
      return document.addEventListener('scroll', scrollAway, { once: true });
    const handleResizeWindow = () => setWidth(window.innerWidth);

    // Rendering logic
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  // Toggling visibility of dropdown menu
  const clickHandler = (): void => {
    if (display === MenuDisplay.NONE) setDisplay(MenuDisplay.BLOCK);
    else setDisplay(MenuDisplay.NONE);
  };

  // I need to return document.removeEventListener('scroll', scrollAway); for all the other closing methods to stop this triggering if menu has been already closed
  const scrollAway = (): void => {
    setDisplay(MenuDisplay.NONE);
  };

  // Esc key handler
  const pressEsc = (e: KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault(); // has to be done or otherwise space would trigger the button
    if (e.key === `Escape`) {
      setDisplay(MenuDisplay.NONE);
    }

    return document.removeEventListener('scroll', scrollAway);
  };

  // Both of those icons need to be same size otherwise there will be weird clipping
  if (width < 768)
    return (
      <StyledMenu>
        <StyledMenuButton
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
        </StyledMenuButton>
      </StyledMenu>
    );
  else return null;
};