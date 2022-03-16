import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { ThemeProps } from '../../features/themetoggle/themeToggleSlice';
import { ThemeToggle } from './ThemeToggle';
import { darkTheme, lightTheme } from '../../createGlobalStyle';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing theme toggle', () => {
  test('theme toggle rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );
    expect(queryByTestId('themetoggle')).toBeInTheDocument();
  });
  test('theme toggle changing theme correctly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );
    let state: ThemeProps = store.getState().themeToggle.theme;
    expect(state).toEqual(lightTheme);
    userEvent.click(queryByTestId('themetoggle') as HTMLElement);
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(darkTheme);
    expect(queryByTestId('themetoggle')).toBeChecked();
    userEvent.click(queryByTestId('themetoggle') as HTMLElement);
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(lightTheme);
    expect(queryByTestId('themetoggle')).not.toBeChecked();
  });
});
