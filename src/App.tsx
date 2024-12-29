import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// 暫時的頁面組件
const HomePage = () => <div>首頁</div>;
const ProductsPage = () => <div>商品列表</div>;
const AboutPage = () => <div>關於我們</div>;
const GuidePage = () => <div>使用指南</div>;
const LoginPage = () => <div>登入</div>;
const RegisterPage = () => <div>註冊</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
