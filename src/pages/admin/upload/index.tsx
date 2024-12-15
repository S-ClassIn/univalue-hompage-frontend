import React, { useState } from "react";
import * as S from "./style";

interface FileUploadModalProps {
  onClose: () => void;
}

const FileUploadModal = ({ onClose }: FileUploadModalProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/")) {
        setUploadedFile(file);
        setIsUploaded(true);
      } else {
        alert("영상 파일만 업로드 가능합니다.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setUploadedFile(file);
      setIsUploaded(true);
    } else {
      alert("영상 파일만 업로드 가능합니다.");
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Header>
          <p>E러닝 영상 업로드</p>
          <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        </S.Header>

        {isUploaded && uploadedFile ? (
          <S.UploadSuccessBox>
            <S.TitleBox>
              <S.FormGroup>
                <label htmlFor="lectureTitle">강의 제목</label>
                <input
                  type="text"
                  id="lectureTitle"
                  placeholder="제목을 입력해주세요"
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="lectureName">강의자 이름</label>
                <input
                  type="text"
                  id="lectureName"
                  placeholder="이름을 입력해주세요"
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="lecturePosition">강의자 직함</label>
                <input
                  type="text"
                  id="lecturePosition"
                  placeholder="직함을 입력해주세요"
                />
              </S.FormGroup>
            </S.TitleBox>

            <S.FileBox>
              <S.UploadedVideo
                controls
                src={URL.createObjectURL(uploadedFile)}
              />
              <S.FileInfo>
                <S.FileName>파일 이름</S.FileName>
                <S.VideoName>{uploadedFile.name}</S.VideoName>
              </S.FileInfo>
              <S.ButtonBox>
                <S.CancelButton onClick={onClose}>취소</S.CancelButton>
                <S.UploadButton>업로드</S.UploadButton>
              </S.ButtonBox>
            </S.FileBox>
          </S.UploadSuccessBox>
        ) : (
          <S.UploadBox
            dragActive={isDragging}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <S.UploadText>영상 파일을 여기로 끌어다놓으세요</S.UploadText>
            <S.OrText>또는</S.OrText>
            <S.UploadButton as="label">
              파일 선택
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept="video/*"
              />
            </S.UploadButton>
          </S.UploadBox>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default FileUploadModal;
