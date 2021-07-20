import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { Logo } from './Logo';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing logo', () => {
  test('logo rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Logo />
      </Provider>
    );
    expect(queryByTestId('logo')).toBeInTheDocument();
  });
});
