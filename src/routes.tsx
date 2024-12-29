import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/detail/ProductDetailPage";
import AboutPage from "./pages/about/AboutPage";
import GuidePage from "./pages/guide/GuidePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import SellerLayout from "./pages/seller/components/SellerLayout";
import ProductListPage from "./pages/seller/products/ProductListPage";
import CreateProductPage from "./pages/seller/products/CreateProductPage";
import EditProductPage from "./pages/seller/products/EditProductPage";
import MatchListPage from "./pages/seller/matches/MatchListPage";
import MatchDetailPage from "./pages/seller/matches/MatchDetailPage";
import ErrorPage from "./pages/error/ErrorPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="guide" element={<GuidePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="seller"
          element={
            <ProtectedRoute roles={["seller"]}>
              <SellerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/new" element={<CreateProductPage />} />
          <Route path="products/:id/edit" element={<EditProductPage />} />
          <Route path="matches" element={<MatchListPage />} />
          <Route path="matches/:id" element={<MatchDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
