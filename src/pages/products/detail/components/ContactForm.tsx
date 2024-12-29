import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";

interface Props {
  productId: string;
  sellerId: string;
}

const ContactForm: React.FC<Props> = ({ productId, sellerId }) => {
  const { isAuthenticated, user } = useAuth();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      // 導向登入頁
      return;
    }

    setSending(true);
    try {
      // 發送訊息的 API 調用
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模擬 API 延遲
      setMessage("");
      // 顯示成功訊息
    } catch (error) {
      // 顯示錯誤訊息
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900">聯繫賣家</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            訊息內容
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="請輸入您想詢問的內容..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={sending || !isAuthenticated}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {!isAuthenticated ? "請先登入" : sending ? "發送中..." : "發送訊息"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
