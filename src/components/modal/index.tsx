"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";
import { updateVideo } from "@/pages/apis/videoApis";

interface EditVideoModalProps {
  onClose: () => void;
  lectureInfo: {
    id: number;
    title: string;
    name: string;
    role: string;
    videoPath: string;
  };
  refreshLectures: () => void;
}

const EditVideoModal = ({
  onClose,
  lectureInfo,
  refreshLectures,
}: EditVideoModalProps) => {
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [lecturePosition, setLecturePosition] = useState("");

  useEffect(() => {
    if (lectureInfo) {
      setLectureTitle(lectureInfo.title);
      setLectureName(lectureInfo.name);
      setLecturePosition(lectureInfo.role);
    }
  }, [lectureInfo]);

  const handleUpdate = async () => {
    if (!lectureTitle || !lectureName || !lecturePosition) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      const updatedVideo = {
        id: lectureInfo.id,
        title: lectureTitle,
        name: lectureName,
        role: lecturePosition,
      };

      await updateVideo(updatedVideo);
      alert("수정이 완료되었습니다.");
      onClose();
      refreshLectures();
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Header>
          <p>E러닝 영상 수정</p>
          <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        </S.Header>

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
            <S.UploadedVideo controls src={lectureInfo.videoPath} />
            <S.FileInfo>
              <S.FileName>기존 영상 파일</S.FileName>
            </S.FileInfo>
            <S.ButtonBox>
              <S.CancelButton onClick={onClose}>취소</S.CancelButton>
              <S.UploadButton onClick={handleUpdate}>수정 완료</S.UploadButton>
            </S.ButtonBox>
          </S.FileBox>
        </S.UploadSuccessBox>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default EditVideoModal;
