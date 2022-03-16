import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { MenuButton } from './MenuButton';
import { MenuDisplay } from './Navbar';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing menu toggle buttons', () => {
  test('testing menu button rendering', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MenuButton display={MenuDisplay.NONE} setDisplay={jest.fn()} />
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('menubutton')).toBeInTheDocument();
  });
  test(`testing Bars component - queryByTestId('openmenu') rendering correctly `, () => {
    // This is done because window.innerWidth property is readonly

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MenuButton display={MenuDisplay.NONE} setDisplay={jest.fn()} />
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('menubutton')).toBeInTheDocument();
    expect(queryByTestId('openmenu')).toBeInTheDocument();
  });
  test(`testing Times component - queryByTestId('closemenu') rendering correctly `, () => {
    // This is done because window.innerWidth property is readonly

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MenuButton display={MenuDisplay.BLOCK} setDisplay={jest.fn()} />
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('menubutton')).toBeInTheDocument();
    expect(queryByTestId('closemenu')).toBeInTheDocument();
  });
});
