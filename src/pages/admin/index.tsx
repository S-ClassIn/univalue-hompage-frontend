import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "@/components/sidebar";
import FileUploadModal from "./upload";
import HomePage from "./home";
import { getCookie } from "@/utils/cookie/cookie";
import { useRouter } from "next/router";
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

interface LectureInfo {
  id: number;
  videoName: string;
  videoPath: string;
  uuid: string;
  title: string;
  name: string;
  role: string;
}

const Admin = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"upload" | "edit">("upload");
  const [selectedLecture, setSelectedLecture] = useState<LectureInfo | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState("home");
  const [isLogin, setIsLogin] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

  const refreshLectures = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleModalOpen = (mode: "upload" | "edit", lecture?: LectureInfo) => {
    setModalMode(mode);
    if (lecture) setSelectedLecture(lecture);
    else setSelectedLecture(null);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedLecture(null);
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

  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");

    if (accessToken) {
      console.log("Access Token Found:", accessToken);
      useAuthService();
      useAxiosInterceptor();
    } else {
      console.log("Access Token Not Found");
    }
  }, []);

  return (
    <AdminLayout>
      <Sidebar
        onHomeClick={() => setCurrentPage("home")}
        onUploadClick={() => handleModalOpen("upload")}
      />
      <ContentArea>
        {currentPage === "home" && (
          <HomePage
            key={refreshKey}
            onEdit={(lecture: LectureInfo | undefined) =>
              handleModalOpen("edit", lecture)
            }
          />
        )}
      </ContentArea>

      {isModalOpen && (
        <FileUploadModal
          mode={modalMode}
          onClose={handleModalClose}
          lectureInfo={selectedLecture}
          refreshLectures={refreshLectures}
        />
      )}
    </AdminLayout>
  );
};

export default Admin;
