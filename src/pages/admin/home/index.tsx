"use client";

import { lectureList, deleteLecture } from "@/pages/apis/videoApis";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
  height: 100vh;
`;

const CardList = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 15px 0;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Name = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  color: #969696;
  margin-top: 2px;
`;

const IconBox = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 40px;
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

interface HomePageProps {
  onEdit: (lecture: LectureInfo) => void;
}

const HomePage = ({ onEdit }: HomePageProps) => {
  const [lecture, setLecture] = useState<LectureInfo[]>([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await lectureList();
        setLecture(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLectures();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteLecture(id);
      setLecture((prev) => prev.filter((item) => item.id !== id));
      alert("강의가 삭제되었습니다.");
    } catch (err) {
      console.error(err);
      alert("강의 삭제에 실패했습니다.");
    }
  };

  return (
    <HomeContainer>
      <CardList>
        {lecture.map((item) => (
          <Card key={item.id}>
            <div>
              <p>{item.title}</p>
              <p>{item.name}</p>
            </div>
            <IconBox>
              <img
                src="/pen.svg"
                alt="edit"
                onClick={() => onEdit(item)}
                style={{ cursor: "pointer" }}
              />
              <img
                src="/delete.svg"
                alt="delete"
                onClick={() => handleDelete(item.id)}
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Card>
        ))}
      </CardList>
    </HomeContainer>
  );
};

export default HomePage;
