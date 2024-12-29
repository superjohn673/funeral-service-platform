export type NotificationType = "match" | "system" | "status";

export interface Notification {
  _id: string;
  userId: string;
  type: NotificationType;
  title: string;
  content: string;
  read: boolean;
  relatedId?: string;
  createdAt: string;
}

export interface NotificationCount {
  total: number;
  unread: number;
}
