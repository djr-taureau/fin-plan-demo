export function getApiError(): Error {
    return Error(`Error calling API.`);
  }

export const getConfigError = () =>
  Error('Unable to load application configurations.');