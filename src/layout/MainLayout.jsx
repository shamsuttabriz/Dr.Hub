import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Suspense fallback={<p>Loading, Please wait...</p>}>
        <div className="min-h-[calc(100vh-280px)]">
          <div className="lg:w-[1240px] 2xl:w-[1520px] mx-auto">
            <Outlet />
          </div>
        </div>
      </Suspense>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default MainLayout;
