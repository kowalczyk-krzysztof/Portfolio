import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { EmailSentNotification } from './EmailSentNotification';
import { EmailSendingStyle } from './ContactForm';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing email sent notification', () => {
  test('testing email sent notification rendering properly when isEmailSent === EmailSendingStyle.LOADING', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <EmailSentNotification isEmailSent={EmailSendingStyle.LOADING} />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('emailsentnotification')).toBeInTheDocument();
    expect(queryByTestId('emailsentnotification')).toHaveTextContent(
      'Sending email...'
    );
  });
  test('testing email sent notification rendering properly when isEmailSent === EmailSendingStyle.SUCCESS', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <EmailSentNotification isEmailSent={EmailSendingStyle.SUCCESS} />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('emailsentnotification')).toBeInTheDocument();
    expect(queryByTestId('emailsentnotification')).toHaveTextContent(
      'Email was sent'
    );
  });
  test('testing email sent notification rendering properly when isEmailSent === EmailSendingStyle.FAILURE', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <EmailSentNotification isEmailSent={EmailSendingStyle.FAILURE} />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('emailsentnotification')).toBeInTheDocument();
    expect(queryByTestId('emailsentnotification')).toHaveTextContent(
      'Email could not be sent'
    );
  });
});
