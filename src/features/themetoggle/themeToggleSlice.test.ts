// Redux
import { createTestStore } from '../../app/store';
import { ThemeNames, darkTheme, lightTheme } from '../../createGlobalStyle';
import { SET_THEME, ThemeProps } from './themeToggleSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing theme toggle slice', () => {
  test('setting theme', () => {
    let state: ThemeProps = store.getState().themeToggle.theme;
    expect(state).toEqual(lightTheme);
    store.dispatch(SET_THEME(ThemeNames.DARK));
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(darkTheme);
    store.dispatch(SET_THEME(ThemeNames.LIGHT));
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(lightTheme);
  });
});
