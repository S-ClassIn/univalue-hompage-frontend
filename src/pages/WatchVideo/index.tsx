"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";
import { changeFile } from "../apis/videoApis";

interface LectureInfo {
  id: number;
  videoName: string;
  videoPath: string;
  uuid: string;
  title: string;
  name: string;
  role: string;
}

const WatchVideo = () => {
  const [lecture, setLecture] = useState<LectureInfo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedLecture = sessionStorage.getItem("selectedLecture");
    if (storedLecture) {
      setLecture(JSON.parse(storedLecture));
    } else {
      console.error("강의 정보를 불러올 수 없습니다.");
    }
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      if (lecture?.videoName) {
        try {
          const blob = await changeFile(lecture.videoName);
          const url = URL.createObjectURL(blob);
          console.log("비디오 Blob URL:", url);

          setVideoUrl(url);
        } catch (err) {
          console.error("동영상 불러오기 실패:", err);
        }
      }
    };
    fetchVideo();
  }, [lecture]);

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  if (!lecture) {
    return <div>강의 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <>
      <S.Header>
        <S.Logo src="/adminLogo.svg" alt="Univalue Logo" />
      </S.Header>
      <S.Main>
        {videoUrl ? (
          <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />
            현재 브라우저는 비디오를 지원하지 않습니다.
          </video>
        ) : (
          <div>동영상을 불러오는 중...</div>
        )}
        <S.VideoInfo>
          <S.Title>{lecture.title}</S.Title>
          <S.TitleDetail>
            <S.Name>{lecture.name}</S.Name>
            <S.Role>{lecture.role}</S.Role>
          </S.TitleDetail>
        </S.VideoInfo>
      </S.Main>
    </>
  );
};

export default WatchVideo;
