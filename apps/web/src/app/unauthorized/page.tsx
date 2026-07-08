"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { MessageCircleWarning } from "lucide-react";

import { pagesInfo } from "@/utils/pages-info.utils";
import { handleLogoutSession } from "@/utils/local.storage";

export default function UnauthorizedPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.warn("Unauthorized access attempt detected.");
  }, []);

  const onHandleNavigateToDashboard = () => {
    router.replace(pagesInfo.dashboard.path);
  };

  const handleLoginRedirect = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      handleLogoutSession();
    } catch (error: any) {
      console.error(
        error?.data?.message || error?.data?.error || error?.message || "Error logging out user"
      );
      toast.error(
        error?.data?.message || error?.data?.error || error?.message || "Error logging out user"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-gray-200">
        <div className="text-red-500 mb-4">
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M12 5c1.657 0 3 1.343 3 3v2c0 1.657-1.343 3-3 3s-3-1.343-3-3V8c0-1.657 1.343-3 3-3zM6.938 17h10.124M4 21h16"
              />
            </svg> */}
          <MessageCircleWarning fontSize="large" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Access Denied</h1>
        <p className="mt-2 text-gray-600 text-sm">
          You don’t have the necessary permissions to view this page. Please login with an
          authorized account or return to your dashboard.
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={onHandleNavigateToDashboard}
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition cursor-pointer"
          >
            {"Dashboard"}
          </button>
          <button
            onClick={handleLoginRedirect}
            className="px-5 py-2 bg-primary text-white rounded-md hover:opacity-90 transition cursor-pointer"
          >
            {"Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
