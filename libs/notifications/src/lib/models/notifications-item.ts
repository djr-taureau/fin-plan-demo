export interface NotificationsItem {
  id: number;
  type: string;
  message: string;
  source: string;
  occurence: Date;
  action: object;
  status: string;
}
