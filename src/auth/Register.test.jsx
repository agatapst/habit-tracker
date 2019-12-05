import firebase from 'firebase/app';
import { MockFirebase } from '../test/helpers/firebase';
import { RegisterView } from '../test/views/RegisterView';

describe('Registration form', () => {
  let view;
  let authApi;

  beforeEach(() => {
    MockFirebase.initializeApp;
    authApi = MockFirebase;
    view = RegisterView.render({ auth: authApi });
  });

  test("doesn't submit form when not filled", async () => {
    expect(view.submitButton.isDisabled).toBe(true);
    await view.submitForm();
    expect(authApi.register).not.toHaveBeenCalled();
  });
});
