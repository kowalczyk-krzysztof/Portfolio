import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { TechnologyIcons } from './TechnologyIcons';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing technology icons', () => {
  test('technology icons rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TechnologyIcons />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('abouticons')).toBeInTheDocument();
  });
});
