"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";
import { postVideoUpload, updateVideo } from "@/pages/apis/videoApis";

interface FileUploadModalProps {
  onClose: () => void;
  mode: "upload" | "edit";
  lectureInfo?: {
    id: number;
    title: string;
    name: string;
    role: string;
    videoPath: string;
  } | null;
  refreshLectures: () => void;
}

const FileUploadModal = ({
  onClose,
  mode,
  lectureInfo,
  refreshLectures,
}: FileUploadModalProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [lecturePosition, setLecturePosition] = useState("");

  useEffect(() => {
    if (mode === "edit" && lectureInfo) {
      setLectureTitle(lectureInfo.title);
      setLectureName(lectureInfo.name);
      setLecturePosition(lectureInfo.role);
      setIsUploaded(true);
    }
  }, [mode, lectureInfo]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

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

  const handleUpload = async () => {
    if (!lectureTitle || !lectureName || !lecturePosition) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      if (mode === "edit" && lectureInfo) {
        const updatedVideo = {
          id: lectureInfo.id,
          title: lectureTitle,
          name: lectureName,
          role: lecturePosition,
        };

        await updateVideo(updatedVideo);
        alert("수정이 완료되었습니다.");
      } else if (mode === "upload" && uploadedFile) {
        const formData = new FormData();
        formData.append("title", lectureTitle);
        formData.append("name", lectureName);
        formData.append("role", lecturePosition);
        formData.append("file", uploadedFile);

        const response = await postVideoUpload(formData);
        if (response) {
          alert("업로드가 완료되었습니다.");
        } else {
          alert("업로드 중 문제가 발생했습니다.");
        }
      } else {
        alert("파일을 업로드하거나 필요한 정보를 입력해주세요.");
        return;
      }

      onClose();
      refreshLectures();
    } catch (error) {
      console.error("작업 실패:", error);
      alert("작업에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Header>
          <p>{mode === "upload" ? "E러닝 영상 업로드" : "E러닝 영상 수정"}</p>
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
                  value={lectureTitle}
                  onChange={(e) => setLectureTitle(e.target.value)}
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="lectureName">강의자 이름</label>
                <input
                  type="text"
                  id="lectureName"
                  placeholder="이름을 입력해주세요"
                  value={lectureName}
                  onChange={(e) => setLectureName(e.target.value)}
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="lecturePosition">강의자 직함</label>
                <input
                  type="text"
                  id="lecturePosition"
                  placeholder="직함을 입력해주세요"
                  value={lecturePosition}
                  onChange={(e) => setLecturePosition(e.target.value)}
                />
              </S.FormGroup>
            </S.TitleBox>

            <S.FileBox>
              <S.UploadedVideo
                controls
                src={
                  uploadedFile
                    ? URL.createObjectURL(uploadedFile)
                    : lectureInfo?.videoPath || ""
                }
              />
              <S.FileInfo>
                <S.FileName>파일 이름</S.FileName>
                <S.VideoName>{uploadedFile?.name || "기존 파일"}</S.VideoName>
              </S.FileInfo>
              <S.ButtonBox>
                <S.CancelButton onClick={onClose}>취소</S.CancelButton>
                <S.UploadButton onClick={handleUpload}>
                  {mode === "upload" ? "업로드" : "수정 완료"}
                </S.UploadButton>
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
