import { HttpRequest } from './http-request';
import { HttpResponse } from './http-response';
import { ILogger } from './logger';

/**
 * Represents an HTTP context.
 */
export interface Context {
	invocationId?: string;
	executionContext?: any;
	bindings?: any;
	req?: HttpRequest;
	bindingData?: any;
	res?: HttpResponse;

	/**
	 * Allows writing to the streaming console logs.
	 */
	log?: ILogger;

	/**
	 * Creates a new bound function.
	 */
	bind?(...args: Array<any>): void;

	/**
	 * Informs the runtime that the function execution has finished.
	 */
	done(err?: Error | undefined, propertyBag?: { [key: string]: any }): void;
}
