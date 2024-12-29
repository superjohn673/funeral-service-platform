import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { notificationService } from "../../services/notification";
import { NotificationCount } from "../../types/notification";

interface Props {
  onClick: () => void;
}

const NotificationIcon: React.FC<Props> = ({ onClick }) => {
  const [count, setCount] = useState<NotificationCount>({
    total: 0,
    unread: 0,
  });

  useEffect(() => {
    fetchNotificationCount();
  }, []);

  const fetchNotificationCount = async () => {
    try {
      const data = await notificationService.getNotificationCount();
      setCount(data);
    } catch (error) {
      console.error("Failed to fetch notification count:", error);
    }
  };

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <Bell size={20} />
      {count.unread > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
          {count.unread}
        </span>
      )}
    </button>
  );
};

export default NotificationIcon;
