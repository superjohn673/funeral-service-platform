import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatRoom from "../../../components/match/ChatRoom";
import { Match } from "../../../types/match";
import { matchService } from "../../../services/match";

const MatchDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMatch();
    }
  }, [id]);

  const fetchMatch = async () => {
    if (!id) return;

    try {
      const data = await matchService.getMatch(id);
      setMatch(data);
    } catch (error) {
      console.error("Failed to fetch match:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!id) return;

    try {
      await matchService.sendMessage(id, content);
      await fetchMatch(); // 重新獲取訊息列表
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleStatusChange = async (status: Match["status"]) => {
    if (!id) return;

    try {
      await matchService.updateMatchStatus(id, status);
      await fetchMatch();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-600 border-r-transparent"></div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">找不到媒合記錄</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左側資訊 */}
        <div className="lg:col-span-1 space-y-6">
          {/* 商品資訊 */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">商品資訊</h3>
              <div className="mt-4">
                <img
                  src={match.product.images[0] || "/api/placeholder/400/300"}
                  alt={match.product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="mt-4 font-medium text-gray-900">
                  {match.product.title}
                </h4>
                <p className="mt-1 text-gray-500">
                  NT$ {match.product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* 買家資訊 */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">買家資訊</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">姓名</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {match.buyer.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">電話</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {match.buyer.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    電子郵件
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {match.buyer.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 狀態管理 */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">狀態管理</h3>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => handleStatusChange("active")}
                  disabled={match.status === "active"}
                  className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                >
                  開始媒合
                </button>
                <button
                  onClick={() => handleStatusChange("completed")}
                  disabled={match.status === "completed"}
                  className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400"
                >
                  完成媒合
                </button>
                <button
                  onClick={() => handleStatusChange("cancelled")}
                  disabled={match.status === "cancelled"}
                  className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400"
                >
                  取消媒合
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右側聊天室 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow h-full">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">聊天室</h3>
              <div className="mt-4">
                <ChatRoom
                  messages={match.messages}
                  onSendMessage={handleSendMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailPage;
