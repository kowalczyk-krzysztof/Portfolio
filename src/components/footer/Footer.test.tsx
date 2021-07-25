// Testing libraries
import { render } from '@testing-library/react';
// React router
import { MemoryRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
// Components
import { Footer } from './Footer';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing footer', () => {
  test('footer rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('footer')).toBeInTheDocument();
  });
});
