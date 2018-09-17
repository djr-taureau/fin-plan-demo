/**
 * Returns a API Error Object
 */
export const getApiError = () => Error(`Error calling Clients API.`);

export const getApiItemCreationError = () => Error('Error creating new Client');