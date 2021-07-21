import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { Copyright } from './Copyright';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing copyright', () => {
  test('copyright container rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Copyright />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('copyright')).toBeInTheDocument();
  });
  test('copyright having correct text', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Copyright />
        </MemoryRouter>
      </Provider>
    );
    const year: HTMLElement | null = screen.queryByTestId('copyrighttext');
    const yearNow: number = new Date().getFullYear();
    expect(queryByTestId('copyright')).toBeInTheDocument();
    expect(year).toHaveTextContent(yearNow.toString());
  });
});
