import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./store";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/detail/ProductDetailPage";
import SellerLayout from "./pages/seller/components/SellerLayout";
import ProductListPage from "./pages/seller/products/ProductListPage";
import CreateProductPage from "./pages/seller/products/CreateProductPage";
import EditProductPage from "./pages/seller/products/EditProductPage";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

// 示例受保護的頁面
const SellerDashboard = () => <div>賣家後台</div>;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* 公開路由 */}
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="guide" element={<GuidePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />

              {/* 受保護的路由 */}
              <Route
                path="seller/*"
                element={
                  <ProtectedRoute roles={["seller"]}>
                    <SellerDashboard />
                  </ProtectedRoute>
                }
              />
            </Route>
            {/* 賣家後台相關路由*/}
            <Route
              path="/seller"
              element={
                <ProtectedRoute roles={["seller"]}>
                  <SellerLayout />
                </ProtectedRoute>
              }
            >
              <Route path="products" element={<ProductListPage />} />
              <Route path="products/new" element={<CreateProductPage />} />
              <Route path="products/:id/edit" element={<EditProductPage />} />
            </Route>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
