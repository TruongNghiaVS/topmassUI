import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Cookies from "js-cookie";

const useAuth = () => {
  const router = useRouter();
  const path = usePathname();
  const listPath = [
    "/cai-dat-thong-tin-ca-nhan",
    "/xem-ho-so",
    "/cai-dat-goi-y-viec-lam",
    "/doi-mat-khau",
    "/profile-cv",
    "/viec-lam-da-ung-tuyen",
    "/viec-lam-da-luu",
    "/quan-ly-cv",
  ];

  useEffect(() => {
    // Check for token in cookies
    const token = Cookies.get("token");
    const isPath = listPath.some((pathName) => path.startsWith(pathName));
    if (!token && isPath) {
      // Redirect to login page if no token is found
      router.push("/dang-nhap");
    }
  }, [path]);
};

export default useAuth;
