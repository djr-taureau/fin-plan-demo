export type NotificationsItemCollection = Array<NotificationsItem>;

export interface NotificationsItem {
	GUID: string;
	occurence: Date;
	message: string;
	status: string;
	dismissed: boolean;
	target: object;
	source: object;
	event: object;
}
