import axios from 'axios';

import { sendEmail } from './sendEmail';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData', () => {
  test('sends email', async () => {
    const response = {
      data: {
        status: 'Sucess',
      },
    };
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(response));
    await expect(sendEmail('john', 'smith@eu.pl', 'Hey')).resolves.toEqual(
      response
    );
  });
});
