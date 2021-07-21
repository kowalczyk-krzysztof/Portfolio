import { regexCheck } from './regexEmail';

describe('testing email check function', () => {
  test('using valid email as input', () => {
    const input: string = 'john@smith.eu';
    const result: boolean = regexCheck(input);
    expect(result).toEqual(true);
  });
  test('using invalid email as input', () => {
    const input: string = 'john@a';
    const result: boolean = regexCheck(input);
    expect(result).toEqual(false);
  });
});
