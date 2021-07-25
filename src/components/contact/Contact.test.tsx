// Testing libraries
import { render } from '@testing-library/react';
// React router
import { MemoryRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
// Components
import { Contact } from './Contact';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing contact main container', () => {
  test('contact main container rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contact')).toBeInTheDocument();
  });
});
