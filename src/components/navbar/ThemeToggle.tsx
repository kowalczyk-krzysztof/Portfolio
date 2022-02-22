import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_THEME,
  themeSelector,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';
import { StyledThemeToggle, StyledThemeToggleSlider } from './navbar-styling';
import { ThemeNames } from '../../createGlobalStyle';

export const ThemeToggle: FC = () => {
  const theme: ThemeProps = useSelector(themeSelector);
  const { name } = theme;
  const dispatch = useDispatch();

  const themeToggler = (e: MouseEvent<HTMLInputElement>): void => {
    const isChecked: boolean = e.currentTarget.checked;
    if (isChecked) dispatch(SET_THEME(ThemeNames.DARK));
    if (!isChecked) dispatch(SET_THEME(ThemeNames.LIGHT));
  };

  // This toggle check is needed so everything works properly with redux persist - IMPORTANT: has to defaultChecked NOT checked
  return (
    <StyledThemeToggle>
      {name === ThemeNames.LIGHT ? (
        <StyledThemeToggleSlider
          data-testid={'themetoggle'}
          type="checkbox"
          aria-label="Theme toggle"
          onClick={themeToggler}
        ></StyledThemeToggleSlider>
      ) : (
        <StyledThemeToggleSlider
          data-testid={'themetoggle'}
          defaultChecked
          type="checkbox"
          aria-label="Theme toggle"
          onClick={themeToggler}
        ></StyledThemeToggleSlider>
      )}
    </StyledThemeToggle>
  );
};
