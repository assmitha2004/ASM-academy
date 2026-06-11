import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ManageCountries from "../pages/admin/ManageCountries";

// Lazy Pages
const Home = lazy(() => import("@/pages/Home"));
const ClassesPage = lazy(() => import("@/pages/ClassesPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Admin
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const ManageClasses = lazy(() => import("@/pages/admin/ManageClasses"));
const ManageBookings = lazy(() => import("@/pages/admin/ManageBookings"));
const ManageMedia = lazy(() => import("@/pages/admin/ManageMedia"));
const ManageFAQ = lazy(() => import("@/pages/admin/ManageFAQ"));

const AdminRoute = lazy(() => import("./AdminRoute"));

const PageLoader = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="h-14 w-14 rounded-full border-2 border-gold-400 border-t-transparent animate-spin" />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/classes" element={<ManageClasses />} />
          <Route path="/admin/bookings" element={<ManageBookings />} />
          <Route path="/admin/media" element={<ManageMedia />} />
          <Route path="/admin/faq" element={<ManageFAQ />} />
          <Route path="/admin/countries" element={<ManageCountries />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;