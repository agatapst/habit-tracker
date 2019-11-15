import { fireEvent, getByPlaceholderText } from '@testing-library/react';

export class InputElement {
constructor ({ container, ...props }) {
    if ('name' in props) {
      const $element = container.querySelector(`input[name="${props.name}"]`);
      if (!$element) throw new Error('input element not found');
      this.element = $element
    } else {
      this.element = getByPlaceholderText(container, props.placeholder) 
    }
  }

  click() {
    fireEvent.click(this.element);
  }

  fill(value) {
    fireEvent.change(this.element, { target: { value } });
  }
}

