import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./store";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

// 其他頁面組件保持不變...

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* 其他路由保持不變... */}
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
