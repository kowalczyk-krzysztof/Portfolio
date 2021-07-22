import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LanguageToggle } from './LanguageToggle';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing language toggle buttons container', () => {
  test('language toggle container rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <LanguageToggle />
      </Provider>
    );
    expect(queryByTestId('languagetoggle')).toBeInTheDocument();
  });
});
