import React from "react";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../types/notification";
import { formatDistanceToNow } from "date-fns";
import { zhTW } from "date-fns/locale";

interface Props {
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const NotificationList: React.FC<Props> = ({
  notifications,
  onMarkAsRead,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleClick = async (notification: Notification) => {
    if (!notification.read) {
      await onMarkAsRead(notification._id);
    }

    if (notification.relatedId) {
      switch (notification.type) {
        case "match":
          navigate(`/seller/matches/${notification.relatedId}`);
          break;
        case "status":
          navigate(`/products/${notification.relatedId}`);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="divide-y divide-gray-200">
      {notifications.length === 0 ? (
        <div className="py-4 text-center text-gray-500">沒有通知</div>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification._id}
            className={`p-4 cursor-pointer hover:bg-gray-50 ${
              !notification.read ? "bg-blue-50" : ""
            }`}
            onClick={() => handleClick(notification)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {notification.content}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatDistanceToNow(new Date(notification.createdAt), {
                    addSuffix: true,
                    locale: zhTW,
                  })}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(notification._id);
                }}
                className="ml-4 text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;
