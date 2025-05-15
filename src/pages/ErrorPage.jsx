import React from "react";
import { Link, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200">
      <Helmet>
        <title>Dr.Hub | Error</title>
      </Helmet>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-63px)]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="text-xl mt-4 text-gray-700">Oops! Page Not Found.</p>
          <p className="text-sm text-gray-500 my-2">
            The page you're looking for might have been moved or deleted.
          </p>
          <Link
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 btn bg-neutral-700 text-white rounded-lg hover:bg-neutral-900"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
