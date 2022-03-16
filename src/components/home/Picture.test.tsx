import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { Picture } from './Picture';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing picture', () => {
  test('picture rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Picture />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('homepicture')).toBeInTheDocument();
  });
});
