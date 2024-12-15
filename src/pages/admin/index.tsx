import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "@/components/sidebar";
import FileUploadModal from "./upload";
import HomePage from "./home";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleHomeClick = () => {
    setCurrentPage("home");
  };

  const handleUploadClick = () => {
    setCurrentPage("upload");
    handleModalOpen();
  };

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
