import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LinkList } from './LinkList';
import { MenuDisplay } from './Navbar';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing link list', () => {
  test('testing link list rendering at < 768 width with display === MenuDisplay.NONE', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <LinkList display={MenuDisplay.NONE} setDisplay={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('linklist')).toHaveStyle('display: none');
  });
  test('testing link list rendering at < 768 width with display === MenuDisplay.BLOCK', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <LinkList display={MenuDisplay.BLOCK} setDisplay={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('linklist')).toHaveStyle('display: block');
  });
});
