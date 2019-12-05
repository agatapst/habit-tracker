import { NotifyError } from '.';

describe('Error notification toast', () => {
  test('renders without error with an error text', () => {
    const errorText = 'This is error.';
    NotifyError(errorText);
  });
});
