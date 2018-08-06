export type ActivityLogItemCollection = Array<ActivityLogItem>;
export interface ActivityLogItem {
	id: number;
	type: string;
	message: string;
	source: string;
	occurence: Date;
	subject: string;
	action: object;
}
