import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import FileUploadModal from "./upload/index";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Sidebar onUploadClick={handleModalOpen} />
      {isModalOpen && <FileUploadModal onClose={handleModalClose} />}
    </>
  );
};

export default Admin;
