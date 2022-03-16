import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { Navbar } from './Navbar';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing navbar', () => {
  test('navbar rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('navbar')).toBeInTheDocument();
  });
});
