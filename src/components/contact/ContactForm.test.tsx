// Testing libraries
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// React router
import { MemoryRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
// Components
import { ContactForm } from './ContactForm';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing contact form', () => {
  test('contact form rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactForm />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contactform')).toBeInTheDocument();
  });
  test('contact form name field showing text', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactForm />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contactform')).toBeInTheDocument();

    userEvent.type(
      screen.queryByTestId('contactformname') as HTMLElement,
      'Hello!'
    );
    expect(screen.queryByTestId('contactformname') as HTMLElement).toHaveValue(
      'Hello!'
    );
  });
  test('contact form email field showing text', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactForm />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contactform')).toBeInTheDocument();

    userEvent.type(
      screen.queryByTestId('contactformemail') as HTMLElement,
      'john@smith.eu'
    );
    expect(screen.queryByTestId('contactformemail') as HTMLElement).toHaveValue(
      'john@smith.eu'
    );
  });
  test('contact form message field showing text', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactForm />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contactform')).toBeInTheDocument();

    userEvent.type(
      screen.queryByTestId('contactformemessage') as HTMLElement,
      'Hello!'
    );
    expect(
      screen.queryByTestId('contactformemessage') as HTMLElement
    ).toHaveValue('Hello!');
  });
});
