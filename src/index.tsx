import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// 只在生產環境初始化 Sentry
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "your-sentry-dsn", // 請替換成您的 Sentry DSN
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    // 可以添加更多配置
    environment: process.env.NODE_ENV,
    beforeSend(event) {
      // 在這裡可以過濾不想要的錯誤報告
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 使用 Sentry 的錯誤邊界包裝 App 組件
const AppWithSentry =
  process.env.NODE_ENV === "production"
    ? Sentry.withErrorBoundary(App, {
        fallback: (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                發生了一些錯誤
              </h2>
              <p className="mt-2 text-gray-600">
                我們已經記錄了這個問題，並會盡快修復
              </p>
            </div>
          </div>
        ),
      })
    : App;

root.render(
  <React.StrictMode>
    <AppWithSentry />
  </React.StrictMode>
);
