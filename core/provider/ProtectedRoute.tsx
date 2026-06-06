"use client";
import { ReactNode, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";
type ProtectedPropsTypes = {
  children: ReactNode;
  role: string;
};

function ProtectedRoute({ children, role }: ProtectedPropsTypes) {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/signup");
    } else if (role && user.role !== role) {
      router.push("/board/calendar");
    }
  }, [user, role, router]);
  if (!user || user.role !== role) return null;
  return children;
}

export default ProtectedRoute;
