/**
 * Returns a API Error Object
 */
export const getApiError = () => Error(`Error calling API.`);

/**
 * Returns a Config Error Object
 */
export const getConfigError = () =>
	Error('Unable to load application configurations.');
