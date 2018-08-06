/**
 * Returns a function to handle errors from callbacks with
 * the supplied message
 *
 * ```
 * api.get().catch(logErrorToConsole('There was an Error'))
 * // Instead of
 * api.get().catch(error => { console.error('There was an Error', error) })
 * ```
 * @param message
 */
export const logErrorToConsole = (message: string) => (error: any) =>
	console.error(message, error);

/**
 * Returns a API Error Object
 */
export const getApiError = () => Error(`Error calling API.`);

/**
 * Returns a Config Error Object
 */
export const getConfigError = () =>
	Error('Unable to load application configurations.');
