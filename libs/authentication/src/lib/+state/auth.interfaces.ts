export interface User {
	id: string;
	displayName: string;
	roles: Array<string>;
	permissions: Array<string>;
}

// tslint:disable-next-line
export interface Auth extends User {}

export interface AuthState {
	readonly auth: User;
}
