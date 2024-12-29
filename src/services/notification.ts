import axios from "../configs/axios";
import { Notification, NotificationCount } from "../types/notification";

export const notificationService = {
  getNotifications: async (): Promise<Notification[]> => {
    const response = await axios.get("/notifications");
    return response.data;
  },

  getNotificationCount: async (): Promise<NotificationCount> => {
    const response = await axios.get("/notifications/count");
    return response.data;
  },

  markAsRead: async (id: string): Promise<void> => {
    await axios.patch(`/notifications/${id}/read`);
  },

  markAllAsRead: async (): Promise<void> => {
    await axios.post("/notifications/read-all");
  },

  deleteNotification: async (id: string): Promise<void> => {
    await axios.delete(`/notifications/${id}`);
  },
};
