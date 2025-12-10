import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const session = localStorage.getItem("session");
      if (!session) {
        router.push("/login");
        return false;
      }

      try {
        const sessionData = JSON.parse(session);
        // Check if token exists
        if (!sessionData?.access_token) {
          localStorage.removeItem("session");
          router.push("/login");
          return false;
        }

        return true;
      } catch (error) {
        localStorage.removeItem("session");
        router.push("/login");
        return false;
      }
    };

    checkAuth();
  }, [router]);
}
