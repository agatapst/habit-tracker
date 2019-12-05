import get from 'lodash/get';

export function getFormikErrors(name, form) {
  const fieldTouched = get(form.touched, name);
  const fieldError = get(form.errors, name);
  const errorId = fieldTouched && fieldError ? fieldError : null;
  const hasError = !!errorId;

  return {
    fieldError,
    hasError,
    errorId
  };
}
