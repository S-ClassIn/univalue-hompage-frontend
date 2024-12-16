import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar";
import FileUploadModal from "./upload";
import HomePage from "./home";
import { getCookie } from "@/utils/cookie/cookie";
import { useAuthService } from "@/utils/auth/useAuthService";
import { useAxiosInterceptor } from "@/utils/cusomAxios";

const AdminLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Admin = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isLogin, setIsLogin] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleHomeClick = () => {
    setCurrentPage("home");
  };

  const handleUploadClick = () => {
    setCurrentPage("upload");
    handleModalOpen();
  };

  // 로그인 상태 확인 및 리디렉션
  useEffect(() => {
    if (getCookie("accessToken") && getCookie("refreshToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      router.replace("/admin/login"); // 로그인 상태가 아니면 로그인 페이지로 리디렉션
    }
  }, [router]);

  return (
    <AdminLayout>
      {/* Sidebar */}
      <Sidebar
        onHomeClick={handleHomeClick}
        onUploadClick={handleUploadClick}
      />

      {/* Main Content Area */}
      <ContentArea>
        {currentPage === "home" && <HomePage />}
        {currentPage === "upload" && isModalOpen && (
          <FileUploadModal onClose={handleModalClose} />
        )}
      </ContentArea>
    </AdminLayout>
  );
};

export default Admin;
