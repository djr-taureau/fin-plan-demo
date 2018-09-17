/**
 * Returns a API Error Object
 */
export const getApiError = () => Error(`Error calling Permissions API.`);

export const getApiItemCreationError = () => Error('Error creating new Permission');