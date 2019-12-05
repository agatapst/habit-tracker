import { fireEvent, getByText } from '@testing-library/react';

export class ButtonElement {
  element;

  constructor({ container, text }) {
    this.element = getByText(container, text);
  }

  click() {
    fireEvent.click(this.element);
  }

  get text() {
    return this.element.textContent;
  }

  get isDisabled() {
    return this.element.hasAttribute('disabled');
  }
}
