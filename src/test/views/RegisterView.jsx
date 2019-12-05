import React from 'react';
import { wait } from '@testing-library/react';
import { route } from '../../config/routes';
import { Register } from '../../auth/Register';
import { InputElement } from '../elements/InputElement';
import { ButtonElement } from '../elements/ButtonElement';
import { renderApp } from '../../test/helpers/renderApp';

export class RegisterView {
  static render(api) {
    const result = renderApp(<Register />, {
      route: route.signUp(),
      api
    });

    return new RegisterView(result.container, result.history);
  }

  get pathname() {
    return this.history.location.pathname;
  }

  fillForm({
    name = 'testname',
    email = 'test@test.com',
    password = 'test12345678',
    passwordConfirmation = 'test12345678'
  } = {}) {
    this.nameInput.fill(name);
    this.emailInput.fill(email);
    this.passwordInput.fill(password);
    this.passwordConfirmationInput.fill(passwordConfirmation);
  }

  get nameInput() {
    return new InputElement({
      container: this.container,
      name: 'name'
    });
  }

  get emailInput() {
    return new InputElement({
      container: this.container,
      name: 'email'
    });
  }

  get passwordInput() {
    return new InputElement({
      container: this.container,
      name: 'password'
    });
  }

  get passwordConfirmationInput() {
    return new InputElement({
      container: this.container,
      name: 'passwordConfirmation'
    });
  }

  get submitButton() {
    return new ButtonElement({
      container: this.container,
      text: 'Register'
    });
  }

  submitForm() {
    this.submitButton.click();
    return wait();
  }
}
