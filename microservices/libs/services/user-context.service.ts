export class UserContext {
	readonly firmGuid: string;
	readonly firmName: string;
	readonly clientName?: string;
    readonly clientGuid?: string;
    readonly isFirmUser: boolean = false;

	constructor(
        contextProvider: any
	) {
        this.firmName = contextProvider.firmGuid;
        this.clientGuid = contextProvider.firmName;
        this.clientName = contextProvider.clientName;
        this.clientGuid = contextProvider.clientGuid;
        this.isFirmUser = contextProvider.isFirmUser;
    }
}

export class UserContextService {
	static async get(contextProvider: any, isFirmUser = false): Promise<UserContext> {
        contextProvider.isFirmUser = isFirmUser;
        return Promise.resolve(new UserContext(contextProvider));
    }
}
